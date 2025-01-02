import React from 'react';
import Image from 'next/image';

import benjeloun from '@/assets/benjelloun.webp'
import fristequipe from '@/assets/first-team.webp'
import trophy from '@/assets/trophy.webp'
import fokjoj from '@/assets/Akram-et-Naciri.webp'
import Navbar from '@/components/Navbar';

const Historique = () => {
  return (
    <>
      <Navbar />
    <section className='bg-wacwhite py-8'>
      <div className='container mx-auto px-4'>
        {/* Title */}
        <h1 className='text-4xl font-bold text-center text-wacred mb-8'>Histoire du Wydad</h1>

        {/* Initial History */}
        <div className='max-w-4xl mx-auto mb-8'>
          <p className='text-gray-800 mb-6'>
            Le Wydad Athletic Club, également connu sous les noms de Wydad ou WAC, est l'un des clubs les plus emblématiques du Maroc. Fondé en 1937 à Casablanca, le club est réputé pour sa passion, sa résistance et ses succès.
          </p>

          <p className='text-gray-800 mb-6'>
            Surnommé « Le Wydad », le club est connu pour ses couleurs : le rouge et le blanc. Les matchs à domicile se déroulent au Stade Mohamed V, également appelé le Stade d'Honneur ou Donor, une enceinte légendaire qui a été témoin de nombreux exploits du club.
          </p>

          {/* Image 1 - Founder */}
          <div className='mb-8'>
            <Image 
              src={benjeloun} // Make sure to add your image
              alt="Mohamed Benjelloun Touimi - Fondateur et premier président du Wydad"
              width={300}
              height={400}
              className='mx-auto rounded-lg'
            />
            <p className='text-center text-gray-600 mt-2'>Mohamed Benjelloun Touimi - Fondateur et premier président du Wydad</p>
          </div>

          <p className='text-gray-800 mb-6'>
            Le Wydad Athletic Club a été créé par un groupe d'intellectuels et de jeunes résistants pendant l'occupation française du Maroc en 1937, notamment feu Mohamed Benjelloun. Il a d'abord débuté avec une équipe de water-polo avant de former sa section de football en 1939, avec le soutien du Père Jégo.
          </p>

          {/* Image 2 - First Team */}
          <div className='mb-8'>
            <Image 
              src={fristequipe}// Make sure to add your image
              alt="Equipe du Wydad lors de sa première saison"
              width={500}
              height={400}
              className='mx-auto rounded-lg'
            />
            <p className='text-center text-gray-600 mt-2'>Equipe du Wydad lors de sa première saison</p>
          </div>

          {/* Additional History Sections */}
          <p className='text-gray-800 mb-6'>
            Le club a rapidement gravi les échelons en accédant à la première division du championnat marocain en 1942, et a remporté son premier grand trophée en 1948, qu'il a conservé pendant quatre ans. Durant cette période, le Wydad a également dominé le football maghrébin en remportant trois Championnats d'Afrique du Nord, deux Supercoupes d'Afrique du Nord et une Coupe d'Afrique du Nord.
          </p>

          {/* Image 3 - Trophy */}
          <div className='mb-8'>
            <Image 
              src={trophy} // Make sure to add your image
              alt="Larbi Aherdane en train de porter le trophée de la coupe Mohammed V en 1979"
              width={500}
              height={400}
              className='mx-auto rounded-lg'
            />
            <p className='text-center text-gray-600 mt-2'>Larbi Aherdane en train de porter le trophée de la coupe Mohammed V en 1979</p>
          </div>

          {/* Modern Era */}
          <p className='text-gray-800 mb-6'>
            En 2014, Said Naciri a été élu nouveau président, succédant à Abdelilah Akram. Sous sa présidence, le club a retrouvé la stabilité et est redevenu un grand club africain. Depuis 2015, le Wydad a remporté le championnat à cinq reprises et deux Ligues des Champions africaine.
          </p>

          {/* Image 4 - Current President */}
          <div className='mb-8'>
            <Image 
              src={fokjoj}// Make sure to add your image
              alt="A gauche Abdelilah Akram, ancien président du Wydad et à droite Said Naciri, président actuel"
              width={500}
              height={400}
              className='mx-auto rounded-lg'
            />
            <p className='text-center text-gray-600 mt-2'>A gauche Abdelilah Akram, ancien président du Wydad et à droite Said Naciri, président actuel</p>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Historique;