import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Heart, Zap, Smile, Compass, Trophy } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  hormone: string;
  hormoneColor: string;
}

interface ExperiencesProps {
  onBuyTicketsClick?: () => void;
}

export default function Experiences({ onBuyTicketsClick }: ExperiencesProps) {
  const experiencesList: Experience[] = [
    {
      id: 'armario',
      title: 'El Armario de la Verdad',
      category: 'AUTO-CONOCIMIENTO',
      description: 'Cruza las puertas secretas de tus emociones. Una experiencia íntima donde confrontas tus verdaderos sentimientos y descubres la llave de la aceptación personal y el autoconocimiento.',
      image: '/src/assets/images/armario_verdad_hero_1784049294425.jpg',
      hormone: 'Serotonina',
      hormoneColor: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20'
    },
    {
      id: 'atreves',
      title: '¡Te Atreves!',
      category: 'SUPERACIÓN Y RETO',
      description: 'Desafía tus propios límites en nuestra vibrante sala de obstáculos lúdicos. Una experiencia interactiva diseñada para aprender a reírse de los miedos y superarlos mediante el juego.',
      image: '/src/assets/images/te_atreves_museum_1784049887063.jpg',
      hormone: 'Adrenalina',
      hormoneColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20'
    },
    {
      id: 'disco',
      title: 'Disco Feliz',
      category: 'MOVIMIENTO Y JUEGO',
      description: 'Libera tensiones al ritmo de la música en nuestra pista de baile retro. Tus canciones favoritas, luces de neón vibrantes y una explosión de energía contagiosa para recargar pilas.',
      image: '/src/assets/images/disco_feliz_1784049365008.jpg',
      hormone: 'Dopamina',
      hormoneColor: 'text-brand-yellow bg-brand-yellow/10 border-brand-yellow/20'
    },
    {
      id: 'cosas',
      title: 'Cosas que me hacen feliz',
      category: 'ESPEJO DE GRATITUD',
      description: 'Interactúa con un espejo mágico gigante donde se proyectan de forma interactiva y animada las pequeñas cosas de la vida cotidiana que despiertan tu profunda gratitud.',
      image: '/src/assets/images/cosas_feliz_mirror_1784049904041.jpg',
      hormone: 'Serotonina',
      hormoneColor: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20'
    },
    {
      id: 'felicitador',
      title: 'El Felicitador',
      category: 'TECNOLOGÍA EMOCIONAL',
      description: 'Nuestra cabina patentada de reconocimiento facial analiza tu sonrisa mediante inteligencia artificial. Pon a prueba tu risa y llévate tu Certificado Oficial de Felicidad personalizado.',
      image: '/src/assets/images/felicitador_1784049381520.jpg',
      hormone: 'Oxitocina',
      hormoneColor: 'text-brand-magenta bg-brand-magenta/10 border-brand-magenta/20'
    },
    {
      id: 'vr',
      title: 'Realidad Virtual Feliz',
      category: 'INMERSIÓN DIGITAL',
      description: 'Ponte las gafas VR de última generación y vuela libremente sobre mundos fantásticos compuestos de nubes de algodón, burbujas de jabón gigantes, ballenas voladoras y música envolvente.',
      image: '/src/assets/images/realidad_virtual_1784049400455.jpg',
      hormone: 'Endorfinas',
      hormoneColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'risodromo',
      title: 'El Risódromo',
      category: 'TERAPIA DE RISA',
      description: 'La risa es el camino más corto hacia la felicidad. Entra en nuestra cúpula de risa contagiosa, equipada con tecnología de resonancia acústica donde es imposible no reír a carcajadas.',
      image: '/src/assets/images/risodromo_1784049418082.jpg',
      hormone: 'Endorfinas',
      hormoneColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start on Disco Feliz
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + experiencesList.length) % experiencesList.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiencesList.length);
  };

  const handleBuyTickets = () => {
    if (onBuyTicketsClick) {
      onBuyTicketsClick();
    } else {
      document.getElementById('tarifas')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="experiencias">
      {/* 1. Header Banner matching reference design */}
      <section className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden flex items-center justify-center select-none bg-gradient-to-r from-teal-500/10 via-brand-yellow/10 to-brand-blue/10">
        {/* Dynamic decorative balls in background representing the header of screenshot page 1 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#ffde00_0%,transparent_50%)] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#009ee3_0%,transparent_50%)] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#7bc143_0%,transparent_60%)] opacity-20 pointer-events-none" />
        
        {/* Colorful Triangle Accent Background */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-brand-magenta" />
          <div className="flex-1 bg-brand-yellow" />
          <div className="flex-1 bg-brand-blue" />
          <div className="flex-1 bg-emerald-500" />
        </div>

        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark tracking-wider uppercase mb-3">
            EXPERIENCIAS
          </h1>
          {/* Accent decoration */}
          <div className="flex justify-center gap-1.5 mb-2">
            <span className="w-6 h-1.5 bg-brand-magenta rounded-full transform -skew-x-12" />
            <span className="w-12 h-1.5 bg-brand-yellow rounded-full transform -skew-x-12" />
            <span className="w-8 h-1.5 bg-brand-blue rounded-full transform -skew-x-12" />
          </div>
        </div>
      </section>

      {/* 2. Main Intro Section ("EXPERIENCIAS MUF") */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Conversational intro & counter stats */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
                  EXPERIENCIAS MÜF
                </h2>
                {/* Colorful dynamic border */}
                <div className="flex gap-1">
                  <span className="w-8 h-1 bg-brand-magenta" />
                  <span className="w-16 h-1 bg-brand-yellow" />
                  <span className="w-10 h-1 bg-brand-blue" />
                </div>
              </div>

              {/* Questions styled as engaging callouts */}
              <div className="space-y-4 border-l-4 border-brand-magenta pl-5">
                <p className="text-base sm:text-lg font-extrabold text-brand-dark hover:text-brand-magenta transition-colors duration-200">
                  ¿Te imaginas un museo que solo abre sus puertas a quienes sonríen?
                </p>
                <p className="text-base sm:text-lg font-extrabold text-brand-dark hover:text-brand-blue transition-colors duration-200">
                  ¿Y entrar a una discoteca de canciones felices?
                </p>
                <p className="text-base sm:text-lg font-extrabold text-brand-dark hover:text-emerald-600 transition-colors duration-200">
                  ¿O tirarte por un tobogán de máxima pendiente?
                </p>
              </div>

              <p className="text-xs sm:text-sm text-brand-gray font-semibold leading-relaxed max-w-xl">
                En MÜF, el primer Museo de la Felicidad de Madrid, hemos creado un espacio lúdico y altamente sensorial respaldado por psicólogos y neurocientíficos. Aquí podrás tocar, jugar, bailar y reír, activando tus hormonas de la felicidad de forma presencial e inmersiva.
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4 max-w-md bg-brand-bg p-5 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <div className="text-center py-2 border-r border-gray-200">
                  <span className="block text-4xl sm:text-5xl font-black text-brand-blue">20</span>
                  <span className="text-[10px] sm:text-xs font-black text-brand-gray tracking-wider uppercase">EXPERIENCIAS</span>
                </div>
                <div className="text-center py-2">
                  <span className="block text-4xl sm:text-5xl font-black text-brand-magenta">4+</span>
                  <span className="text-[10px] sm:text-xs font-black text-brand-gray tracking-wider uppercase">EDAD RECOMENDADA</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={handleBuyTickets}
                  className="bg-brand-dark hover:bg-brand-magenta text-white hover:text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase shadow-[0_10px_30px_rgba(17,24,39,0.15)] hover:shadow-[0_10px_30px_rgba(227,0,123,0.3)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2.5"
                >
                  <span>COMPRAR ENTRADAS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Premium framed image with neon ambient glow */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-sm">
                {/* Visual vibrant background blobs */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-magenta via-brand-yellow to-brand-blue rounded-[50px] opacity-20 blur-xl animate-pulse -z-10" />
                
                {/* Main image framed like the screenshot with elegant styling */}
                <div className="relative overflow-hidden rounded-[30px] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5] bg-brand-dark">
                  <img
                    src="/src/assets/images/disco_feliz_1784049365008.jpg"
                    alt="Experiencia interactiva con auriculares y luces"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating vector illustration placeholder elements inside as a neat sticker badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/95 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-magenta flex items-center justify-center text-white font-black text-sm">
                      MÜF
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-brand-yellow block tracking-widest uppercase">CONECTA TUS EMOCIONES</span>
                      <p className="text-[9px] text-gray-300 font-bold leading-none">Vibraciones, luces y ritmos estimulantes.</p>
                    </div>
                  </div>
                </div>

                {/* Micro illustration indicator icon under it */}
                <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 shadow-lg rounded-full p-3 flex items-center justify-center">
                  <Smile className="w-7 h-7 text-brand-magenta" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Actividades / Talleres (Warm brand-magenta background with two stylized cards) */}
      <section className="py-20 bg-brand-magenta relative overflow-hidden text-white">
        {/* Soft circle highlights */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase mb-12 drop-shadow-sm">
            ACTIVIDADES EN EL MUSEO DE LA FELICIDAD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Taller */}
            <div className="bg-white rounded-[32px] p-8 text-brand-dark border-4 border-white shadow-[0_15px_45px_rgba(0,0,0,0.15)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4 text-left">
                <span className="text-brand-magenta font-black text-xs tracking-widest uppercase bg-brand-magenta/10 px-3.5 py-1 rounded-full inline-block">
                  TALLER ESPECIAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-brand-dark leading-tight uppercase">
                  La Felicidad a Nuestro Alcance
                </h3>
                {/* Schedule badge */}
                <div className="inline-block bg-brand-magenta text-white font-extrabold text-xs px-4 py-1.5 rounded-full">
                  LUNES Y VIERNES 18:30
                </div>
                <p className="text-xs sm:text-sm text-brand-gray font-semibold leading-relaxed pt-2">
                  Impartido por <strong>Pablo Claver</strong>, reconocido Psicólogo y Director del Museo. Más de 20.000 personas han asistido a sus talleres interactivos de felicidad en los últimos años para descubrir herramientas reales de bienestar.
                </p>
              </div>
              <div className="pt-6 text-left border-t border-gray-100 mt-6">
                <span className="text-[10px] text-brand-blue font-black tracking-widest uppercase flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> INCLUIDO EN TU ENTRADA DEL DÍA
                </span>
              </div>
            </div>

            {/* Card 2: Microtalleres */}
            <div className="bg-white rounded-[32px] p-8 text-brand-dark border-4 border-white shadow-[0_15px_45px_rgba(0,0,0,0.15)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4 text-left">
                <span className="text-brand-blue font-black text-xs tracking-widest uppercase bg-brand-blue/10 px-3.5 py-1 rounded-full inline-block">
                  MICROTALLERES DIARIOS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-brand-dark leading-tight uppercase">
                  Experiencias Exprés de Bienestar
                </h3>
                {/* List of micro-workshops in colorful responsive chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['ABRAZOTERAPIA', 'YOGA DE LA RISA', 'AROMATERAPIA', 'EL SABOR DE LA FELICIDAD'].map((item) => (
                    <span key={item} className="bg-brand-bg border border-gray-100 text-brand-magenta font-black text-[10px] tracking-wider px-3 py-1 rounded-xl">
                      🌸 {item}
                    </span>
                  ))}
                </div>
                {/* Schedule badge */}
                <div className="inline-block bg-brand-blue text-white font-extrabold text-xs px-4 py-1.5 rounded-full mt-2">
                  DE LUNES A DOMINGO — 12:00 Y 18:00 H
                </div>
                <p className="text-xs sm:text-sm text-brand-gray font-semibold leading-relaxed">
                  Pequeñas píldoras de aprendizaje lúdico guiadas por nuestro equipo de felicidad. Descubre cómo la risa corporal, el olfato y los abrazos activan de inmediato tus niveles de endorfina y oxitocina.
                </p>
              </div>
              <div className="pt-6 text-left border-t border-gray-100 mt-6">
                <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase flex items-center gap-1.5">
                  <Trophy className="w-4 h-4" /> APTO PARA TODAS LAS EDADES
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Carousel with the 7 key experiences - A majestic visual stage with premium dark background */}
      <section className="py-24 bg-brand-dark relative overflow-hidden select-none text-white">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-script text-4xl sm:text-5xl text-brand-yellow select-none block mb-1">
              Las Salas Interactivas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none uppercase">
              RECORRE LAS EXPERIENCIAS MÜF
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-semibold max-w-xl mx-auto mt-3">
              Haz clic o desliza en las tarjetas para explorar en profundidad algunas de nuestras mejores salas lúdicas y sensoriales.
            </p>
          </div>

          {/* Carousel Stage Wrapper */}
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center mt-6">
            <div className="relative w-full h-[460px] sm:h-[500px] md:h-[540px] flex items-center justify-center overflow-visible">
              
              {experiencesList.map((exp, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + experiencesList.length) % experiencesList.length;
                const isNext = index === (activeIndex + 1) % experiencesList.length;

                // Simple visible checks
                const isVisible = isActive || isPrev || isNext;

                if (!isVisible) return null;

                // Relative position classes for modern stack alignment
                let positionClasses = 'scale-90 opacity-40 z-20 pointer-events-none';
                if (isActive) {
                  positionClasses = 'scale-100 opacity-100 z-30 shadow-[0_20px_50px_rgba(227,0,123,0.3)] border-brand-magenta';
                } else if (isPrev) {
                  positionClasses = 'scale-90 opacity-40 z-20 -translate-x-[50%] sm:-translate-x-[75%] md:-translate-x-[100%] cursor-pointer';
                } else if (isNext) {
                  positionClasses = 'scale-90 opacity-40 z-20 translate-x-[50%] sm:translate-x-[75%] md:translate-x-[100%] cursor-pointer';
                }

                return (
                  <div
                    key={exp.id}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(index);
                      }
                    }}
                    className={`absolute w-[240px] sm:w-[320px] md:w-[350px] h-[380px] sm:h-[440px] md:h-[480px] rounded-[32px] overflow-hidden bg-brand-dark/80 border-2 border-white/10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${positionClasses}`}
                  >
                    {/* Glowing thin border for centered card */}
                    {isActive && (
                      <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-tr from-brand-magenta via-brand-yellow to-brand-blue opacity-50 -z-10 animate-pulse" />
                    )}

                    {/* Card Image */}
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000"
                    />

                    {/* Dynamic Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                    {/* Card Content Layer */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-left select-none">
                      
                      {/* Floating top pills only visible on center active card */}
                      <div className={`absolute top-5 left-5 right-5 flex justify-between items-center transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}>
                        <span className="bg-brand-yellow text-brand-dark text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-brand-magenta animate-spin-slow" />
                          DESTACADA MÜF
                        </span>
                        <span className={`text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase border ${exp.hormoneColor}`}>
                          🧬 {exp.hormone}
                        </span>
                      </div>

                      {/* Category Label */}
                      <span className="text-[10px] font-black tracking-widest text-brand-yellow uppercase mb-1">
                        {exp.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-black text-white leading-tight mb-2 text-lg sm:text-xl md:text-2xl">
                        {exp.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed transition-all duration-500 overflow-hidden ${
                        isActive ? 'opacity-100 max-h-[120px] mb-4' : 'opacity-0 max-h-0'
                      }`}>
                        {exp.description}
                      </p>

                      {/* CTA Pill Button */}
                      <div className={`transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                      }`}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBuyTickets();
                          }}
                          className="bg-transparent hover:bg-white text-white hover:text-brand-dark px-5 py-2.5 rounded-full font-black text-[10px] tracking-widest uppercase border border-white hover:border-transparent transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
                        >
                          <span>Comprar entradas</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left/Right Absolute Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 md:-left-12 top-[40%] -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-100 hover:border-brand-magenta/30 shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-magenta transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer z-40"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 md:-right-12 top-[40%] -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-100 hover:border-brand-magenta/30 shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-magenta transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer z-40"
              aria-label="Siguiente"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Bullet indicators */}
            <div className="flex gap-2.5 mt-8 relative z-30">
              {experiencesList.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive ? 'w-8 bg-brand-magenta' : 'w-2 bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                );
              })}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
