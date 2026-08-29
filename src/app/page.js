import Link from 'next/link';
import Image from 'next/image';

export default function StoreHome() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-16 bg-black text-white">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2.5 py-1">
          JEPS KENYA
        </span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-6 mb-4">
          High-Performance Hardware
        </h1>
        <p className="text-sm font-light text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
          Engineered for software developers, creators, and enterprise computing.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link 
            href="/laptops" 
            className="bg-white text-black hover:bg-[#14213d] hover:text-white border border-white px-6 py-3 text-xs tracking-wider uppercase font-semibold transition-all"
          >
            Explore Laptops
          </Link>
          <Link 
            href="/support" 
            className="bg-transparent text-white/80 hover:text-white border border-white/20 hover:border-white px-6 py-3 text-xs tracking-wider uppercase font-medium transition-all"
          >
            Access Support
          </Link>
        </div>
      </section>

      {/* Featured Hardware Showcase */}
      <section className="relative border border-white/10 bg-[#14213d] p-10 md:p-14 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Flagship Line</span>
          <h2 className="text-2xl md:text-3xl font-light mt-2 mb-4">Pro Book Series</h2>
          <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
            Equipped with 12-Core architecture, high-frequency displays, and extended battery life.
          </p>
          <Link 
            href="/laptops" 
            className="inline-block bg-white text-black border border-white px-5 py-2.5 text-xs tracking-wider uppercase font-semibold hover:bg-black hover:text-white transition-all"
          >
            View Specs & Pricing
          </Link>
        </div>

        <div className="relative w-full max-w-[400px] h-[220px] flex items-center justify-center">
          <Image 
            src="/laptop.png" 
            alt="Pro Laptop" 
            width={400} 
            height={250} 
            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            priority
          />
        </div>
      </section>

      {/* Store Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        <div className="bg-black p-8 hover:bg-[#14213d] transition-colors">
          <span className="text-xs font-mono text-white/40 mb-4 block">01</span>
          <h3 className="text-lg font-normal tracking-wide mb-2">Laptops</h3>
          <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
            Stationary power in mobile form factors tailored for developer workflows.
          </p>
          <Link href="/laptops" className="text-xs font-mono text-white hover:underline">
            Browse Models &rarr;
          </Link>
        </div>

        <div className="bg-black p-8 hover:bg-[#14213d] transition-colors">
          <span className="text-xs font-mono text-white/40 mb-4 block">02</span>
          <h3 className="text-lg font-normal tracking-wide mb-2">Mobile Hardware</h3>
          <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
            High-efficiency devices designed for seamless connectivity on the go.
          </p>
          <span className="text-xs font-mono text-white/40">Coming Soon</span>
        </div>

        <div className="bg-black p-8 hover:bg-[#14213d] transition-colors">
          <span className="text-xs font-mono text-white/40 mb-4 block">03</span>
          <h3 className="text-lg font-normal tracking-wide mb-2">Direct Support</h3>
          <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
            Automated diagnostics, troubleshooting, warranty setup, and repair logs.
          </p>
          <Link href="/support" className="text-xs font-mono text-white hover:underline">
            Open Portal &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}