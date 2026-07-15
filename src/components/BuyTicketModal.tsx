import { useState, useEffect } from 'react';
import { X, Calendar, Clock, CreditCard, Ticket, CheckCircle2, QrCode, Sparkles, Printer, ArrowRight } from 'lucide-react';

interface BuyTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTicketId?: string;
}

export default function BuyTicketModal({ isOpen, onClose, selectedTicketId }: BuyTicketModalProps) {
  const [ticketType, setTicketType] = useState('general');
  const [quantity, setQuantity] = useState(2);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:30 h');
  const [step, setStep] = useState(1); // 1: Config, 2: Checkout, 3: Success

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (isOpen) {
      const initialTicketId = selectedTicketId || 'general';
      setTicketType(initialTicketId);
      if (initialTicketId === 'familiar') {
        setQuantity(3);
      } else {
        setQuantity(2);
      }
      setStep(1);
    }
  }, [isOpen, selectedTicketId]);

  const handleTicketTypeChange = (id: string) => {
    setTicketType(id);
    if (id === 'familiar') {
      if (quantity < 3) setQuantity(3);
      if (quantity > 5) setQuantity(5);
    } else {
      if (quantity > 10) setQuantity(10);
    }
  };

  // Pricing definitions
  const getUnitPrice = () => {
    switch (ticketType) {
      case 'reducida':
        return 15;
      case 'familiar':
        return 15;
      case 'general':
      default:
        return 17;
    }
  };

  const getSubtotal = () => {
    return getUnitPrice() * quantity;
  };

  // Prepopulate today's date + 1 day
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    setDate(dateString);
  }, []);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Validate inputs
      if (!name || !email) {
        alert('Por favor complete los campos obligatorios (Nombre y Correo electrónico)');
        return;
      }
      setStep(3);
    }
  };

  const resetModal = () => {
    setStep(1);
    setName('');
    setEmail('');
    setPhone('');
    setQuantity(2);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md transition-opacity" onClick={resetModal} />

      {/* Modal Box */}
      <div className="relative bg-white rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.3)] w-full max-w-lg overflow-hidden transform transition-all z-10 border border-brand-magenta/10">
        
        {/* Top Header */}
        <div className="bg-brand-dark text-white p-6 relative flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-brand-magenta" />
            <h3 className="font-extrabold text-lg sm:text-xl tracking-tight">Compra tus Entradas MÜF</h3>
          </div>
          <button
            onClick={resetModal}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-magenta text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content steps */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          
          {/* Step 1: Config tickets */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Ticket Type Selector */}
              <div>
                <label className="block text-xs font-extrabold text-brand-dark uppercase tracking-widest mb-2.5">
                  1. Selecciona tu Tipo de Entrada
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'general', title: 'General', price: '17€' },
                    { id: 'reducida', title: 'Reducida', price: '15€' },
                    { id: 'familiar', title: 'Familiar', price: '15€' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleTicketTypeChange(t.id)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        ticketType === t.id
                          ? 'border-brand-magenta bg-brand-magenta/5 text-brand-magenta font-black'
                          : 'border-gray-100 hover:border-gray-200 text-brand-dark font-bold'
                      }`}
                    >
                      <span className="block text-sm leading-tight">{t.title}</span>
                      <span className="block text-xs text-brand-gray mt-1">{t.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div>
                  <span className="block text-xs font-black text-brand-dark uppercase tracking-wide">
                    2. Cantidad de Personas
                  </span>
                  <span className="text-[11px] text-brand-gray font-bold">
                    {ticketType === 'familiar' ? 'Mínimo de 3 personas' : 'Menores de 4 años gratis'}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(ticketType === 'familiar' ? 3 : 1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-white hover:bg-brand-magenta hover:text-white border border-gray-200 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors shadow-sm"
                  >
                    -
                  </button>
                  <span className="text-xl font-black text-brand-dark w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(ticketType === 'familiar' ? 5 : 10, quantity + 1))}
                    className="w-10 h-10 rounded-full bg-white hover:bg-brand-magenta hover:text-white border border-gray-200 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Date Selector */}
              <div>
                <label className="block text-xs font-extrabold text-brand-dark uppercase tracking-widest mb-2">
                  3. Elige tu Fecha de Visita
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3.5 bg-gray-50 rounded-2xl border border-gray-200 text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-magenta"
                  />
                  <Calendar className="w-5 h-5 text-brand-gray absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-extrabold text-brand-dark uppercase tracking-widest mb-2.5">
                  4. Selecciona tu Hora de Acceso
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['11:00 h', '11:30 h', '13:00 h', '14:30 h', '16:30 h', '18:00 h', '19:30 h', '20:30 h'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeSlot(t)}
                      className={`py-2 px-1 rounded-xl border text-xs text-center font-bold transition-all cursor-pointer ${
                        timeSlot === t
                          ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-extrabold shadow-sm'
                          : 'border-gray-100 hover:border-gray-200 text-brand-dark'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-brand-magenta/5 border border-brand-magenta/10">
                <div className="flex justify-between items-center text-brand-dark mb-1">
                  <span className="text-xs font-bold uppercase tracking-wide">Subtotal entradas:</span>
                  <span className="text-lg font-black">{getSubtotal()} €</span>
                </div>
                <div className="text-[10px] text-brand-gray font-semibold leading-relaxed flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Sin gastos de gestión extra. Cancelación gratuita hasta 24h antes.</span>
                </div>
              </div>

              {/* Next step CTA */}
              <button
                onClick={handleNextStep}
                className="w-full bg-brand-magenta text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-[0_8px_20px_rgba(227,0,123,0.3)] hover:shadow-[0_12px_25px_rgba(227,0,123,0.5)] transform active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Siguiente: Datos de Contacto
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Contact Info & Checkout */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <span className="block text-xs font-black text-brand-magenta uppercase tracking-wide mb-2">Detalle de tu reserva</span>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-brand-dark">
                  <div>
                    <span className="block text-[10px] text-brand-gray uppercase">TIPO ENTRADA</span>
                    <span className="font-extrabold capitalize">{ticketType}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-gray uppercase">CANTIDAD</span>
                    <span className="font-extrabold">{quantity} pax</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-gray uppercase">FECHA</span>
                    <span className="font-extrabold">{date}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-gray uppercase">HORA</span>
                    <span className="font-extrabold">{timeSlot}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-150 flex justify-between items-center text-sm font-black text-brand-dark">
                  <span>TOTAL A PAGAR:</span>
                  <span className="text-brand-magenta text-lg">{getSubtotal()} €</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Ana García"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-magenta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ana.garcia@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-magenta"
                  />
                  <span className="text-[10px] text-brand-gray mt-1 block">Aquí enviaremos tus entradas en PDF con código QR.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Teléfono móvil
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej. +34 600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-magenta"
                  />
                </div>
              </div>

              {/* Payment emulation note */}
              <div className="p-3 bg-amber-50 border border-amber-200 text-[10px] rounded-xl text-amber-800 leading-relaxed flex gap-2">
                <CreditCard className="w-5 h-5 shrink-0" />
                <span><strong>Entorno Seguro de Pruebas:</strong> Al presionar Pagar, se simulará una transacción bancaria segura exitosa sin cargos reales.</span>
              </div>

              {/* Checkout Controls */}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 border border-gray-200 text-brand-dark font-extrabold text-xs tracking-wider uppercase rounded-2xl cursor-pointer"
                >
                  Atrás
                </button>
                <button
                  onClick={handleNextStep}
                  className="w-2/3 bg-brand-yellow text-brand-dark py-4 rounded-2xl font-black text-xs tracking-widest uppercase shadow-[0_5px_15px_rgba(255,222,0,0.4)] hover:scale-102 flex items-center justify-center gap-1.5 cursor-pointer border border-brand-yellow"
                >
                  <CreditCard className="w-4 h-4 text-brand-magenta" />
                  Proceder al Pago
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Ticket success! */}
          {step === 3 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-600 animate-bounce">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div>
                <h4 className="text-xl font-black text-brand-dark tracking-tight mb-1">¡Reserva de Felicidad Confirmada!</h4>
                <p className="text-xs text-brand-gray font-medium leading-relaxed max-w-sm mx-auto">
                  Enhorabuena, {name}. Tus entradas han sido generadas y enviadas con éxito a tu correo electrónico <strong className="text-brand-dark">{email}</strong>.
                </p>
              </div>

              {/* Ticket UI Container */}
              <div className="border-2 border-dashed border-gray-200 rounded-3xl p-6 bg-gradient-to-br from-brand-bg to-brand-yellow/5 relative overflow-hidden text-left max-w-sm mx-auto shadow-md">
                {/* Visual punched hole decorative elements */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-white border-r border-gray-200 -translate-y-1/2 z-10" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-white border-l border-gray-200 -translate-y-1/2 z-10" />

                <div className="flex justify-between items-start border-b border-gray-150 pb-4 mb-4">
                  <div>
                    <span className="text-[9px] font-black tracking-widest text-brand-magenta uppercase">TICKET ACCESO MÜF</span>
                    <h5 className="font-extrabold text-brand-dark text-base capitalize">{ticketType}</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black text-brand-gray uppercase block">CANTIDAD</span>
                    <span className="font-extrabold text-brand-dark text-base">{quantity} personas</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold text-brand-dark mb-4">
                  <div>
                    <span className="block text-[8px] text-brand-gray uppercase">FECHA</span>
                    <span>{date}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-brand-gray uppercase">HORA</span>
                    <span>{timeSlot}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-brand-gray uppercase">TITULAR</span>
                    <span className="truncate block max-w-[120px]">{name}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-brand-gray uppercase">CODIGO RESERVA</span>
                    <span className="font-mono text-brand-magenta">#MUF-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                </div>

                {/* QR Display */}
                <div className="pt-4 border-t border-dashed border-gray-150 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] text-brand-gray font-bold block leading-normal">Presenta este código en tu móvil al llegar al museo.</span>
                    <span className="text-[9px] text-brand-blue font-extrabold uppercase mt-1 inline-flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-brand-yellow animate-spin" />
                      Hormonas activadas
                    </span>
                  </div>
                  <div className="p-1.5 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <QrCode className="w-16 h-16 text-brand-dark" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto pt-2">
                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="w-full sm:w-1/2 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl font-bold text-xs tracking-wider uppercase text-brand-dark flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-brand-gray" />
                  Imprimir PDF
                </button>
                <button
                  onClick={resetModal}
                  className="w-full sm:w-1/2 py-3 bg-brand-magenta text-white hover:bg-brand-magenta/90 rounded-xl font-black text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-1 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
