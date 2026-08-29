import Image from 'next/image';

const ACCESSORY_DATA = [
  { id: 'dock', name: 'Thunderbolt 4 Dock', price: '$249', material: 'Anodized Aluminum', ports: '14 Output Ports', power: '100W Pass-Through', compatibility: 'Universal' },
  { id: 'keyboard', name: 'Mechanical Studio Board', price: '$179', material: 'CNC Aluminum Case', ports: 'USB-C / Wireless', power: '4000mAh Battery', compatibility: 'Mac / Linux / Win' },
  { id: 'charger', name: '140W GaN Fast Charger', price: '$89', material: 'Matte Polymer', ports: '3x USB-C, 1x USB-A', power: '140W Max Output', compatibility: 'Universal' }
];

export default function AccessoriesPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16 bg-black text-white">
      <section className="text-center mb-16">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2.5 py-1">Accessories</span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-6 mb-4">Precision Accessories</h1>
        <p className="text-sm font-light text-white/70 max-w-md mx-auto">Minimalist expansions built to extend power delivery, workspace connectivity, and input precision.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ACCESSORY_DATA.map((acc) => (
          <div key={acc.id} className="bg-black border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-[#14213d]/40 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-normal tracking-wide">{acc.name}</h3>
                <span className="text-base font-mono font-medium">{acc.price}</span>
              </div>
              <div className="relative w-full h-[180px] flex items-center justify-center my-6">
                <Image src="/laptop.png" alt={acc.name} width={220} height={180} className="object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                <div><span className="text-white/40 text-[10px] block">CONSTRUCTION</span><span className="text-white/80">{acc.material}</span></div>
                <div><span className="text-white/40 text-[10px] block">PORTS</span><span className="text-white/80">{acc.ports}</span></div>
                <div><span className="text-white/40 text-[10px] block">POWER</span><span className="text-white/80">{acc.power}</span></div>
                <div><span className="text-white/40 text-[10px] block">SYSTEM</span><span className="text-white/80">{acc.compatibility}</span></div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <button className="flex-1 bg-white text-black hover:bg-[#14213d] hover:text-white border border-white py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}