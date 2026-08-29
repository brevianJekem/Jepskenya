'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function LaptopsPage() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotation({ x: -y * 15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-12 bg-black text-white">
      {/* Product Hero */}
      <section className="text-center mb-16">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2 py-0.5">
          New Release
        </span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-4 mb-2">
          Jepskenya Pro Book
        </h1>
        <p className="text-sm font-light text-white/70 max-w-lg mx-auto mb-6">
          High-performance computing designed for developers, creators, and power users.
        </p>

        <div className="flex justify-center items-center gap-4 mb-10">
          <span className="text-xl font-medium">From $1,299</span>
          <button className="bg-white text-black hover:bg-[#14213d] hover:text-white border border-white px-6 py-2.5 text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer">
            Buy Now
          </button>
        </div>

        {/* 3D Cursor Rotation Viewer */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-[700px] mx-auto h-[320px] md:h-[400px] flex items-center justify-center cursor-pointer"
          style={{ perspective: '1000px' }}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <Image 
              src="/laptop.png" 
              alt="Jepskenya Pro Laptop" 
              width={700}
              height={450}
              priority
              className="object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(20,33,61,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* Tech Specs Grid */}
      <section className="border-t border-white/10 pt-16 mb-20">
        <h2 className="text-xs font-mono tracking-widest uppercase text-white/40 mb-8">
          Hardware Specifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-6">
            <span className="text-xs text-white/40 font-mono block mb-1">Processor</span>
            <p className="text-lg font-medium">12-Core CPU</p>
            <p className="text-xs text-white/60 font-light mt-1">Blazing fast execution</p>
          </div>

          <div className="bg-black p-6">
            <span className="text-xs text-white/40 font-mono block mb-1">Memory</span>
            <p className="text-lg font-medium">Up to 64GB</p>
            <p className="text-xs text-white/60 font-light mt-1">Unified RAM architecture</p>
          </div>

          <div className="bg-black p-6">
            <span className="text-xs text-white/40 font-mono block mb-1">Display</span>
            <p className="text-lg font-medium">120Hz Retina</p>
            <p className="text-xs text-white/60 font-light mt-1">Ultra-accurate color gamut</p>
          </div>

          <div className="bg-black p-6">
            <span className="text-xs text-white/40 font-mono block mb-1">Battery Life</span>
            <p className="text-lg font-medium">Up to 20 Hours</p>
            <p className="text-xs text-white/60 font-light mt-1">All-day sustained power</p>
          </div>
        </div>
      </section>

      {/* Customer Perks */}
      <section className="bg-[#14213d] border border-white/20 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-light mb-1">Official Warranty & Local Support</h3>
          <p className="text-xs text-white/70 font-light">Free delivery nationwide with standard 2-year warranty coverage on all orders.</p>
        </div>
        <button className="bg-white text-black hover:bg-black hover:text-white border border-white px-6 py-3 text-xs tracking-wider uppercase font-semibold cursor-pointer transition-all whitespace-nowrap">
          Order Online
        </button>
      </section>
    </main>
  );
}