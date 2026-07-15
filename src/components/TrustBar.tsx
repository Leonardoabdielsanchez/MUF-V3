import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Users, Calendar, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.trust-card');
    if (cards && cards.length > 0) {
      const anim = gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    }
  }, []);

  const trustItems = [
    {
      icon: (
        <div className="p-3 bg-amber-50 rounded-2xl text-amber-500">
          <div className="flex gap-0.5 mb-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-brand-yellow" />
            ))}
          </div>
          <span className="text-xs font-black text-brand-dark block text-center">4.8 / 5.0</span>
        </div>
      ),
      title: '4.8 ★ Reseñas Google',
      desc: 'Más de 4,586 opiniones reales de personas felices.',
    },
    {
      icon: (
        <div className="p-3 bg-brand-magenta/5 rounded-2xl text-brand-magenta flex items-center justify-center">
          <Users className="w-8 h-8" />
        </div>
      ),
      title: '+200.000 Visitantes',
      desc: 'Familias, parejas y turistas han vivido la magia.',
    },
    {
      icon: (
        <div className="p-3 bg-brand-blue/5 rounded-2xl text-brand-blue flex items-center justify-center">
          <Calendar className="w-8 h-8" />
        </div>
      ),
      title: 'Duración: 75-90 min',
      desc: 'El plan ideal en el corazón de Madrid.',
    },
    {
      icon: (
        <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500 flex items-center justify-center">
          <Award className="w-8 h-8" />
        </div>
      ),
      title: 'Ciencia de la Felicidad',
      desc: 'Experiencias avaladas científicamente por expertos.',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-20"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-brand-magenta/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="trust-card pt-6 first:pt-0 sm:pt-0 sm:px-4 lg:px-6 flex flex-col items-center text-center group transition-all duration-300 first:pl-0 last:pr-0"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-base font-extrabold text-brand-dark mb-1 tracking-tight">
              {item.title}
            </h3>
            <p className="text-xs text-brand-gray font-medium leading-relaxed max-w-[200px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
