import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-bio-dark mb-4">Blog Bio-Om</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprende sobre los beneficios del agua de mar, recetas, investigaciones y consejos para una vida más saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-bio-dark mb-3 leading-tight">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-6 flex-1">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <div className="bg-bio-light/20 p-1 rounded-full">
                        <User className="h-4 w-4 text-bio-dark" />
                    </div>
                    {post.author}
                  </span>
                  <button className="text-bio-light font-bold text-sm flex items-center hover:text-bio-dark transition">
                    Leer más <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO / Admin Note Mockup */}
        <div className="mt-20 bg-gray-50 p-8 rounded-xl text-center border border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-500">¿Eres administrador?</h3>
            <p className="text-sm text-gray-400 mb-4">Sube nuevos artículos para mejorar tu posicionamiento SEO.</p>
            <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-300 transition text-sm">
                + Crear Nuevo Artículo (Demo)
            </button>
        </div>

      </div>
    </div>
  );
};