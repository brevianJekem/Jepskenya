'use client';
import Image from 'next/image';
import { useCart } from '../store/useCart';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-md bg-black border-l border-white/20 h-full flex flex-col justify-between p-6 text-white shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">
            Shopping Bag ({cart.reduce((a, c) => a + c.quantity, 0)})
          </span>
          <button 
            onClick={closeCart}
            className="text-white/60 hover:text-white text-2xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-white/40 font-mono text-xs">
              Your shopping bag is currently empty.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 pb-6 border-b border-white/10 items-center">
                <div className="w-20 h-20 bg-[#14213d] border border-white/10 flex items-center justify-center p-2 flex-shrink-0">
                  <Image 
                    src={item.image || '/laptop.png'} 
                    alt={item.name} 
                    width={60} 
                    height={60} 
                    className="object-contain" 
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-normal tracking-wide">{item.name}</h4>
                  <p className="text-xs font-mono text-white/60 mt-1">{item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border border-white/20">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-white/60 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-mono">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-white/60 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] font-mono text-red-400 hover:underline uppercase"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Footer */}
        {cart.length > 0 && (
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="font-mono text-white/60">SUBTOTAL</span>
              <span className="font-mono font-medium">${getTotal().toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-white/40 font-mono">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="w-full bg-white text-black hover:bg-[#14213d] hover:text-white border border-white py-3 text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer">
              Proceed to Purchase
            </button>
          </div>
        )}
      </div>
    </div>
  );
}