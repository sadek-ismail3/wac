import React from 'react';
import { Book } from 'lucide-react'; // Import the book icon for history

const Historique = () => {
  return (
    <section className='bg-wacred py-8 relative overflow-hidden'>
      {/* Background Pattern - Subtle Diagonal Lines */}
      <div className='absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px]'></div>
      
      <div className='container mx-auto px-4 relative'>
        {/* Title with decorative elements */}
        <div className='flex items-center justify-center gap-3 mb-8'>
          <div className='h-1 w-12 bg-wac'></div>
          <h1 className='text-3xl md:text-4xl text-center font-bold text-wac'>
            Wydad Athletic Club
          </h1>
          <div className='h-1 w-12 bg-wac'></div>
        </div>

        {/* Content with styled border */}
        <div className='max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg border-l-4 border-wac shadow-xl'>
          <p className='text-wacwhite text-md leading-relaxed space-y-4'>
            <span className='block mb-4'>
              Le Wydad Athletic Club, également connu sous les noms de Wydad ou WAC, est l'un des clubs les plus emblématiques du Maroc. Fondé en 1937 à Casablanca, le club est réputé pour sa passion, sa résistance et ses succès.
            </span>
            
            <span className='block mb-4'>
              Surnommé « Le Wydad », le club est connu pour ses couleurs : le rouge et le blanc. Les matchs à domicile se déroulent au Stade Mohamed V, également appelé le Stade d'Honneur ou Donor, une enceinte légendaire qui a été témoin de nombreux exploits du club.
            </span>
            
            <span className='block'>
              Le Wydad Athletic Club a été créé par un groupe d'intellectuels et de jeunes résistants pendant l'occupation française du Maroc en 1937, notamment feu Mohamed Benjelloun. Il a d'abord débuté avec une équipe de water-polo avant de former sa section de football en 1939, avec le soutien du Père Jégo.
            </span>
          </p>

          {/* Styled Button */}
          <div className='mt-6 text-center'>
            <a href='/historique' className='group relative inline-flex items-center gap-2 bg-wac hover:bg-wac/90 text-white px-4 py-3 rounded-full transition-all duration-300 transform hover:scale-105'>
              Découvrir notre histoire
              <Book className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              <div className='absolute -inset-0.5 bg-white opacity-20 rounded-full blur group-hover:opacity-30 transition-opacity'></div>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-wac/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-40 h-40 bg-wac/10 rounded-full blur-3xl'></div>
      </div>
    </section>
  );
};

export default Historique;