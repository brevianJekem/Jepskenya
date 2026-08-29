import Image from 'next/image';

const PHONE_DATA = [
  { id: 'phone-pro-max', name: 'Jepskenya Phone 1 Pro Max', price: '$1,199', chip: 'A18 Ultra', camera: '48MP Triple', battery: '29 Hours', display: '6.9" 120Hz' },
  { id: 'phone-pro', name: 'Jepskenya Phone 1 Pro', price: '$999', chip: 'A18 Pro', camera: '48MP Dual', battery: '24 Hours', display: '6.3" 120Hz' },
  { id: 'phone-std', name: 'Jepskenya Phone 1 Standard', price: '$799', chip: 'A17 Chip', camera: '24MP Dual', battery: '20 Hours', display: '6.1" OLED' }
];

export default function PhonesPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16 bg-black text-white">
      <section className="text-center mb-16">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2.5 py-1">Phones</span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-6 mb-4">Mobile Devices</h1>
        <p className="text-sm font-light text-white/70 max-w-md mx-auto">Ultra-responsive mobile hardware with integrated neural processing engines.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PHONE_DATA.map((phone) => (
          <div key={phone.id} className="bg-black border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-[#14213d]/40 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-normal tracking-wide">{phone.name}</h3>
                <span className="text-base font-mono font-medium">{phone.price}</span>
              </div>
              <div className="relative w-full h-[180px] flex items-center justify-center my-6">
                <Image src="/laptop.png" alt={phone.name} width={220} height={180} className="object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                <div><span className="text-white/40 text-[10px] block">PROCESSOR</span><span className="text-white/80">{phone.chip}</span></div>
                <div><span className="text-white/40 text-[10px] block">CAMERA</span><span className="text-white/80">{phone.camera}</span></div>
                <div><span className="text-white/40 text-[10px] block">BATTERY</span><span className="text-white/80">{phone.battery}</span></div>
                <div><span className="text-white/40 text-[10px] block">SCREEN</span><span className="text-white/80">{phone.display}</span></div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
              <button className="flex-1 bg-white text-black hover:bg-[#14213d] hover:text-white border border-white py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors">Order Phone</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}