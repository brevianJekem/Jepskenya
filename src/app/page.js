'use client';
import { useState, useRef, useEffect } from 'react';

export default function SupportPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'System ready. Enter your inquiry or device code.', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userText = inputValue;
    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { text: `Processing input... Fetching telemetry for "${userText}".`, isBot: true }
      ]);
    }, 600);
  };

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20 bg-black text-white">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-8">
          Support Engine
        </h1>
        
        <div className="relative max-w-[600px] mx-auto mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search documentation, topics, or errors..."
            className="w-full py-4 pr-5 pl-12 text-sm rounded-none border-b border-white/30 bg-transparent text-white placeholder-white/40 outline-none focus:border-white transition-colors"
          />
        </div>

        <div className="flex justify-center items-center gap-3 text-xs tracking-wider text-white/50">
          <span>DIRECT LINKS:</span>
          {['Orders', 'Warranty', 'Setup', 'Returns'].map((tag) => (
            <button key={tag} className="bg-transparent text-white/80 hover:text-white border border-white/20 hover:border-white px-3 py-1 rounded-none text-xs tracking-wide transition-all cursor-pointer">
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20">
        {[
          { num: '01', title: 'Hardware Diagnostics', desc: 'Identify system status, submit tickets, or schedule repairs.' },
          { num: '02', title: 'Security & Access', desc: 'Manage passkeys, authentication methods, and security settings.' },
          { num: '03', title: 'Logistics & Orders', desc: 'Track dispatches, alter shipments, or initialize returns.' },
          { num: '04', title: 'Billing & Enterprise', desc: 'Access invoices, payment methods, and subscription tiers.' }
        ].map((card) => (
          <div key={card.num} className="bg-black p-8 hover:bg-[#14213d] transition-colors cursor-pointer group">
            <span className="text-xs font-mono text-white/40 group-hover:text-white/80 mb-4 block">{card.num}</span>
            <h3 className="text-lg font-normal tracking-wide mb-2">{card.title}</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* AI Assistant Banner */}
      <section className="bg-[#14213d] border border-white/20 p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] tracking-widest uppercase font-mono text-white/60 border border-white/20 px-2 py-0.5">Automated System</span>
          <h2 className="text-2xl font-light tracking-wide my-3">Real-Time Diagnostics</h2>
          <p className="text-xs text-white/70 font-light max-w-md">Run interactive, step-by-step diagnostic sequences for your hardware.</p>
        </div>
        <button 
          onClick={() => setIsChatOpen(true)}
          className="bg-white text-black hover:bg-black hover:text-white border border-white px-6 py-3 text-xs tracking-wider uppercase font-medium cursor-pointer transition-all whitespace-nowrap"
        >
          Initialize Chat
        </button>
      </section>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[460px] bg-black border border-white/20 shadow-2xl flex flex-col z-50">
          <div className="bg-[#14213d] p-4 flex justify-between items-center border-b border-white/20">
            <h3 className="text-xs tracking-wider uppercase font-medium">System Intelligence</h3>
            <button onClick={() => setIsChatOpen(false)} className="border-none bg-transparent text-white text-lg cursor-pointer hover:text-white/60">&times;</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 font-mono text-xs">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`p-3 max-w-[85%] leading-relaxed ${
                  msg.isBot 
                    ? 'bg-[#14213d] text-white/90 border-l border-white/40 self-start' 
                    : 'bg-white text-black self-end font-sans text-xs font-medium'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 border-t border-white/20 flex gap-2 bg-black">
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter command or query..."
              className="flex-1 px-3 py-2 bg-transparent border border-white/20 text-white placeholder-white/30 text-xs outline-none focus:border-white transition-colors"
            />
            <button onClick={handleSend} className="bg-white text-black hover:bg-[#14213d] hover:text-white border border-white px-3 py-2 text-xs font-semibold cursor-pointer transition-colors">
              Send
            </button>
          </div>
        </div>
      )}
    </main>
  );
}