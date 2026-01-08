import React from 'react';
import { SUBSCRIPTION_PLANS, PRODUCTS } from '../constants';
import { CartItem } from '../types';
import { CheckCircle2, Package } from 'lucide-react';

interface SubscriptionsProps {
  addToCart: (item: CartItem) => void;
}

export const Subscriptions: React.FC<SubscriptionsProps> = ({ addToCart }) => {
  // For simplicity in this demo, we assume subscription focuses on the "Galón" or "Pack of Liters"
  // Let's use the Galón as the primary subscription example
  const mainProduct = PRODUCTS.find(p => p.name.includes('Galón')) || PRODUCTS[0];

  const handleSubscribe = (planId: string) => {
    const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
    if (!plan) return;

    const discountedPrice = mainProduct.price * (1 - plan.discount);
    
    addToCart({
      ...mainProduct,
      price: discountedPrice,
      quantity: 1,
      subscriptionFrequency: plan.frequency
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bio-light font-bold tracking-wider uppercase text-sm">Bio-Om Club</span>
          <h1 className="text-4xl font-bold text-bio-dark mt-2 mb-6">Salud constante en tu puerta</h1>
          <p className="text-gray-600 text-lg">
            Elige la frecuencia que mejor se adapte a tu estilo de vida. Ahorra dinero y asegura tu suministro de agua de mar sin esfuerzos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div key={plan.id} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-bio-light hover:-translate-y-2 transition duration-300 relative">
              {plan.frequency === 'monthly' && (
                <div className="absolute top-0 right-0 bg-bio-dark text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Más Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-bio-dark">
                    {Math.round(plan.discount * 100)}%
                </span>
                <span className="text-gray-500 ml-2 font-medium">de descuento</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Entrega programada automática</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Cancela cuando quieras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Producto siempre fresco</span>
                </li>
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id)}
                className="w-full bg-bio-dark text-white py-3 rounded-lg font-bold hover:bg-bio-light hover:text-bio-dark transition"
              >
                Suscribirme {plan.label}
              </button>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-center text-bio-dark mb-12">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-bio-dark">1</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Elige tu Producto</h4>
                    <p className="text-gray-500 text-sm">Selecciona la presentación de agua de mar que más consumes.</p>
                </div>
                <div>
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-bio-dark">2</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Selecciona la Frecuencia</h4>
                    <p className="text-gray-500 text-sm">Semanal, mensual o trimestral. Tú tienes el control.</p>
                </div>
                <div>
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-bio-dark">3</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Recibe y Disfruta</h4>
                    <p className="text-gray-500 text-sm">Nosotros nos encargamos de llevarlo hasta tu puerta puntualmente.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};