'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Store', path: '/' },
    { name: 'Laptops', path: '/laptops' },
    { name: 'Phones', path: '/phones' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 h-16">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Jepskenya Logo" 
            width={160} 
            height={40} 
            className="h-9 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>
        
        <nav className="flex gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name}
                href={item.path} 
                className={`text-xs tracking-wider uppercase transition-all ${
                  isActive 
                    ? 'text-white font-semibold border-b border-white pb-0.5' 
                    : 'text-white/70 font-medium hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <button type="button" className="bg-transparent border-none p-2 cursor-pointer text-white/70 hover:text-white transition-colors" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}