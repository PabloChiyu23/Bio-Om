import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Subscriptions } from './pages/Subscriptions';
import { Blog } from './pages/Blog';
import { Catalog } from './pages/Catalog';
import { CartItem } from './types';
import { X, Trash2, ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.subscriptionFrequency === item.subscriptionFrequency);
      if (existing) {
        return prev.map(i => 
          (i.id === item.id && i.subscriptionFrequency === item.subscriptionFrequency)
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, frequency?: string | null) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.subscriptionFrequency === frequency)));
  };

  const updateQuantity = (id: string, delta: number, frequency?: string | null) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.subscriptionFrequency === frequency) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navbar cart={cart} toggleCart={() => setIsCartOpen(true)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/subscriptions" element={<Subscriptions addToCart={addToCart} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>

        <Footer />

        {/* Cart Sidebar / Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 z-[60] overflow-hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
            <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
              <div className="h-full w-full bg-white shadow-2xl flex flex-col">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-bio-dark text-white">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" /> Tu Carrito
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="hover:text-bio-light transition">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                      <ShoppingBag className="h-16 w-16 opacity-20" />
                      <p>Tu carrito está vacío.</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="text-bio-dark font-semibold hover:underline"
                      >
                        Volver a la tienda
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map((item, idx) => (
                        <div key={`${item.id}-${item.subscriptionFrequency}-${idx}`} className="flex gap-4">
                          <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded-lg border border-gray-200" />
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                            {item.subscriptionFrequency && (
                              <span className="inline-block text-xs bg-bio-light/20 text-bio-dark px-2 py-0.5 rounded-full mb-1">
                                Suscripción: {
                                    item.subscriptionFrequency === 'weekly' ? 'Semanal' : 
                                    item.subscriptionFrequency === 'monthly' ? 'Mensual' : 'Trimestral'
                                }
                              </span>
                            )}
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1, item.subscriptionFrequency)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >-</button>
                                <span className="px-2 text-sm font-medium">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1, item.subscriptionFrequency)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >+</button>
                              </div>
                              <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id, item.subscriptionFrequency)}
                            className="text-gray-400 hover:text-red-500 self-start"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4 text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <button 
                      className="w-full bg-bio-dark text-white py-3 rounded-xl font-bold hover:bg-bio-light hover:text-bio-dark transition shadow-lg"
                      onClick={() => alert("Procediendo al pago...")}
                    >
                      Pagar Ahora
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </HashRouter>
  );
};

export default App;