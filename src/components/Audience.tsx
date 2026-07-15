import React from 'react';
import { Users, Sparkles, Globe, Heart, CheckCircle2 } from 'lucide-react';

interface AudienceCard {
  icon: React.ReactNode;
  title: string;
  audience: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  features: string[];
  borderColor: string;
}

interface AudienceProps {
  onBuyTicketsClick: () => void;
}

export default function Audience({ onBuyTicketsClick }: AudienceProps) {
  const audiences: AudienceCard[] = [
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
          <Users className="w-8 h-8" />
        </div>
      ),
      title: 'En Familia',
      audience: 'Para grandes y pequeños',
      badge: 'EDUCATIVO Y DIVERTIDO',
      badgeBg: 'bg-brand-blue/10',
      badgeText: 'text-brand-blue',
      description: 'Un plan original y enriquecedor donde niños, padres y abuelos juegan juntos, se ríen sin parar y aprenden qué desencadena la felicidad real.',
      features: [
        'Actividad 100% participativa',
        'Niños menores de 4 años gratis',
        'Fácil acceso con carritos de bebé',
        'Fomento del vínculo familiar'
      ],
      borderColor: 'hover:border-brand-blue/30'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 animate-pulse" />
        </div>
      ),
      title: 'Adultos & Amigos',
      audience: 'Desconecta de la rutina',
      badge: 'PLAN ORIGINAL MADRID',
      badgeBg: 'bg-brand-magenta/10',
      badgeText: 'text-brand-magenta',
      description: 'El lugar perfecto para ir en pareja o con tu grupo de amigos. Haz fotos espectaculares, libera el estrés cotidiano y ríete como hace tiempo que no lo hacías.',
      features: [
        'Gran plan para citas románticas',
        'Divertidísimo para grupos de amigos',
        'Escenarios altamente instagrameables',
        'Terapia antiestrés natural'
      ],
      borderColor: 'hover:border-brand-magenta/30'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-dark flex items-center justify-center mb-6">
          <Globe className="w-8 h-8 text-brand-yellow" />
        </div>
      ),
      title: 'Turistas',
      audience: 'La Madrid inmersiva',
      badge: 'CULTURA GLOBAL',
      badgeBg: 'bg-brand-yellow/15',
      badgeText: 'text-brand-dark',
      description: '¿Visitando Madrid? No te pierdas la atracción inmersiva que todo el mundo recomienda. No es necesario hablar español para disfrutar plenamente de la experiencia.',
      features: [
        'Ubicación ultra-céntrica (Ronda de Valencia)',
        'Idioma no-barrera (experiencia visual/física)',
        'Ideal para todas las culturas',
        'Cerca del Metro Embajadores y Atocha'
      ],
      borderColor: 'hover:border-brand-yellow/30'
    }
  ];

  return (
    <section id="grupos" className="py-24 bg-brand-surface relative overflow-hidden">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e3007b_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.015]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-black text-xs sm:text-sm tracking-widest uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
            UN PLAN PARA TODOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-tight mb-4">
            Un plan diferente en Madrid, <span className="text-brand-blue">para cada momento</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray font-medium">
            Tanto si vienes con los más pequeños de la casa, tu grupo de amigos de siempre, tu pareja o de visita turística, MÜF te garantiza risas y aprendizajes inolvidables.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.12)] transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-transparent ${card.borderColor}`}
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-4">
                  {card.icon}
                  <span className={`text-[10px] font-black tracking-widest ${card.badgeBg} ${card.badgeText} px-3 py-1.5 rounded-md`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-brand-dark mb-1 tracking-tight">
                  {card.title}
                </h3>
                <span className="text-xs font-bold text-brand-magenta tracking-wide block mb-4 uppercase">
                  {card.audience}
                </span>

                <p className="text-sm text-brand-gray font-medium leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-gray-50">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-brand-dark">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-magenta shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual CTA triggers Buy Tickets */}
              <div className="mt-8 pt-6">
                <button
                  onClick={onBuyTicketsClick}
                  className="w-full py-3 rounded-2xl font-extrabold text-xs tracking-wider border-2 border-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-200 cursor-pointer text-center block uppercase"
                >
                  Reservar entradas
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Big Central CTA */}
        <div className="bg-gradient-to-r from-brand-magenta to-brand-blue rounded-3xl p-1 md:p-1.5 shadow-[0_20px_40px_rgba(227,0,123,0.15)] max-w-4xl mx-auto">
          <div className="bg-brand-dark rounded-[20px] p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black mb-2 text-brand-yellow">
                ¿Vienes en grupo o celebras un cumpleaños?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-medium max-w-xl">
                Ofrecemos tarifas reducidas especiales para colegios, grupos de más de 10 personas, eventos corporativos y celebraciones de cumpleaños personalizadas. ¡Escríbenos y diseñamos tu visita!
              </p>
            </div>
            <a
              href="mailto:reservas@museodelafelicidad.com?subject=Reserva%20de%20Grupo%20-%20Museo%20de%20la%20Felicidad"
              className="px-6 py-3.5 bg-white text-brand-dark hover:bg-brand-yellow font-black rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-colors cursor-pointer text-center shrink-0 w-full md:w-auto"
            >
              Contactar Grupos
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
