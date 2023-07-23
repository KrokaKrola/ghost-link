import '@/_app/styles/main.scss';
import type { Metadata } from 'next';
import { Goldman } from 'next/font/google';
import Header from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import clsx from 'clsx';

const inter = Goldman({
  weight: ['400', '700'],
  variable: '--primary-font',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ghost Link',
  description: 'Self Destructing Links For Sharing Sensitive Information',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
