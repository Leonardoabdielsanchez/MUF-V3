import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Experiences from './components/Experiences';
import Audience from './components/Audience';
import Tickets from './components/Tickets';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BuyTicketModal from './components/BuyTicketModal';

import { Sparkles, Star, Mail, Smile, ArrowUp, Send, Heart, Quote, Ticket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  time: string;
  rating: number;
  text: string;
  initial: string;
  color: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'experiencias'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Newsletter state
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP ScrollTrigger for global scroll-reveal elements
  useEffect(() => {
    const revealElements = document.querySelectorAll('.gsap-reveal');
    
    const triggers = Array.from(revealElements).map((el) => {
      return gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      triggers.forEach((trigger) => {
        trigger.scrollTrigger?.kill();
        trigger.kill();
      });
    };
  }, []);

  const openBuyTickets = (ticketType?: string) => {
    setSelectedTicketId(ticketType);
    setIsModalOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 5000);
  };

  // Testimonials list from Google Reviews
  const testimonials: Testimonial[] = [
    {
      name: 'Wassim Gil',
      time: 'hace 1 semana',
      rating: 5,
      text: 'Muy amables Carlota y Samu, por no decir de Pablo un gran profesional, la experiencia de 10, muy divertido e inmersivo.',
      initial: 'W',
      color: 'bg-orange-500',
    },
    {
      name: 'Jennifer de la Tor...',
      time: 'hace 1 semana',
      rating: 5,
      text: '¡Pasamos un día genial! Samuel y Carlota son encantadores. Además pudimos asistir a una charla súper útil de psicología positiva.',
      initial: 'J',
      color: 'bg-indigo-500',
    },
    {
      name: 'Lara Merino',
      time: 'hace 1 semana',
      rating: 5,
      text: 'Ya había venido antes y sigue siendo maravilloso. Una experiencia muy divertida, lúdica y llena de risas. Volveremos seguro.',
      initial: 'L',
      color: 'bg-emerald-500',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark overflow-x-hidden font-sans">
      
      {/* 1. Glassmorphism Sticky Header */}
      <Header onBuyTicketsClick={() => openBuyTickets()} currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' ? (
        <>
          {/* 2. Interactive Parallax Hero */}
          <Hero onBuyTicketsClick={() => openBuyTickets()} />

      {/* 3. Social Proof Trust Bar */}
      <TrustBar />

      {/* Introductory / Welcome Section */}
      <section className="py-20 bg-brand-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Story */}
            <div className="lg:col-span-7 space-y-6 gsap-reveal">
              <span className="text-brand-magenta font-black text-xs sm:text-sm tracking-widest uppercase bg-brand-magenta/10 px-4 py-1.5 rounded-full inline-block">
                BIENVENIDOS AL MÜF
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-tight">
                El primer museo dedicado a las <span className="text-brand-magenta">grandes cosas</span> que nos hacen felices
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-brand-gray font-medium leading-relaxed">
                <p>
                  Más de <strong className="text-brand-dark">600 m²</strong> dedicados a vivir la felicidad de verdad. Aquí no vienes a mirar cuadros estáticos desde lejos, vienes a participar activamente de forma sensorial.
                </p>
                <p>
                  A través de un recorrido lúdico y interactivo diseñado por expertos en psicología positiva y neurociencia, podrás experimentar con estimulantes visuales, táctiles y sonoros que despiertan la curiosidad de grandes y pequeños.
                </p>
                <p className="border-l-4 border-brand-magenta pl-4 font-semibold text-brand-dark italic bg-brand-magenta/5 py-2.5 rounded-r-xl">
                  Más de 20 experiencias científicas diseñadas para disfrutar solo, en pareja, con amigos o con toda tu familia. ¡Un plan verdaderamente original en Madrid!
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBuyTickets()}
                  className="bg-brand-yellow text-brand-dark hover:bg-brand-dark hover:text-white px-8 py-4 rounded-full font-extrabold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(255,222,0,0.4)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  ¡Comprar Entradas Ahora!
                </button>
              </div>
            </div>

            {/* Right Column: Visual illustration */}
            <div className="lg:col-span-5 flex justify-center gsap-reveal">
              <div className="relative">
                {/* Visual backdrop shape */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-magenta to-brand-yellow rounded-[40px] opacity-15 blur-lg animate-pulse" />
                
                {/* Decorative floating dots */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[radial-gradient(#e3007b_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[radial-gradient(#009ee3_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                {/* Main Illustration Image - Generated with love */}
                <div className="relative bg-white p-4 rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 max-w-sm">
                  <img
                    src="/src/assets/images/realidad_virtual_1784049400455.jpg"
                    alt="Niña riendo y experimentando en el museo"
                    referrerPolicy="no-referrer"
                    className="rounded-[28px] w-full object-cover aspect-[4/5] shadow-inner"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-brand-dark/90 backdrop-blur-md p-4 rounded-2xl text-white text-center border border-white/10">
                    <span className="text-xs font-black text-brand-yellow block mb-1">DOPAMINA AL 100%</span>
                    <p className="text-[10px] text-gray-300 font-bold">Instalación interactiva de globos y nubes.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Audience Section */}
      <Audience onBuyTicketsClick={() => openBuyTickets()} />

      {/* 6. Pricing Tickets Cards */}
      <Tickets onBuyTicketsClick={(ticketType) => openBuyTickets(ticketType)} />

      {/* Google Reviews/Testimonials Section */}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
            <span className="text-brand-magenta font-black text-xs sm:text-sm tracking-widest uppercase bg-brand-magenta/10 px-4 py-1.5 rounded-full inline-block mb-3">
              OPINIONES DE VISITANTES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
              ¿Qué dicen las personas <span className="text-brand-magenta">después de visitarnos</span>?
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray font-medium mt-2">
              Calificación general de <strong>4.8 de 5 estrellas</strong> basada en más de 4,500 valoraciones reales en Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(227,0,123,0.06)] transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between gsap-reveal"
              >
                <div>
                  {/* Google Logo and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm ${t.color}`}>
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-brand-dark leading-none">{t.name}</h4>
                        <span className="text-[10px] text-brand-gray font-bold">{t.time}</span>
                      </div>
                    </div>
                    {/* Google G icon logo */}
                    <div className="w-6 h-6 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-xs font-black text-blue-600">
                      G
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-brand-yellow" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-brand-gray font-semibold leading-relaxed italic relative pl-4 border-l-2 border-brand-yellow">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-1.5 text-[10px] text-brand-blue font-black uppercase tracking-wider">
                  <Smile className="w-3.5 h-3.5" />
                  <span>VISITANTE VERIFICADO</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick write-review nudging */}
          <div className="text-center gsap-reveal">
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-6 py-3 rounded-full text-xs font-bold text-brand-dark transition-all"
            >
              <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              Ver las 4,586 reseñas en Google Maps
            </a>
          </div>

        </div>
      </section>

      {/* 7. FAQs */}
      <FAQ />

      {/* Newsletter signup section (Page 4) */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        {/* Dynamic bright shapes */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-80 h-80 rounded-full bg-brand-magenta/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-80 h-80 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="max-w-2xl mx-auto gsap-reveal">
            
            <span className="text-brand-yellow font-black text-xs tracking-widest uppercase mb-3 block">
              BOLETÍN DE FELICIDAD
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3 text-white tracking-tight leading-tight">
              Recibe nuestras promociones y descuentos
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-medium mb-8 leading-relaxed">
              Únete a nuestra comunidad de optimismo. Suscríbete para recibir códigos de descuento exclusivos, pases de preventa anticipados y artículos sobre el bienestar emocional.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-brand-magenta/10 border border-brand-magenta/30 rounded-2xl p-6 text-center max-w-md mx-auto animate-bounce">
                <Smile className="w-10 h-10 text-brand-yellow mx-auto mb-2" />
                <h4 className="font-extrabold text-sm text-white mb-1">¡Suscripción de Felicidad Realizada!</h4>
                <p className="text-xs text-gray-300">Te acabamos de enviar tu código de 10% de descuento de bienvenida a tu bandeja de entrada.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Introduce tu correo electrónico..."
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl px-5 py-4 text-xs font-semibold text-white focus:outline-none focus:border-brand-magenta focus:bg-white/10 transition-all placeholder-gray-500"
                  />
                  <Mail className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  type="submit"
                  className="bg-brand-magenta hover:bg-brand-magenta/90 text-white px-6 py-4 rounded-2xl font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  DARME DE ALTA
                </button>
              </form>
            )}

            <span className="text-[10px] text-gray-600 block mt-4 font-semibold">
              🔒 Respetamos tu privacidad. Date de baja cuando quieras con un solo clic.
            </span>

          </div>
        </div>
      </section>
        </>
      ) : (
        <Experiences onBuyTicketsClick={() => openBuyTickets()} />
      )}

      {/* 8. Footer Section */}
      <Footer />

      {/* Buy Ticket Modal */}
      <BuyTicketModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTicketId(undefined);
        }}
        selectedTicketId={selectedTicketId}
      />

      {/* Scroll to Top and Floating Sticky CTA when scrolling down */}
      <div
        className={`fixed bottom-6 right-6 z-45 flex flex-col items-center gap-3 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Floating Quick Buy Ticket Trigger */}
        <button
          onClick={() => openBuyTickets()}
          className="bg-brand-magenta text-white px-5 py-3 rounded-full font-extrabold text-xs tracking-widest uppercase shadow-[0_10px_25px_rgba(227,0,123,0.4)] hover:shadow-[0_12px_30px_rgba(227,0,123,0.6)] transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-brand-magenta/10"
        >
          <Ticket className="w-4 h-4 animate-pulse" />
          Comprar Entradas
        </button>

        {/* Scroll up arrow button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-brand-dark hover:bg-brand-blue hover:text-white flex items-center justify-center shadow-lg border border-gray-100 transition-all cursor-pointer transform active:scale-90"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
