import { Nunito } from 'next/font/google';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Salman Anime List',
  description: 'Website Anime Bahasa Indonesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-color-dark`} suppressContentEditableWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
