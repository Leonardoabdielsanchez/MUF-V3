import { Check, Info, ShieldCheck, Ticket } from 'lucide-react';

interface TicketOption {
  id: string;
  title: string;
  price: number;
  subtitle: string;
  badge?: string;
  popular: boolean;
  features: string[];
  exclusions: string;
  ctaText: string;
}

interface TicketsProps {
  onBuyTicketsClick: (ticketType?: string) => void;
}

export default function Tickets({ onBuyTicketsClick }: TicketsProps) {
  const options: TicketOption[] = [
    {
      id: 'reducida',
      title: 'Entrada Reducida',
      price: 15,
      subtitle: 'Niños, jubilados, estudiantes y más',
      popular: false,
      features: [
        'Acceso completo a las +20 salas inmersivas',
        'Válido para niños de 4 a 12 años',
        'Estudiantes, desempleados y carnet joven',
        'Mayores de 65 años y jubilados',
        'Personas con discapacidad y acompañante (14,50€)',
      ],
      exclusions: 'Se requerirá acreditación oficial en taquilla.',
      ctaText: 'Comprar Reducida',
    },
    {
      id: 'general',
      title: 'Entrada General',
      price: 17,
      subtitle: 'La tarifa estándar para adultos',
      badge: 'MÁS POPULAR',
      popular: true,
      features: [
        'Acceso completo ilimitado a todas las salas',
        'Pista libre en el Disco Feliz',
        'Prueba oficial en la cabina del Felicitador',
        'Gafas VR incluidas en la experiencia VR',
        'Menores de 4 años entran GRATIS',
      ],
      exclusions: 'Precio final garantizado, sin gastos de gestión.',
      ctaText: 'Comprar General',
    },
    {
      id: 'familiar',
      title: 'Pack Familiar',
      price: 15,
      subtitle: 'Precio por persona (Ahorra reservando juntos)',
      popular: false,
      features: [
        'Para familias con ganas de jugar juntos',
        'Válido para grupos de 3 a 5 personas',
        'Imprescindible mínimo un niño (4-12 años)',
        'Acceso ilimitado a todas las experiencias',
        'Soporte prioritario de accesibilidad',
      ],
      exclusions: 'Máximo 5 personas por pack familiar.',
      ctaText: 'Reservar Pack',
    },
  ];

  return (
    <section id="tarifas" className="py-24 bg-gradient-to-b from-brand-bg to-brand-blue/5 relative overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-magenta font-black text-xs sm:text-sm tracking-widest uppercase bg-brand-magenta/10 px-4 py-1.5 rounded-full inline-block mb-3">
            TARIFAS Y ENTRADAS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-tight mb-4">
            Consigue tus entradas <span className="text-brand-magenta">al mejor precio</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray font-medium">
            Elige el tipo de entrada que mejor se adapte a ti. Compra online de forma segura y anticípate a completar tu aforo antes de que se agoten las plazas.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-14">
          {options.map((option) => (
            <div
              key={option.id}
              className={`bg-white rounded-[28px] p-8 relative flex flex-col justify-between transition-all duration-300 ${
                option.popular
                  ? 'border-4 border-brand-magenta shadow-[0_20px_50px_rgba(227,0,123,0.15)] md:scale-105 md:-translate-y-2 z-10'
                  : 'border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1'
              }`}
            >
              {/* Popular Floating Badge */}
              {option.popular && option.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-yellow to-amber-400 text-brand-dark text-xs font-black tracking-widest px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(255,222,0,0.5)] flex items-center gap-1.5 border border-white">
                  <Ticket className="w-3.5 h-3.5 text-brand-magenta animate-bounce" />
                  {option.badge}
                </div>
              )}

              <div>
                {/* Header card */}
                <div className="text-center pb-6 border-b border-gray-50">
                  <h3 className="text-xl font-extrabold text-brand-dark mb-1 tracking-tight">
                    {option.title}
                  </h3>
                  <p className="text-xs text-brand-gray font-medium mb-4 max-w-[200px] mx-auto min-h-[32px] flex items-center justify-center">
                    {option.subtitle}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-baseline justify-center text-brand-dark">
                    <span className="text-5xl font-black tracking-tight">{option.price}</span>
                    <span className="text-2xl font-extrabold ml-1">€</span>
                    <span className="text-xs text-brand-gray font-bold ml-1.5">/ persona</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 py-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-magenta/10 text-brand-magenta flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-brand-dark font-medium leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions and Buy Button */}
              <div className="pt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-brand-gray font-semibold mb-6 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <Info className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span>{option.exclusions}</span>
                </div>

                <button
                  onClick={() => onBuyTicketsClick(option.id)}
                  className={`w-full py-4 rounded-2xl font-extrabold text-sm tracking-wider cursor-pointer shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                    option.popular
                      ? 'bg-brand-magenta text-white shadow-[0_8px_25px_rgba(227,0,123,0.3)] hover:shadow-[0_12px_30px_rgba(227,0,123,0.55)] hover:scale-102 hover:bg-brand-magenta/95'
                      : 'bg-brand-dark text-white hover:bg-brand-dark/90 hover:scale-102'
                  }`}
                >
                  <Ticket className="w-4 h-4" />
                  {option.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security badges & notes */}
        <div className="bg-white rounded-2xl p-4 sm:px-8 border border-gray-100 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-dark">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Transacción 100% segura. Certificado SSL cifrado de extremo a extremo.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">Aceptamos:</span>
            <div className="flex gap-2">
              <span className="bg-gray-100 border border-gray-200 px-2.5 py-1 rounded text-[10px] font-black text-gray-500">VISA</span>
              <span className="bg-gray-100 border border-gray-200 px-2.5 py-1 rounded text-[10px] font-black text-gray-500">MC</span>
              <span className="bg-gray-100 border border-gray-200 px-2.5 py-1 rounded text-[10px] font-black text-gray-500">BIZUM</span>
              <span className="bg-gray-100 border border-gray-200 px-2.5 py-1 rounded text-[10px] font-black text-gray-500">APPLE PAY</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
