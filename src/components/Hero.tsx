import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Heart, Smile, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onBuyTicketsClick: () => void;
}

export default function Hero({ onBuyTicketsClick }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Word reveal animation
    const words = titleRef.current?.querySelectorAll('.word-reveal');
    if (words && words.length > 0) {
      gsap.fromTo(
        words,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power4.out',
        }
      );
    }
  }, []);

  const titleText = "MÜF: EL PRIMER MUSEO INMERSIVO DE LA FELICIDAD EN MADRID";
  const titleWords = titleText.split(" ");

  return (
    <section
      ref={sectionRef}
      id="conoce-muf"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-32 pb-20 sm:pb-24 lg:pt-36 lg:pb-32"
    >
      {/* 1. Immersive Atmospheric Background with Video Loop & Animated Aura Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.22] scale-105 filter brightness-50 contrast-[1.15] saturate-[1.1] transition-opacity duration-1000"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-friends-laughing-and-having-fun-at-a-party-43354-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Ambient Dark-to-Vibrant Overlay to guarantee readable text and luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/85 to-brand-dark/95" />

        {/* Neon Glow Blob 1 */}
        <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-brand-magenta/15 blur-[130px] animate-pulse" style={{ animationDuration: '9s' }} />
        {/* Neon Glow Blob 2 */}
        <div className="absolute bottom-[15%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-blue/15 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
        {/* Neon Glow Blob 3 */}
        <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-brand-yellow/10 blur-[100px] animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      {/* Futuristic subtle network/dot grid layer */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1.5px,transparent_1.5px)] [background-size:32px_32px] z-0" />



      {/* Main Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Copywriting, CTAs & Science stats (Left-aligned as requested) */}
          <div className="lg:col-span-7 text-left text-white space-y-8 flex flex-col items-start">
            
            {/* Super premium interactive tag badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-magenta via-brand-yellow to-brand-blue p-[1.5px] rounded-full shadow-[0_10px_35px_rgba(227,0,123,0.3)] animate-pulse">
              <div className="bg-brand-dark px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-yellow fill-brand-yellow animate-spin" style={{ animationDuration: '6s' }} />
                <span>Siente la felicidad real en directo</span>
              </div>
            </div>
 
            {/* Main Typographical Masterpiece */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"
            >
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1.5">
                  <span className="inline-block word-reveal select-none">
                    {word === 'MÜF:' ? (
                      <span className="text-brand-yellow font-extrabold relative">
                        MÜF:
                        <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-brand-magenta rounded"></span>
                      </span>
                    ) : word === 'FELICIDAD' ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta via-brand-yellow to-brand-blue font-extrabold drop-shadow-[0_2px_15px_rgba(227,0,123,0.35)]">
                        FELICIDAD
                      </span>
                    ) : word === 'INMERSIVO' ? (
                      <span className="text-brand-blue font-extrabold">
                        INMERSIVO
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                </span>
              ))}
            </h1>
 
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 leading-relaxed max-w-2xl">
              Mucho más que un museo convencional: un recorrido lúdico y altamente sensorial diseñado con psicólogos y neurocientíficos. Toca, ríe, baila y descubre la ciencia del bienestar en Madrid.
            </p>
 
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onBuyTicketsClick}
                className="w-full sm:w-auto bg-brand-yellow text-brand-dark hover:bg-brand-magenta hover:text-white px-9 py-4 rounded-full font-black text-base tracking-widest uppercase shadow-[0_8px_30px_rgba(255,222,0,0.4)] hover:shadow-[0_12px_40px_rgba(227,0,123,0.5)] transform hover:scale-[1.04] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border-2 border-transparent hover:border-white/20"
              >
                Comprar Entradas
                <ArrowRight className="w-5 h-5" />
              </button>
 
              <a
                href="#experiencias"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experiencias')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-9 py-4 rounded-full font-bold text-base tracking-wider border border-white/10 hover:border-white/30 transform hover:scale-[1.04] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                Explorar Salas
              </a>
            </div>
 
            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5 w-full">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl text-xs font-semibold text-gray-300">
                <Heart className="w-4 h-4 text-brand-magenta fill-brand-magenta animate-pulse" />
                <span>Calificación <strong className="text-brand-yellow font-black">4.8★</strong> en Google</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl text-xs font-semibold text-gray-300">
                <Zap className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                <span>Más de 20 experiencias</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl text-xs font-semibold text-gray-300">
                <Smile className="w-4 h-4 text-brand-blue" />
                <span>Ronda de Valencia 8, Madrid</span>
              </div>
            </div>
 
          </div>

          {/* RIGHT: Empty column representing the clean plain dark-blue background ("el azul llano") */}
          <div className="lg:col-span-4 hidden lg:block" />
 
        </div>
      </div>

      {/* Wave bottom boundary divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-brand-bg block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
