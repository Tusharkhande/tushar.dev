import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tushar Khande — Full Stack Developer',
    template: '%s | Tushar Khande',
  },
  description:
    'Tushar Khande is a Full Stack Developer specializing in Java, Spring Boot, REST APIs, microservices, React, and mobile engineering with a strong backend foundation.',
  keywords: [
    'Tushar Khande', 'Full Stack Developer', 'Software Engineer', 'Java Developer',
    'Spring Boot', 'React', 'REST APIs', 'Microservices', 'Oracle SQL', 'React Native', 'Pune',
  ],
  authors: [{ name: 'Tushar Khande' }],
  creator: 'Tushar Khande',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tusharkhande.dev',
    siteName: 'Tushar Khande',
    title: 'Tushar Khande — Full Stack Developer',
    description:
      'Full Stack Developer specializing in Java, Spring Boot, REST APIs, microservices, React, and mobile engineering.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar Khande — Full Stack Developer',
    description:
      'Full Stack Developer specializing in Java, Spring Boot, REST APIs, microservices, React, and mobile engineering.',
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
