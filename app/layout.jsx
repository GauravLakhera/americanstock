import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StockTicker from '@/components/StockTicker';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'American Stock Market Institute - Learn Trading, Earn Smart, Build Wealth',
  description: 'Master the art of trading with professional guidance. Join thousands of successful traders who learned from industry experts.',
  keywords: 'stock trading, stock market course, trading institute, financial education, investment training',
  authors: [{ name: 'American Stock Market Institute' }],
  openGraph: {
    title: 'American Stock Market Institute - Learn Trading, Earn Smart, Build Wealth',
    description: 'Master the art of trading with professional guidance. Join thousands of successful traders who learned from industry experts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Stock Market Institute - Learn Trading, Earn Smart, Build Wealth',
    description: 'Master the art of trading with professional guidance. Join thousands of successful traders who learned from industry experts.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StockTicker/>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}