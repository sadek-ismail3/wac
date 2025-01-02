'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carouselimage1 from '@/assets/c1.jpg';
import carouselimage2 from '@/assets/c2.jpg';
import carouselimage3 from '@/assets/c4.jpg';
import carouselimage4 from '@/assets/c3.jpg';
import carouselimage5 from '@/assets/c5.jpg';
import Image from "next/image";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace with your actual images
  const images = [
    { id: 1, src: carouselimage1, alt: 'Image 1' },
    { id: 2, src: carouselimage2, alt: 'Image 2' },
    { id: 3, src: carouselimage3, alt: 'Image 3' },
    { id: 4, src: carouselimage4, alt: 'Image 4' },
    { id: 5, src: carouselimage5, alt: 'Image 5' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  return (
    <section className='bg-wacwhite pb-12'>
      <h1 className="text-3xl md:text-4xl text-wacred font-bold text-center mb-8">Image Carousel</h1>
    <div className="relative w-full max-w-2xl mx-auto px-8 sm:px-0  ">
      <div className="relative h-[480px] md:h-[650px] overflow-hidden rounded-lg">
        {/* Images container */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div 
              key={image.id}
              className="w-full h-full flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover md:object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-wacred/80 hover:bg-wacred shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-wacred/80 hover:bg-wacred shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ImageCarousel;