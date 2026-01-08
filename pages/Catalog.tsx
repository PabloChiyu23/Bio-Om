import React from 'react';
import { Download, FileText } from 'lucide-react';

export const Catalog: React.FC = () => {
  return (
    <div className="bg-bio-dark min-h-screen py-20 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-bio-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10">
        
        {/* Left Side: Visual */}
        <div className="md:w-1/2 bg-gray-100 p-10 flex flex-col items-center justify-center border-r border-gray-200">
            <div className="w-48 h-64 bg-white shadow-xl border border-gray-200 flex flex-col items-center justify-center p-4 transform rotate-[-5deg] hover:rotate-0 transition duration-500">
                <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center flex-col text-gray-300">
                    <FileText className="h-12 w-12 mb-2"/>
                    <span className="text-xs uppercase font-bold tracking-widest">Catálogo 2024</span>
                </div>
            </div>
            <p className="mt-8 text-sm text-gray-500 text-center">
                Vista previa del documento PDF
            </p>
        </div>

        {/* Right Side: Action */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-bio-dark mb-4">Descarga nuestro Catálogo</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Obtén la información completa de todos nuestros productos Bio-Om, especificaciones técnicas, tablas nutricionales y precios actualizados en un solo archivo.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-bio-light rounded-full"></span>
                    Información detallada de isotonía
                </li>
                <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-bio-light rounded-full"></span>
                    Guía de uso y dosificación
                </li>
                <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-bio-light rounded-full"></span>
                    Lista de precios mayorista
                </li>
            </ul>

            <button 
                onClick={() => alert("Simulación: Descargando Catálogo PDF...")}
                className="group bg-bio-dark text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-bio-light hover:text-bio-dark transition shadow-lg hover:shadow-xl"
            >
                <Download className="h-5 w-5 group-hover:scale-110 transition" />
                Descargar PDF (2.4 MB)
            </button>
        </div>

      </div>
    </div>
  );
};