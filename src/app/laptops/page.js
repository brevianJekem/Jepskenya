import Link from 'next/link';
import Image from 'next/image';

const LAPTOP_DATA = [
  { id: 'pro-16', name: 'Pro Book 16', price: '$1,899', cpu: '16-Core', ram: '32GB', storage: '1TB SSD', display: '16" 120Hz' },
  { id: 'air-14', name: 'Air Book 14', price: '$1,299', cpu: '10-Core', ram: '16GB', storage: '512GB SSD', display: '14" Retina' },
  { id: 'studio-15', name: 'Studio Book 15', price: '$1,599', cpu: '12-Core', ram: '32GB', storage: '1TB SSD', display: '15.6" OLED' },
  { id: 'workstation', name: 'Linux Workstation', price: '$1,449', cpu: '12-Core', ram: '64GB', storage: '2TB SSD', display: '14" 120Hz' }
];

export default function LaptopsPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16 bg-black text-white">
      <section className="text-center mb-16">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2.5 py-1">Laptops</span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-6 mb-4">Precision Laptops</h1>
        <p className="text-sm font-light text-white/70 max-w-md mx-auto">Built for heavy compilation, digital design, and sustained engineering workloads.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LAPTOP_DATA.map((laptop) => (
          <div key={laptop.id} className="bg-black border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-[#14213d]/40 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-normal tracking-wide">{laptop.name}</h3>
                <span className="text-lg font-mono font-medium">{laptop.price}</span>
              </div>
              <div className="relative w-full h-[180px] flex items-center justify-center my-6">
                <Image src="/laptop.png" alt={laptop.name} width={300} height={180} className="object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                <div><span className="text-white/40 text-[10px] block">CPU</span><span className="text-white/80">{laptop.cpu}</span></div>
                <div><span className="text-white/40 text-[10px] block">RAM</span><span className="text-white/80">{laptop.ram}</span></div>
                <div><span className="text-white/40 text-[10px] block">STORAGE</span><span className="text-white/80">{laptop.storage}</span></div>
                <div><span className="text-white/40 text-[10px] block">DISPLAY</span><span className="text-white/80">{laptop.display}</span></div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <button className="flex-1 bg-white text-black hover:bg-[#14213d] hover:text-white border border-white py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors">Configure & Buy</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}