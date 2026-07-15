import { MapPin, Mail, Phone, Calendar, Clock, Instagram, Facebook, Linkedin, Youtube, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-brand-dark text-white pt-20 pb-8 relative overflow-hidden border-t-4 border-brand-magenta">
      
      {/* Decorative colored glow on corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          
          {/* Column 1: Brand, Tagline & Allies */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 mb-4 group">
                <span className="font-extrabold text-3xl tracking-wider text-white">
                  M
                  <span className="text-brand-magenta inline-block relative transition-transform group-hover:scale-110">
                    Ü
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                      <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                      <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                    </span>
                  </span>
                  F
                </span>
                <div className="flex flex-col ml-1 border-l border-brand-magenta pl-2">
                  <span className="text-[10px] font-bold tracking-widest text-brand-magenta uppercase leading-none">Museo de la</span>
                  <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase leading-none">Felicidad</span>
                </div>
              </a>

              <p className="text-xs text-gray-400 font-medium mb-6 leading-relaxed">
                ¡Tus hormonas de la felicidad se dispararán! Más de 20 experiencias interactivas y científicas diseñadas para arrancarte sonrisas inolvidables.
              </p>

              {/* Social networks */}
              <div className="flex gap-3 mb-6">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-magenta text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-magenta text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1" aria-label="Youtube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Strategic Allies badges */}
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-2.5">ALIADOS ESTRATÉGICOS</span>
              <div className="flex flex-wrap gap-2">
                <span className="text-[9px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-brand-yellow">WORLD HAPPINESS FOUNDATION</span>
                <span className="text-[9px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-brand-blue">HAPPINESS RESEARCH INST.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Detailed Hours */}
          <div>
            <div className="inline-flex items-center gap-1.5 border-b border-brand-yellow pb-2 mb-6">
              <Clock className="w-4 h-4 text-brand-yellow" />
              <h4 className="text-sm font-black uppercase tracking-wider">HORARIOS DE VISITA</h4>
            </div>
            
            <ul className="space-y-4 text-xs font-medium text-gray-300">
              <li className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Lunes a Jueves:</span>
                <span className="font-extrabold text-white">11:00 a 21:00 h</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Viernes:</span>
                <span className="font-extrabold text-brand-magenta">10:30 a 21:30 h</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400">Sábados y Festivos:</span>
                <span className="font-extrabold text-brand-yellow">10:30 a 22:00 h</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-gray-400">Domingos y No Lectivos:</span>
                <span className="font-extrabold text-white">10:30 a 21:00 h</span>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-[10px] text-brand-yellow font-bold leading-relaxed">
                ⚠️ Nota: El último pase de entrada se realiza 60 minutos antes de la hora de cierre del museo.
              </p>
            </div>
          </div>

          {/* Column 3: Location, Contact & Transit */}
          <div>
            <div className="inline-flex items-center gap-1.5 border-b border-brand-blue pb-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <h4 className="text-sm font-black uppercase tracking-wider">¿DÓNDE ESTAMOS?</h4>
            </div>

            <p className="text-xs font-bold text-white mb-2">📍 Ronda de Valencia 8, 28012 Madrid</p>
            
            {/* Detailed public transport info */}
            <div className="space-y-2 mb-6 bg-white/5 p-3 rounded-xl border border-white/5 text-[11px] text-gray-300 leading-relaxed">
              <p>🚇 <strong className="text-white">Metro:</strong> A menos de 1 minuto andando del Metro Embajadores (L3, L5 y Cercanías C5).</p>
              <p>🎨 <strong className="text-white">A pie:</strong> A 5 minutos del Museo Reina Sofía y 10 minutos de la estación de Atocha.</p>
            </div>

            <div className="space-y-3.5 text-xs">
              <a href="mailto:reservas@museodelafelicidad.com" className="flex items-center gap-2 text-gray-300 hover:text-brand-magenta transition-colors">
                <Mail className="w-4 h-4 text-brand-magenta" />
                <span>reservas@museodelafelicidad.com</span>
              </a>
              <a href="mailto:marketing@museodelafelicidad.com" className="flex items-center gap-2 text-gray-300 hover:text-brand-magenta transition-colors">
                <Mail className="w-4 h-4 text-brand-magenta" />
                <span>marketing@museodelafelicidad.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>+34 910 000 000</span>
              </div>
            </div>
          </div>

          {/* Column 4: Interactive Google Map */}
          <div>
            <div className="inline-flex items-center gap-1.5 border-b border-brand-magenta pb-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-magenta" />
              <h4 className="text-sm font-black uppercase tracking-wider">CÓMO LLEGAR</h4>
            </div>

            <div className="rounded-xl overflow-hidden h-40 border border-white/10 shadow-lg relative group">
              <iframe
                title="Mapa Museo de la Felicidad Madrid"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3804820251786!2d-3.7047055!3d40.4004945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAxLjgiTiAzwrA0MicyNi45Ilc!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Ronda+de+Valencia+8,+Madrid"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-2 right-2 bg-brand-dark/95 text-white border border-white/20 text-[10px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 backdrop-blur-sm"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom (Legal links & copyright) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div>
            <p>© {currentYear} Museo de la Felicidad (MÜF). Todos los derechos reservados.</p>
            <p className="text-[10px] text-gray-600 mt-1">📍 Ronda de Valencia 8, Madrid | Diseñado con fines de alta conversión.</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#cookies" className="hover:text-white transition-colors">Política de Cookies</a>
            <a href="#privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#accesibilidad" className="hover:text-white transition-colors">Accesibilidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
