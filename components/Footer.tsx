import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bio-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-white">BIO-OM</span>
              <span className="text-bio-light text-sm">AGUA DE MAR</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Llevando la pureza y los minerales del océano directamente a tu hogar. 
              Comprometidos con tu salud y bienestar a través de la talasoterapia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-bio-light mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@bio-om.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-semibold text-bio-light mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-bio-light transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-bio-light transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
               <a href="#" className="hover:text-white">Aviso de Privacidad</a>
               <a href="#" className="hover:text-white">Términos y Condiciones</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bio-Om. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};