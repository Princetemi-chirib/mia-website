'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  content: string;
  image?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome",
    content: "Step into a world of refined companionship and unforgettable experiences. I'm Mia Malkova, and this space was created to give you a glimpse into the adventures, connection, and elevated moments that await. With a background rooted in international media and personal storytelling, I offer more than a service-I offer presence, discretion, and authenticity.\n\nWhether you're seeking a graceful companion for a private event, a cultured partner for travel, or simply someone who listens and understands, I tailor each experience with care, attention, and mutual respect. This is your invitation to explore, discover, and indulge in something truly personal.\n\nWelcome to the beginning of something exceptional.",
    image: "/1.jpeg"
  },
  {
    id: 2,
    title: "About Me",
    content: "The Woman Behind the Experience\n\nI'm Mia Malkova - a woman of elegance, confidence, and warmth. Born in Palm Springs, California, with French-Canadian, German, and Irish roots, I've spent over a decade embracing a journey that blends beauty, media, and meaningful connection.\n\nMy early years in hospitality taught me the value of genuine service and attention to detail, while my career in international media and film shaped me into the poised and versatile woman I am today. I've had the privilege of working globally, collaborating with renowned artists, and being featured in acclaimed productions. Through those experiences, I learned that the most powerful moments are often the most personal.",
    image: "/2.jpeg"
  },
  {
    id: 3,
    title: "Quick Snapshot",
    content: "• Name: Mia Malkova\n• Height: 6'2\" (183 cm)\n• Weight: 111 lbs (50 kg)\n• Eyes: Blue\n• Hair: Blonde\n• Background: Former model and Penthouse Pet, now independent companion\n• Location: Palm Springs, California\n• Languages: English (native)\n• Style: Elegant, attentive, adventurous"
  },
  {
    id: 4,
    title: "A Glimpse Into My World",
    content: "Values, Vibe & What I Cherish Most\n\nEvery great connection starts with alignment - of energy, intentions, and mutual respect. While beauty may catch the eye, it's authenticity, presence, and warmth that leave a lasting impression. Here's a more personal look at what I value, how I move through the world, and what makes our time together feel both effortless and unforgettable.",
    image: "/4.jpeg"
  },
  {
    id: 5,
    title: "My Services",
    content: "Curated Experiences, Tailored to You\n\nI offer a discreet, upscale companion experience designed for those who value genuine connection, elegance, and exclusivity. Every encounter is intentional - whether brief or extended, each moment we share is crafted to leave a lasting impression.\n\nThis is not simply about time together - it's about presence, chemistry, and the art of meaningful interaction. My services are designed to accommodate a variety of needs and preferences, always with the utmost discretion and care.",
    image: "/5.jpeg"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-advance slides every 25 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      } else {
        setCurrentSlide(0);
      }
    }, 25000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black text-center tracking-wider">
            MIA MALKOVA
          </h1>
          <p className="text-center text-black/70 mt-1 text-sm sm:text-base font-light tracking-wide">
            ELEGANT COMPANION & MEDIA PERSONALITY
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Slide Container */}
          <div className="relative bg-white rounded-none overflow-hidden">
            {/* Slide Content */}
            <div className={`transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {/* Image Section */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
                {slides[currentSlide].image ? (
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8">
                    <img
                      src={slides[currentSlide].image!}
                      alt={`${slides[currentSlide].title} - Mia Malkova`}
                      className="w-full h-full object-cover object-center rounded-[40px]"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[40px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl sm:text-3xl text-black font-light">{slides[currentSlide].id}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-light text-black">{slides[currentSlide].title}</h2>
                    </div>
                  </div>
                )}
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-black/30 rounded-[40px]"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-10 sm:bottom-12 lg:bottom-16 left-8 sm:left-12 lg:left-16 right-8 sm:right-12 lg:right-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight tracking-wide">
                    {slides[currentSlide].title}
                  </h2>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="bg-white text-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
                <div className="max-w-4xl mx-auto">
                  {slides[currentSlide].content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-black/80 leading-relaxed mb-6 text-base sm:text-lg lg:text-xl font-light tracking-wide">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 sm:p-4 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 backdrop-blur-sm border border-black/20 shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 sm:p-4 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 backdrop-blur-sm border border-black/20 shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-black scale-125'
                    : 'bg-black/30 hover:bg-black/50'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 sm:mt-8 text-black/60 text-sm sm:text-base font-light tracking-wide">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="text-center text-black/80">
            <p className="text-sm sm:text-base lg:text-lg font-light tracking-wide">EXCLUSIVE EXPERIENCES, WHEREVER YOU ARE</p>
            <p className="text-xs sm:text-sm mt-2 text-black/50 font-light tracking-wider">DISCRETION • ELEGANCE • AUTHENTICITY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
