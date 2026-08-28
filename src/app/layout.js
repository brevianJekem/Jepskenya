import LocationBanner from './components/LocationBanner';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Jepskenya — Support',
  description: 'Minimalist & Premium Intelligence Hub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased font-sans selection:bg-[#14213d] selection:text-white">
        <LocationBanner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}