import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tushar Khande — Java Backend Developer',
    template: '%s | Tushar Khande',
  },
  description:
    'Tushar Khande is a Software Engineer specializing in Java, Spring Boot, REST APIs, microservices, and Oracle SQL. Based in Pune, India.',
  keywords: [
    'Tushar Khande', 'Java Developer', 'Backend Developer', 'Spring Boot',
    'Microservices', 'REST APIs', 'Oracle SQL', 'Software Engineer', 'Pune',
  ],
  authors: [{ name: 'Tushar Khande' }],
  creator: 'Tushar Khande',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tusharkhande.dev',
    siteName: 'Tushar Khande',
    title: 'Tushar Khande — Java Backend Developer',
    description:
      'Software Engineer specializing in Java, Spring Boot, REST APIs, microservices, and Oracle SQL.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar Khande — Java Backend Developer',
    description:
      'Software Engineer specializing in Java, Spring Boot, REST APIs, microservices, and Oracle SQL.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
