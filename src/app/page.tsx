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
  },
  {
    id: 6,
    title: "Offerings Include",
    content: "• Private Engagements - Intimate one-on-one meetings, perfect for those seeking companionship in a relaxed, personal setting.\n\n• Social & Public Appearances - Make a statement with a poised and polished companion by your side for events, dinners, or evenings out.\n\n• Extended Experiences - Weekend getaways or overnight stays where deeper connection and shared adventure can unfold naturally.\n\n• Fly Me to You - Available to travel upon request, offering luxury companionship in the city of your choice.\n\nPlease Note:\nAll experiences are exclusively reserved for respectful, mature individuals. My time is best suited for those who appreciate discretion, clear communication, and emotional presence. Rates, availability, and further details are shared through private inquiry only."
  },
  {
    id: 7,
    title: "A Visual Reflection of Mia Malkova",
    content: "Every image tells a story - not just of beauty, but of mood, moment, and meaning. This curated gallery offers a glimpse into my world: refined, magnetic, and deeply present. Each photo is more than a frame - it's a feeling, a whisper of an experience waiting to unfold."
  },
  {
    id: 8,
    title: "01 Elegant Portrait",
    content: "Elegance is when the presence lingers longer than the glance.\"\nA nod to timeless beauty - graceful, poised, and quietly powerful."
  },
  {
    id: 9,
    title: "02 Real Reflection",
    content: "Mirror moments, deeper meaning.\nStyle is surface. Presence is spirit.\nWhat you carry is louder than what you wear."
  },
  {
    id: 10,
    title: "03 Freedom Mood",
    content: "Unscheduled, unbothered, unstoppable.\nThis is what it feels like to let go.\nTime bends where the soul feels free."
  },
  {
    id: 11,
    title: "04 Selfie State of Mind",
    content: "It's not just a face — it's a feeling.\nA pause to check in, not just check out.\nConfidence doesn't ask for attention. It owns the frame."
  },
  {
    id: 12,
    title: "05 Soft Escape",
    content: "Moments away from the noise.\nA breath of stillness, wrapped in sun.\nThis is the luxury of quiet spaces."
  },
  {
    id: 13,
    title: "06 Lingerie or Bedroom Setting",
    content: "Intimacy isn't always physical - it begins with being seen.\nAn invitation to vulnerability, to presence, to something deeper."
  },
  {
    id: 14,
    title: "07 Black & White / Artistic Mood",
    content: "There's beauty in the shadows - and strength in stillness.\nA stripped-back glimpse of essence - raw, honest, and unfiltered."
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
      }, 400);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  // Auto-advance slides every 35 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      } else {
        setCurrentSlide(0);
      }
    }, 35000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/70 backdrop-blur-md border-b border-rose-200/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 text-center tracking-wider elegant-text">
            Mia Malkova
          </h1>
          <p className="text-center text-gray-600 mt-2 text-sm sm:text-base font-light tracking-wide">
            Elegant Companion & Media Personality
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-8 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Slide Container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-rose-200/30">
            {/* Slide Content */}
            <div className={`transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Image Section */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
                {slides[currentSlide].image ? (
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8">
                    <img
                      src={slides[currentSlide].image!}
                      alt={`${slides[currentSlide].title} - Mia Malkova`}
                      className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="text-2xl sm:text-3xl text-white font-light">{slides[currentSlide].id}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-light text-gray-700 elegant-text">{slides[currentSlide].title}</h2>
                    </div>
                  </div>
                )}
                
                {/* Soft gradient overlay */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-8 sm:left-10 lg:left-12 right-8 sm:right-10 lg:right-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight tracking-wide elegant-text drop-shadow-lg">
                    {slides[currentSlide].title}
                  </h2>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
                <div className="max-w-4xl mx-auto">
                  {slides[currentSlide].content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base lg:text-lg font-light tracking-wide">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-2 sm:left-3 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 p-3 sm:p-4 lg:p-5 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 shadow-lg hover:shadow-xl hover:scale-110 border border-rose-200/30"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="absolute right-2 sm:right-3 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 p-3 sm:p-4 lg:p-5 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 shadow-lg hover:shadow-xl hover:scale-110 border border-rose-200/30"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Soft Slide Indicators */}
          <div className="flex justify-center mt-8 sm:mt-10 space-x-3 sm:space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 scale-125 shadow-md'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 sm:mt-8 text-gray-500 text-sm sm:text-base font-light tracking-wide">
            {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/70 backdrop-blur-md border-t border-rose-200/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center text-gray-600">
            <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide elegant-text">Exclusive Experiences, Wherever You Are</p>
            <p className="text-xs sm:text-sm mt-2 text-gray-500 font-light tracking-wider">Discretion • Elegance • Authenticity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
