/**
 * lib/directus.ts — SDK client, schema types, query helpers.
 * Server-only. Never import from a 'use client' component.
 */

import {
  createDirectus, rest, readSingleton, readItems,
  staticToken,
  type DirectusClient, type RestClient, type StaticTokenClient,
} from '@directus/sdk';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GlobalSettings {
  id: number;
  site_name: string; site_tagline: string | null;
  logo: string | null; logo_light: string | null; favicon: string | null;
  contact_email: string; contact_phone: string; hq_address: string;
  linkedin_url: string | null; twitter_url: string | null;
  seo_default_title: string; seo_default_description: string; seo_og_image: string | null;
}

export interface SiteImages {
  id: number;
  hero_background: string | null;
  hero_overlay_image: string | null;
  about_image: string | null;
  mining_sector_image: string | null;
  energy_sector_image: string | null;
  operations_background: string | null;
  cta_background: string | null;
}

export interface HomepageData {
  id: number;
  hero_headline: string; hero_subheadline: string;
  hero_video_url: string | null; hero_background_image: string | null;
  hero_cta_primary_label: string; hero_cta_primary_url: string;
  hero_cta_secondary_label: string; hero_cta_secondary_url: string;
  about_overline: string | null; about_headline: string | null;
  about_body: string | null; about_cta_label: string | null; about_cta_url: string | null;
  sectors_headline: string; sectors_description: string;
  operations_headline: string; operations_description: string;
  gallery_headline: string | null;
  insights_headline: string;
}

export interface ServiceStat { label: string; value: string; unit?: string; }

export interface Service {
  id: number; status: 'published' | 'draft'; sort: number;
  title: string; slug: string; sector: 'mining' | 'energy';
  short_description: string; description: string;
  cover_image: string | null; background_image: string | null;
  icon_name: string | null; featured: boolean; stats: ServiceStat[] | null;
}

export interface OperationStat {
  id: number; status: 'published' | 'draft'; sort: number;
  value: string; unit: string; label: string;
  description: string | null; icon_image: string | null;
}

export type InsightCategory = 'press_release' | 'industry_insight' | 'project_update' | 'sustainability';

export interface PressInsight {
  id: number; status: 'published' | 'draft'; published_date: string;
  title: string; slug: string; category: InsightCategory;
  excerpt: string; body: string; cover_image: string | null;
  author: string | null; featured: boolean;
}

export interface GalleryItem {
  id: number; status: 'published' | 'draft'; sort: number;
  image: string; alt_text: string; caption: string | null;
  category: 'mining' | 'energy' | 'people' | 'facilities';
  span_wide: boolean;
}

export interface NavItem {
  id: number; status: 'published' | 'draft'; sort: number;
  label: string; url: string; open_in_new_tab: boolean; parent: number | null;
}

type Schema = {
  global_settings: GlobalSettings; site_images: SiteImages; homepage: HomepageData;
  services: Service[]; operations_stats: OperationStat[]; press_insights: PressInsight[];
  gallery: GalleryItem[]; navigation: NavItem[];
};

type TypedClient = DirectusClient<Schema> & RestClient<Schema> & StaticTokenClient<Schema>;
let _client: TypedClient | null = null;

function getClient(): TypedClient {
  if (_client) return _client;
  const url   = process.env.DIRECTUS_URL;
  if (!url) throw new Error('DIRECTUS_URL is not set');
  const token = process.env.DIRECTUS_STATIC_TOKEN;
  _client = (token
    ? createDirectus<Schema>(url).with(staticToken(token)).with(rest())
    : createDirectus<Schema>(url).with(rest())) as TypedClient;
  return _client;
}

// ─── Asset URL ────────────────────────────────────────────────────────────────

export function getAssetUrl(
  fileId: string | null | undefined,
  params?: Record<string, string | number>,
): string | null {
  if (!fileId) return null;
  // Pass through external URLs (e.g. Unsplash placeholder images) unchanged
  if (fileId.startsWith('http://') || fileId.startsWith('https://')) return fileId;
  const url = new URL(`/assets/${fileId}`, process.env.DIRECTUS_URL ?? '');
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  return url.toString();
}

// ─── Queries ──────────────────────────────────────────────────────────────────

export const getGlobalSettings  = async () => getClient().request(readSingleton('global_settings'));
export const getSiteImages      = async () => getClient().request(readSingleton('site_images'));
export const getHomepageData    = async () => getClient().request(readSingleton('homepage'));

export const getFeaturedServices = async () =>
  getClient().request(readItems('services', { filter: { status: { _eq: 'published' }, featured: { _eq: true } }, sort: ['sort'], limit: 6 }));

export const getOperationsStats = async () =>
  getClient().request(readItems('operations_stats', { filter: { status: { _eq: 'published' } }, sort: ['sort'] }));

export const getLatestInsights = async (limit = 3) =>
  getClient().request(readItems('press_insights', {
    filter: { status: { _eq: 'published' } }, sort: ['-published_date'], limit,
    fields: ['id', 'title', 'slug', 'category', 'excerpt', 'cover_image', 'published_date', 'author', 'featured'] as (keyof PressInsight)[],
  }));

export const getGalleryItems = async () =>
  getClient().request(readItems('gallery', { filter: { status: { _eq: 'published' } }, sort: ['sort'], limit: 8 }));

export const getNavigation = async () =>
  getClient().request(readItems('navigation', { filter: { status: { _eq: 'published' } }, sort: ['sort'] }));

export const getAllServices = async () =>
  getClient().request(readItems('services', { filter: { status: { _eq: 'published' } }, sort: ['sort'] }));

export const getServicesBySector = async (sector: 'mining' | 'energy') =>
  getClient().request(readItems('services', { filter: { status: { _eq: 'published' }, sector: { _eq: sector } }, sort: ['sort'] }));

export const getServiceBySlug = async (slug: string) =>
  getClient().request(readItems('services', { filter: { status: { _eq: 'published' }, slug: { _eq: slug } }, limit: 1 }))
    .then(r => r[0] ?? null);

export const getAllInsights = async (limit = 50) =>
  getClient().request(readItems('press_insights', {
    filter: { status: { _eq: 'published' } }, sort: ['-published_date'], limit,
  }));

export const getInsightBySlug = async (slug: string) =>
  getClient().request(readItems('press_insights', { filter: { status: { _eq: 'published' }, slug: { _eq: slug } }, limit: 1 }))
    .then(r => r[0] ?? null);
