import type { Metadata, Viewport } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { getGlobalSettings, getAssetUrl } from '@/lib/directus';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// ─── Fonts ────────────────────────────────────────────────────────────────────

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  themeColor: '#0A2558',
  colorScheme: 'light',
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  try {
    const s = await getGlobalSettings();
    const ogImage = getAssetUrl(s.seo_og_image, { width: 1200, height: 630, fit: 'cover' });
    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
      title:       { default: s.seo_default_title, template: `%s — ${s.site_name}` },
      description:  s.seo_default_description,
      openGraph:   { type: 'website', siteName: s.site_name, images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [] },
      twitter:     { card: 'summary_large_image' },
      icons:       { icon: s.favicon ? (getAssetUrl(s.favicon) ?? '/favicon.ico') : '/favicon.ico' },
    };
  } catch (err) {
    const msg = err && typeof err === 'object' && 'message' in err ? (err as { message: string }).message : String(err);
    console.warn('[Directus] generateMetadata fallback — could not fetch global_settings:', msg);
    return {
      title:       { default: 'Prestige Mining and Energy', template: '%s — Prestige Mining and Energy' },
      description: 'Global leader in large-scale mining operations and sustainable energy solutions.',
    };
  }
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let settings = null;
  try { settings = await getGlobalSettings(); } catch (err) {
    const msg = err && typeof err === 'object' && 'message' in err ? (err as { message: string }).message : String(err);
    console.warn('[Directus] RootLayout fallback — could not fetch global_settings:', msg);
  }

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body style={{ fontFamily: 'var(--font-body)', backgroundColor: '#FFFFFF', color: '#1E2D42' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#0A2558] focus:px-4 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <Header settings={settings} />
        <main id="main-content" style={{ paddingTop: '68px' }}>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
