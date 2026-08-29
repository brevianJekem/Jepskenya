import Link from 'next/link';
import Image from 'next/image';

// Sample product database structure (easy to replace with dynamic DB fetch later)
const LAPTOP_DATA = [
  {
    id: 'pro-book-16',
    name: 'Jepskenya Pro Book 16',
    tagline: 'Extreme performance for high-load development & rendering.',
    price: '$1,899',
    specs: { cpu: '16-Core CPU', ram: '32GB RAM', storage: '1TB SSD', display: '16" 120Hz Retina' },
    image: '/laptop.png',
    featured: true
  },
  {
    id: 'air-book-14',
    name: 'Jepskenya Air Book 14',
    tagline: 'Ultra-thin, silent operation with all-day battery endurance.',
    price: '$1,299',
    specs: { cpu: '10-Core CPU', ram: '16GB RAM', storage: '512GB SSD', display: '14" Retina' },
    image: '/laptop.png',
    featured: false
  },
  {
    id: 'studio-book-15',
    name: 'Jepskenya Studio Book 15',
    tagline: 'Color-calibrated display for digital design & audio engineering.',
    price: '$1,599',
    specs: { cpu: '12-Core CPU', ram: '32GB RAM', storage: '1TB SSD', display: '15.6" OLED' },
    image: '/laptop.png',
    featured: false
  },
  {
    id: 'developer-edition',
    name: 'Jepskenya Linux Workstation',
    tagline: 'Pre-configured terminal environments with customized kernel tuning.',
    price: '$1,449',
    specs: { cpu: '12-Core CPU', ram: '64GB RAM', storage: '2TB SSD', display: '14" 120Hz' },
    image: '/laptop.png',
    featured: false
  }
];

export default function StoreHome() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16 bg-black text-white">
      {/* Hero Header */}
      <section className="text-center mb-16">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2.5 py-1">
          Catalog 2026
        </span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-6 mb-4">
          Hardware Store
        </h1>
        <p className="text-sm font-light text-white/70 max-w-md mx-auto leading-relaxed">
          Explore our line of laptops built specifically for software development and demanding workloads.
        </p>
      </section>

      {/* Product Catalog Grid */}
      <section className="mb-20">
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
          <h2 className="text-xs font-mono tracking-widest uppercase text-white/50">
            Available Laptops ({LAPTOP_DATA.length})
          </h2>
          <span className="text-xs text-white/40 font-mono">Filter: All Models</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {LAPTOP_DATA.map((laptop) => (
            <div 
              key={laptop.id}
              className="bg-black border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-[#14213d]/40 transition-all group"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {laptop.featured && (
                      <span className="text-[9px] tracking-widest uppercase font-mono text-white bg-[#14213d] border border-white/20 px-2 py-0.5 mb-2 inline-block">
                        Flagship
                      </span>
                    )}
                    <h3 className="text-xl font-normal tracking-wide">{laptop.name}</h3>
                  </div>
                  <span className="text-lg font-mono font-medium">{laptop.price}</span>
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {laptop.tagline}
                </p>

                {/* Laptop Image Preview */}
                <div className="relative w-full h-[200px] flex items-center justify-center my-6">
                  <Image 
                    src={laptop.image} 
                    alt={laptop.name}
                    width={350}
                    height={200}
                    className="object-contain select-none group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_15px_25px_rgba(20,33,61,0.5)]"
                  />
                </div>

                {/* Technical Specs List */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                  <div>
                    <span className="text-white/40 text-[10px] block">PROCESSOR</span>
                    <span className="text-white/80">{laptop.specs.cpu}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] block">MEMORY</span>
                    <span className="text-white/80">{laptop.specs.ram}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] block">STORAGE</span>
                    <span className="text-white/80">{laptop.specs.storage}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] block">DISPLAY</span>
                    <span className="text-white/80">{laptop.specs.display}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                <Link 
                  href="/laptops" 
                  className="flex-1 text-center bg-white text-black hover:bg-[#14213d] hover:text-white border border-white py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors"
                >
                  View Interactive 3D
                </Link>
                <button 
                  type="button" 
                  className="bg-transparent text-white/70 hover:text-white border border-white/20 hover:border-white px-4 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors cursor-pointer"
                >
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Guarantee Banner */}
      <section className="bg-[#14213d] border border-white/20 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2 py-0.5">
            Store Warranty
          </span>
          <h3 className="text-xl font-light mt-2 mb-1">Direct Technical Inspection</h3>
          <p className="text-xs text-white/70 font-light max-w-lg">
            All hardware purchases include pre-installed support diagnostics linked straight to our online support team.
          </p>
        </div>
        <Link 
          href="/support" 
          className="bg-white text-black hover:bg-black hover:text-white border border-white px-6 py-3 text-xs tracking-wider uppercase font-semibold transition-all whitespace-nowrap"
        >
          Support Hub
        </Link>
      </section>
    </main>
  );
}