'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function LaptopsPage() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate cursor distance from center (-1 to 1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Rotate up to 15 degrees based on movement
    setRotation({
      x: -y * 20, 
      y: x * 20
    });
  };

  const handleMouseLeave = () => {
    // Smoothly reset back to flat position
    setRotation({ x: 0, y: 0 });
  };

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-16 bg-black text-white">
      {/* Interactive 3D Rotation Section */}
      <section className="text-center mb-24">
        <span className="text-[10px] tracking-widest uppercase font-mono text-white/50 border border-white/20 px-2 py-0.5">
          Pro Series Flagship
        </span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mt-4 mb-2">
          Precision Engineering
        </h1>
        <p className="text-xs font-light text-white/60 mb-12">
          Move your cursor over the device to view hardware ergonomics in 3D perspective.
        </p>

        {/* 3D Container */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-[650px] mx-auto h-[350px] md:h-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: '1000px' }}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <Image 
              src="/laptop.png" 
              alt="Flagship Laptop" 
              width={700}
              height={450}
              priority
              className="object-contain drop-shadow-[0_20px_40px_rgba(20,33,61,0.5)] select-none pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Customer Value & Spec Breakdown Grid */}
      <section className="border-t border-white/10 pt-16">
        <h2 className="text-xs font-mono tracking-widest uppercase text-white/40 mb-10">
          Exclusive Ownership Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8 hover:bg-[#14213d] transition-colors">
            <span className="text-xs font-mono text-white/40 mb-4 block">01</span>
            <h3 className="text-lg font-normal tracking-wide mb-2">Direct Telemetry Diagnostics</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Every unit includes direct, automated connection to our 24/7 intelligence support engine for real-time hardware health checks.
            </p>
          </div>

          <div className="bg-black p-8 hover:bg-[#14213d] transition-colors">
            <span className="text-xs font-mono text-white/40 mb-4 block">02</span>
            <h3 className="text-lg font-normal tracking-wide mb-2">Extended Zero-Downtime Guarantee</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Complimentary advance replacements shipped directly to your business before returning hardware during service claims.
            </p>
          </div>

          <div className="bg-black p-8 hover:bg-[#14213d] transition-colors">
            <span className="text-xs font-mono text-white/40 mb-4 block">03</span>
            <h3 className="text-lg font-normal tracking-wide mb-2">Precision Thermal Tuning</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Custom-calibrated thermal limits engineered specifically to support extended compilation and high-load workloads.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}