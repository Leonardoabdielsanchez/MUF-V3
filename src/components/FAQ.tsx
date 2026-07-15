import { useState } from 'react';
import { HelpCircle, ChevronRight, MessageCircleQuestion } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList: FAQItem[] = [
    {
      question: '¿Es el Museo de la Felicidad solo para niños?',
      answer: '¡En absoluto! MÜF es una experiencia universal diseñada para todas las edades, y tiene un gran porcentaje de visitantes adultos. El recorrido está lleno de juegos, pero también de evidencia científica sobre la psicología positiva, el bienestar emocional y la autocompasión. Muchos adultos y jóvenes salen sorprendidos de lo mucho que les ha impactado a nivel de relax y autoconocimiento.',
    },
    {
      question: '¿Es un buen plan para parejas o amigos?',
      answer: 'Es un plan fantástico. Las actividades promueven la comunicación lúdica, la diversión compartida y la complicidad. Además, la estética inmersiva es ideal para haceros fotos maravillosas y coleccionar recuerdos memorables. ¡Salir de la rutina es la mejor manera de activar la oxitocina!',
    },
    {
      question: '¿Cuánto dura la visita al museo?',
      answer: 'El recorrido tiene una duración estimada de entre 75 y 90 minutos. Es un espacio interactivo de 600 metros cuadrados, por lo que puedes ir a tu propio ritmo experimentando con calma cada una de las más de 20 salas e instalaciones interactivas.',
    },
    {
      question: 'No hablo español, ¿podré disfrutar de la experiencia?',
      answer: '¡Por supuesto! El lenguaje de la felicidad y de la risa es universal. Prácticamente todas las instalaciones inmersivas son táctiles, auditivas, visuales y físicas, lo que las hace plenamente disfrutables e intuitivas para turistas internacionales, sin importar su idioma.',
    },
    {
      question: '¿Se requiere reserva previa online?',
      answer: 'Recomendamos encarecidamente comprar tus entradas online con antelación. Para garantizar que cada visitante viva la mejor experiencia sin aglomeraciones, el aforo por turnos es limitado. Comprando online aseguras tu hora de entrada exacta y evitas esperas en taquilla.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-surface relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(#009ee3_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-magenta font-black text-xs sm:text-sm tracking-widest uppercase bg-brand-magenta/10 px-4 py-1.5 rounded-full inline-block mb-3">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight leading-tight mb-4">
            ¿Tienes alguna <span className="text-brand-magenta">duda feliz</span>?
          </h2>
          <p className="text-sm sm:text-base text-brand-gray font-medium">
            Respuestas rápidas a las consultas más comunes de nuestros futuros exploradores para que prepares tu visita a MÜF con total tranquilidad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-magenta shadow-[0_15px_30px_rgba(227,0,123,0.04)]'
                    : 'border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:border-gray-200'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <MessageCircleQuestion className={`w-5 h-5 shrink-0 ${isOpen ? 'text-brand-magenta' : 'text-brand-blue'}`} />
                    <span className="text-sm sm:text-base font-extrabold text-brand-dark leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Indicator Icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-magenta/30 bg-brand-magenta/5 text-brand-magenta rotate-45'
                        : 'border-gray-200 bg-gray-50 text-brand-gray'
                    }`}
                  >
                    <span className="text-lg font-bold leading-none">+</span>
                  </div>
                </button>

                {/* Grid Template Rows height transitions */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 pt-0 border-t border-gray-50 text-xs sm:text-sm text-brand-gray font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-gray-100 max-w-xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-brand-dark font-semibold mb-3">
            ¿Tienes otra pregunta sobre aforos, reservas privadas o eventos?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-black text-brand-magenta hover:text-brand-magenta/80 tracking-widest uppercase flex items-center justify-center gap-1 cursor-pointer"
          >
            Pregúntanos Directamente <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
