import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onBuyTicketsClick: () => void;
  currentPage: 'home' | 'experiencias';
  onNavigate: (page: 'home' | 'experiencias') => void;
}

const TrianglePattern = () => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-90" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 15,0 7,100" fill="#e3007b" />
    <polygon points="7,100 15,0 25,100" fill="#ffde00" />
    <polygon points="15,0 35,0 25,100" fill="#009ee3" />
    <polygon points="25,100 35,0 45,100" fill="#7bc143" />
    <polygon points="35,0 55,0 45,100" fill="#e3007b" />
    <polygon points="45,100 55,0 65,100" fill="#ffde00" />
    <polygon points="55,0 75,0 65,100" fill="#009ee3" />
    <polygon points="65,100 75,0 85,100" fill="#7bc143" />
    <polygon points="75,0 95,0 85,100" fill="#e3007b" />
    <polygon points="85,100 95,0 100,100" fill="#ffde00" />
    <polygon points="95,0 100,0 100,100" fill="#009ee3" />
  </svg>
);

interface SubItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  subItems?: SubItem[];
}

export default function Header({ onBuyTicketsClick, currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: 'CONOCE MUF',
      subItems: [
        { label: '¿Qué es MÜF?', href: '#conoce-muf' },
        { label: 'Experiencias', href: 'experiencias' },
        { label: 'Tarifas y Horarios', href: '#tarifas' }
      ]
    },
    {
      label: 'GRUPOS',
      subItems: [
        { label: 'Centros Educativos', href: '#grupos' },
        { label: 'Empresas y Eventos', href: '#grupos' },
        { label: 'Cumpleaños', href: '#grupos' }
      ]
    },
    { label: 'BLOG', href: '#conoce-muf' },
    { label: 'PRENSA', href: '#conoce-muf' },
    {
      label: 'CONTACTO',
      subItems: [
        { label: 'Dónde Estamos', href: '#contacto' },
        { label: 'Escríbenos', href: '#contacto' }
      ]
    }
  ];

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === 'experiencias') {
      onNavigate('experiencias');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Brand Geometric Promo Bar */}
      <div className="relative h-11 overflow-hidden flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border-b border-white/10">
        <TrianglePattern />
        <div className="absolute inset-0 bg-brand-dark/20 z-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-white font-black text-[11px] sm:text-xs tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="bg-brand-dark text-brand-yellow px-2 py-0.5 rounded text-[9px] font-black animate-pulse">¡RESERVA YA!</span>
            <span className="drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)] hidden md:inline">Redescubre la felicidad en más de 20 experiencias únicas</span>
            <span className="drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)] md:hidden">¡Más de 20 experiencias únicas! :)</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onBuyTicketsClick}
              className="bg-brand-yellow text-brand-dark font-black px-3.5 py-1 rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              Comprar Entradas
            </button>
            <span className="bg-black/35 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded flex items-center gap-1.5 text-[10px]">
              <span>🇪🇸</span> <span>ES</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Primary Navigation */}
      <header
        id="header-nav"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-brand-surface/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-2 border-b border-brand-magenta/10'
            : 'bg-brand-surface/70 backdrop-blur-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group">
              <span className="font-extrabold text-2xl tracking-wider text-brand-dark flex items-center">
                M
                <span className="text-brand-magenta relative inline-block transition-transform duration-300 group-hover:scale-125">
                  Ü
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                    <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                    <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                  </span>
                </span>
                F
              </span>
              <div className="hidden sm:flex flex-col ml-1 border-l border-brand-magenta/30 pl-2">
                <span className="text-[10px] font-bold tracking-widest text-brand-magenta uppercase leading-none">Museo de la</span>
                <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase leading-none">Felicidad</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group py-2">
                  {item.subItems ? (
                    <>
                      <button className="flex items-center gap-1 text-brand-dark hover:text-brand-magenta font-black text-xs sm:text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer">
                        <span>{item.label}</span>
                        <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      {/* Dropdown Menu Panel */}
                      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)] p-2 hidden group-hover:block animate-fade-in z-50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45" />
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => handleItemClick(e, sub.href)}
                            className="block px-4 py-2.5 text-xs font-bold text-brand-dark hover:text-brand-magenta hover:bg-brand-magenta/5 rounded-xl transition-all text-left"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleItemClick(e, item.href || '#')}
                      className="text-brand-dark hover:text-brand-magenta font-black text-xs sm:text-xs tracking-widest transition-colors duration-200 uppercase py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-magenta hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Right */}
            <div className="hidden md:flex items-center gap-4">
              <button
                id="cta-buy-header"
                onClick={onBuyTicketsClick}
                className="bg-brand-yellow text-brand-dark px-6 py-2.5 rounded-full font-bold text-sm tracking-wider shadow-[0_4px_14px_rgba(255,222,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,222,0,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer border border-brand-yellow hover:border-brand-dark"
              >
                <Ticket className="w-4 h-4 text-brand-magenta animate-pulse" />
                Comprar Entradas
              </button>
            </div>

            {/* Mobile hamburger menu */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={onBuyTicketsClick}
                className="bg-brand-yellow text-brand-dark p-2 rounded-full font-bold shadow-[0_4px_10px_rgba(255,222,0,0.3)] transform active:scale-95 transition-transform cursor-pointer"
                aria-label="Comprar entradas rápidas"
              >
                <Ticket className="w-4 h-4 text-brand-magenta" />
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand-dark hover:text-brand-magenta transition-colors focus:outline-none cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          id="mobile-menu-drawer"
          className={`fixed inset-0 top-[104px] bg-brand-surface/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ease-in-out border-t border-brand-magenta/10 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="px-4 py-8 space-y-4 flex flex-col h-full justify-between pb-24 overflow-y-auto">
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  {item.subItems ? (
                    <>
                      <span className="block px-4 pt-2 text-[10px] font-black text-brand-magenta tracking-widest uppercase">
                        {item.label}
                      </span>
                      <div className="pl-4 space-y-1">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => handleItemClick(e, sub.href)}
                            className="block px-4 py-2 text-sm font-bold text-brand-dark hover:text-brand-magenta hover:bg-brand-magenta/5 rounded-xl transition-all"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleItemClick(e, item.href || '#')}
                      className="block px-4 py-2.5 text-base font-black text-brand-dark hover:text-brand-magenta hover:bg-brand-magenta/5 rounded-xl transition-all"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 pt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBuyTicketsClick();
                }}
                className="w-full bg-brand-yellow text-brand-dark py-4 rounded-2xl font-black text-center text-base shadow-[0_8px_20px_rgba(255,222,0,0.4)] flex items-center justify-center gap-2"
              >
                <Ticket className="w-5 h-5 text-brand-magenta" />
                ¡COMPRAR ENTRADAS AHORA!
              </button>
              <div className="text-center mt-4 text-xs text-brand-gray font-medium">
                📍 Ronda de Valencia 8, Madrid
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
