import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Truck, ShieldCheck, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Ocean background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bio-dark/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Revitaliza tu cuerpo con <span className="text-bio-light">Bio-Om</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Agua de mar pura, microfiltrada y llena de vida. Descubre el poder de los minerales oceánicos para tu salud diaria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link 
              to="/shop" 
              className="bg-bio-light text-bio-dark px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition flex items-center justify-center gap-2"
            >
              Ver Productos <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/subscriptions" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Suscribirse
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-bio-dark">¿Por qué elegir Bio-Om?</h2>
            <p className="mt-4 text-gray-600">Comprometidos con la calidad y tu bienestar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Droplet, title: '100% Pura', desc: 'Microfiltrada en frío para conservar todos los nutrientes.' },
              { icon: Truck, title: 'Entrega a Domicilio', desc: 'Recibe tu pedido en la puerta de tu casa, fácil y rápido.' },
              { icon: ShieldCheck, title: 'Calidad Garantizada', desc: 'Cumplimos con los más altos estándares de higiene.' },
              { icon: Heart, title: 'Salud Integral', desc: 'Aporta los minerales que tu cuerpo necesita diariamente.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-bio-light/10 text-bio-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-20 bg-bio-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left">
            <span className="text-bio-light font-bold tracking-wider uppercase text-sm">Suscripciones</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Nunca te quedes sin tu dosis de mar</h2>
            <p className="text-gray-300 text-lg mb-8">
              Olvídate de hacer pedidos manuales. Suscríbete y recibe Bio-Om semanal, mensual o trimestralmente con descuentos exclusivos.
            </p>
            <Link 
              to="/subscriptions" 
              className="inline-block bg-bio-light text-bio-dark font-bold px-8 py-4 rounded-lg hover:bg-white transition"
            >
              Ver Planes de Suscripción
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-bio-light rounded-full flex items-center justify-center">
                        <Truck className="text-bio-dark h-6 w-6"/>
                    </div>
                    <div>
                        <h4 className="font-bold">Entrega Automática</h4>
                        <p className="text-xs text-gray-300">Programada a tu medida</p>
                    </div>
                </div>
                <div className="h-px bg-white/20 my-4"></div>
                <p className="text-sm italic">"Desde que me suscribí al plan mensual, mi energía ha mejorado y no tengo que preocuparme por reordenar."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};