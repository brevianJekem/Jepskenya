'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './store/useCart';

const STORE_ITEMS = [
  { id: 'pro-book-16', category: 'Laptop', name: 'Jepskenya Pro Book 16', price: '$1,899', specs: { a: '16-Core CPU', b: '32GB RAM', c: '1TB SSD', d: '16" 120Hz' }, image: '/laptop.png', link: '/laptops' },
  { id: 'phone-pro', category: 'Phone', name: 'Jepskenya Phone 1 Pro', price: '$999', specs: { a: 'A18 Bionic', b: '12GB RAM', c: '256GB NVMe', d: '6.7" OLED' }, image: '/laptop.png', link: '/phones' },
  { id: 'dock-station', category: 'Accessory', name: 'Thunderbolt 4 Hub', price: '$249', specs: { a: '14 Ports', b: '100W PD', c: '8K Output', d: 'Aluminum' }, image: '/laptop.png', link: '/accessories' },
  { id: 'air-book-14', category: 'Laptop', name: 'Jepskenya Air Book 14', price: '$1,299', specs: { a: '10-Core CPU', b: '16GB RAM', c: '512GB SSD', d: '14" Retina' }, image: '/laptop.png', link: '/laptops' }
];

export default function StoreHome() {
  const { addToCart } = useCart();

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16 bg-black text-white">
      <section className="text-center mb-16">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2.5 py-1">All Products</span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-6 mb-4">Hardware Store</h1>
        <p className="text-sm font-light text-white/70 max-w-md mx-auto">Explore high-performance computing, mobile hardware, and precision accessories.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {STORE_ITEMS.map((item) => (
          <div key={item.id} className="bg-black border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-[#14213d]/40 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[9px] tracking-widest uppercase font-mono text-white bg-[#14213d] border border-white/20 px-2 py-0.5 mb-2 inline-block">{item.category}</span>
                  <h3 className="text-xl font-normal tracking-wide">{item.name}</h3>
                </div>
                <span className="text-lg font-mono font-medium">{item.price}</span>
              </div>
              <div className="relative w-full h-[180px] flex items-center justify-center my-6">
                <Image src={item.image} alt={item.name} width={300} height={180} className="object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                <div><span className="text-white/40 text-[10px] block">SPEC 01</span><span className="text-white/80">{item.specs.a}</span></div>
                <div><span className="text-white/40 text-[10px] block">SPEC 02</span><span className="text-white/80">{item.specs.b}</span></div>
                <div><span className="text-white/40 text-[10px] block">SPEC 03</span><span className="text-white/80">{item.specs.c}</span></div>
                <div><span className="text-white/40 text-[10px] block">SPEC 04</span><span className="text-white/80">{item.specs.d}</span></div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <button 
                onClick={() => addToCart(item)}
                type="button"
                className="flex-1 text-center bg-white text-black hover:bg-[#14213d] hover:text-white border border-white py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors cursor-pointer"
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
