import type {Metadata} from 'next';
import './globals.css';
import { ParticleFieldBackground } from '@/components/effects/ParticleFieldBackground';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { JsonLd } from '@/components/JsonLd';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BackToTop } from '@/components/ui/BackToTop';
import { SITE_URL } from '@/lib/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Kunal Pareek | Open Source Centric Full Stack Engineer',
  description: 'Portfolio of Kunal Pareek, building WordPress ecosystems, plugins, automation tools, and modern frontend applications with React, Next.js, and TypeScript.',
  keywords: ['Kunal Pareek', 'Software Engineer', 'WordPress', 'React', 'Next.js', 'Typescript', 'Open Source', 'Full Stack Developer'],
  authors: [{ name: 'Kunal Pareek' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Kunal Pareek | Full Stack Engineer',
    description: 'Building WordPress ecosystems and modern frontend applications.',
    siteName: 'Kunal Pareek Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 150,
        height: 80,
        alt: 'Kunal Pareek logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Kunal Pareek | Full Stack Engineer',
    description: 'Building WordPress ecosystems and modern frontend applications.',
    images: ['/logo.png'],
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-[#1A1A1A] selection:text-[#E5E7EB]" suppressHydrationWarning>
        <LoadingScreen />
        <JsonLd />
        <ThemeProvider>
          <CustomCursor />
          <ParticleFieldBackground />
          <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[-1]" style={{ backgroundImage: 'radial-gradient(#888888 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
