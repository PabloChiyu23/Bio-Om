import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';
import { Plus, Check } from 'lucide-react';

interface ShopProps {
  addToCart: (item: CartItem) => void;
}

export const Shop: React.FC<ShopProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState<'all' | 'isotonic' | 'hypertonic' | 'cosmetic' | 'salts'>('all');
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const handleAdd = (product: Product) => {
    addToCart({ ...product, quantity: 1, subscriptionFrequency: null });
    
    // Simple animation feedback
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bio-dark mb-4">Nuestros Productos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desde agua isotónica lista para beber hasta sales para cocina y cosmética.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'isotonic', label: 'Isotónica' },
            { id: 'hypertonic', label: 'Hipertónica' },
            { id: 'cosmetic', label: 'Cosmética' },
            { id: 'salts', label: 'Sales' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === cat.id 
                  ? 'bg-bio-dark text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="h-64 overflow-hidden relative bg-gray-50">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bio-dark shadow-sm">
                  {product.size}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-bio-dark">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => handleAdd(product)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                        addedItems.includes(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-bio-light text-bio-dark hover:bg-bio-dark hover:text-white'
                    }`}
                  >
                    {addedItems.includes(product.id) ? (
                        <>
                            <Check className="h-5 w-5" /> Agregado
                        </>
                    ) : (
                        <>
                            <Plus className="h-5 w-5" /> Agregar
                        </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};