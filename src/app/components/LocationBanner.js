'use client';
import { useState } from 'react';

export default function LocationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside className="w-full bg-[#14213d] text-white">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-2.5 text-xs tracking-wide">
        <p className="font-light opacity-90">
          Select a region to customize your viewing experience.
        </p>
        
        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-black border border-white/20 rounded-md px-2.5 py-1">
            <select className="border-none bg-transparent text-xs text-white outline-none font-medium cursor-pointer pr-2">
              <option value="kenya" className="bg-black text-white">Kenya</option>
              <option value="usa" className="bg-black text-white">United States</option>
              <option value="uk" className="bg-black text-white">United Kingdom</option>
              <option value="ca" className="bg-black text-white">Canada</option>
            </select>
          </div>
          
          <button type="button" className="bg-white text-black hover:bg-[#14213d] hover:text-white border border-white px-3.5 py-1 rounded-md text-xs font-semibold transition-all">
            Continue
          </button>
          
          <button 
            type="button" 
            onClick={() => setIsVisible(false)}
            className="bg-transparent border-none text-base text-white/60 hover:text-white cursor-pointer leading-none transition-colors"
            aria-label="Close banner"
          >
            &times;
          </button>
        </div>
      </div>
    </aside>
  );
}