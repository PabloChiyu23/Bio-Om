import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Droplets } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  toggleCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-bio-light font-bold' : 'text-gray-100 hover:text-bio-light transition';

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-bio-dark sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white p-1 rounded-full">
              <Droplets className="h-8 w-8 text-bio-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-widest">BIO-OM</span>
              <span className="text-xs text-bio-light tracking-widest uppercase">Agua de Mar</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Inicio</Link>
            <Link to="/shop" className={isActive('/shop')}>Tienda</Link>
            <Link to="/subscriptions" className={isActive('/subscriptions')}>Suscripciones</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/catalog" className={isActive('/catalog')}>Catálogo</Link>
            
            <button 
              onClick={toggleCart}
              className="relative p-2 text-white hover:bg-bio-light/20 rounded-full transition"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-bio-dark transform translate-x-1/4 -translate-y-1/4 bg-bio-light rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={toggleCart}
              className="relative p-2 mr-4 text-white"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-bio-dark transform translate-x-1/4 -translate-y-1/4 bg-bio-light rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-bio-light focus:outline-none"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-bio-dark border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-bio-light/20"
            >
              Inicio
            </Link>
            <Link 
              to="/shop" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-bio-light/20"
            >
              Tienda
            </Link>
            <Link 
              to="/subscriptions" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-bio-light/20"
            >
              Suscripciones
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-bio-light/20"
            >
              Blog
            </Link>
            <Link 
              to="/catalog" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-bio-light/20"
            >
              Catálogo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};