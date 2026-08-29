'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const pathname = usePathname();
  const { cart, openCart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

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
        
        <div className="flex items-center gap-4">
          <button 
            onClick={openCart}
            type="button" 
            className="bg-[#14213d] border border-white/20 text-white px-3 py-1.5 text-xs font-mono flex items-center gap-2 hover:border-white transition-colors cursor-pointer"
          >
            <span>BAG</span>
            <span className="bg-white text-black px-1.5 py-0.2 text-[10px] font-bold">
              {itemCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}