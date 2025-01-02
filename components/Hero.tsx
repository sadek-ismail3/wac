'use client'
import React, { useState } from 'react';
import heroimg from '@/assets/64459405-46203560.jpg'
import Image from 'next/image';
import { hero } from '@/data';

const Hero = () => {
  

  return (
    <section className="relative h-screen w-full bg-cover bg-center">
        <Image src={heroimg} alt="Football Legacy" className="absolute inset-0 object-cover w-full h-full" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-wacred"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                {hero.maintext}
            </h1>
            <p className="text-lg sm:text-xl mb-6">
                {hero.subtext}
            </p>
            <a href={hero.buttonLink} className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-lg font-semibold transition-all duration-300">
                {hero.button}
            </a>
        </div>
    </section>

  );
};

export default Hero;