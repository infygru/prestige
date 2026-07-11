import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = { title: 'Sitemap' };

const SITE_MAP = [
  {
    group: 'Company',
    links: [
      { label: 'Home',              href: '/'          },
      { label: 'About Us',          href: '/about'     },
      { label: 'Sustainability',    href: '/about#sustainability' },
      { label: 'Governance',        href: '/about#governance'    },
      { label: 'Careers',           href: '/careers'   },
      { label: 'Contact Us',        href: '/contact'   },
    ],
  },
  {
    group: 'Mining Operations',
    links: [
      { label: 'Mining Overview',    href: '/mining'               },
      { label: 'Open-Cut Extraction', href: '/mining#extraction'   },
      { label: 'Ore Processing',     href: '/mining#processing'    },
      { label: 'Mine Logistics & Port', href: '/mining#logistics'  },
      { label: 'Service: Open-Cut Extraction', href: '/services/open-cut-extraction' },
      { label: 'Service: Ore Processing',      href: '/services/ore-processing'      },
      { label: 'Service: Mine Logistics',      href: '/services/mine-logistics'      },
    ],
  },
  {
    group: 'Clean Energy',
    links: [
      { label: 'Energy Overview',    href: '/energy'              },
      { label: 'Utility-Scale Solar', href: '/energy#solar'      },
      { label: 'Battery Storage',    href: '/energy#storage'     },
      { label: 'Power Agreements',   href: '/energy#ppa'         },
      { label: 'Service: Utility Solar',   href: '/services/utility-solar'    },
      { label: 'Service: Battery Storage', href: '/services/battery-storage'  },
      { label: 'Service: Power PPAs',      href: '/services/power-purchase'   },
    ],
  },
  {
    group: 'Insights',
    links: [
      { label: 'All Insights',       href: '/insights'            },
      { label: 'Press Releases',     href: '/insights'            },
      { label: 'Industry Insights',  href: '/insights'            },
      { label: 'Sustainability',     href: '/insights'            },
    ],
  },
  {
    group: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Legal Notices',  href: '/legal'   },
      { label: 'Sitemap',        href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        overline="Navigation"
        headline="Sitemap"
        subheadline="A complete overview of all pages on the Prestige Mining and Energy website."
        breadcrumbs={[{ label: 'Sitemap' }]}
      />
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SITE_MAP.map((section) => (
              <div key={section.group}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00A8C4', marginBottom: '1rem' }}>
                  {section.group}
                </h2>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href}
                        className="flex items-center gap-2 group transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#4A4A4A' }}>
                        <ArrowRight size={12} style={{ color: '#00A8C4', flexShrink: 0 }} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                        <span className="group-hover:text-[#00A8C4] transition-colors duration-150">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
