import React from 'react';
import { CheckCircle2, Plane, CreditCard, CalendarCheck, ArrowRight, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';

function App() {
  const whatsappNumber = "5522998373299"; // O seu número atualizado
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens%20com%20boleto%20pr%C3%A9-pago.`;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-esvcblue selection:text-white overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <header className="absolute top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Plane className="text-esvcblue-light h-8 w-8" />
          <span className="text-white font-display font-bold text-2xl tracking-wide uppercase">ESVC Turismo</span>
        </div>
        <a 
          href={whatsappLink}
          className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 border border-white/20"
        >
          <MessageCircle className="w-4 h-4" />
          Falar com Especialista
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 px-6 md:px-12">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074" 
            alt="Avião voando" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-esvcdark-dark/90 via-esvcdark/80 to-esvcdark/30"></div>
        </div>

        <div className="relative z-10 max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-esvcblue/20 border border-esvcblue/30 text-esvcblue-light text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="tracking-wide uppercase text-xs">Viagem Garantida</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            A viagem dos seus sonhos parcelada no boleto mensal.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
            Esqueça a análise de crédito e a burocracia. Com o nosso <strong className="text-white font-medium">Boleto Pré-pago</strong>, você garante suas férias apenas pagando uma entrada e parcelando o restante. Qualquer um pode comprar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#destinos"
              className="bg-esvcblue hover:bg-esvcblue-light text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,124,186,0.3)] hover:shadow-[0_0_30px_rgba(0,124,186,0.5)] hover:-translate-y-1"
            >
              Ver Destinos de Exemplo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-esvcblue-light" />
              <span>Sem consulta ao SPC/Serasa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-esvcblue-light" />
              <span>Sem comprovar renda</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-esvcdark mb-4">Como funciona a mágica?</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Nós criamos um método simples para que o pagamento caiba no seu bolso antes de você embarcar, sem depender de bancos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-slate-100 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-sand-50 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-esvcdark group-hover:border-esvcdark transition-colors duration-500">
                <MapPin className="w-10 h-10 text-esvcdark-light group-hover:text-esvcblue-light transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-esvcdark mb-3">1. Escolha o destino</h3>
              <p className="text-slate-600">Selecione o pacote perfeito para você e sua família, com a data da viagem definida.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-sand-50 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-esvcdark group-hover:border-esvcdark transition-colors duration-500">
                <CreditCard className="w-10 h-10 text-esvcdark-light group-hover:text-esvcblue-light transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-esvcdark mb-3">2. Pague a entrada</h3>
              <p className="text-slate-600">Garanta a sua reserva com um valor de entrada que cabe no seu planejamento.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-sand-50 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-esvcdark group-hover:border-esvcdark transition-colors duration-500">
                <CalendarCheck className="w-10 h-10 text-esvcdark-light group-hover:text-esvcblue-light transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-esvcdark mb-3">3. Parcele o restante</h3>
              <p className="text-slate-600">O saldo é dividido em boletos mensais. Você só precisa quitar tudo até 30 dias antes do embarque.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-sand-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-esvcdark mb-2">Exemplo prático:</h4>
              <p className="text-slate-600">A regra é simples: se a viagem é daqui a 7 meses, você paga em 6 parcelas iguais. Em uma viagem de R$ 6.000, você paga R$ 1.000 de entrada e mais 5 parcelas de R$ 1.000 no boleto.</p>
            </div>
            <div className="hidden md:flex text-4xl">💡</div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS (CATALOG) SECTION */}
      <section id="destinos" className="py-24 px-6 md:px-12 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-esvcdark mb-4">Veja como fica acessível</h2>
              <p className="text-lg text-slate-500 max-w-xl">Alguns pacotes de exemplo para você entender a matemática e começar a arrumar as malas.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800" alt="Maceió" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-esvcdark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Nacional
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-esvcdark mb-2">Maceió, AL</h3>
                <p className="text-slate-500 mb-6 flex-grow">Pacote de R$ 3.600 para viagem daqui a 7 meses</p>
                
                <div className="bg-sand-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">Entrada:</span>
                    <span className="font-bold text-esvcdark">R$ 600,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">+ 5 Parcelas de:</span>
                    <span className="font-display font-bold text-2xl text-esvcblue">R$ 600<span className="text-sm font-sans font-normal text-slate-500">/mês</span></span>
                  </div>
                </div>
                
                <a href={whatsappLink} className="w-full bg-esvcdark hover:bg-esvcdark-light text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Quero essa viagem
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,124,186,0.15)] border-2 border-esvcblue hover:-translate-y-2 transition-transform duration-500 group flex flex-col h-full relative">
              <div className="absolute top-0 inset-x-0 bg-esvcblue text-white text-xs font-bold text-center py-1 uppercase tracking-widest z-20">
                Mais Buscado
              </div>
              <div className="relative h-64 overflow-hidden pt-6">
                <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800" alt="Resort All Inclusive" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-esvcdark mb-2">Porto Seguro, BA</h3>
                <p className="text-slate-500 mb-6 flex-grow">Pacote de R$ 5.000 para viagem daqui a 11 meses</p>
                
                <div className="bg-sand-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">Entrada:</span>
                    <span className="font-bold text-esvcdark">R$ 500,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">+ 9 Parcelas de:</span>
                    <span className="font-display font-bold text-2xl text-esvcblue">R$ 500<span className="text-sm font-sans font-normal text-slate-500">/mês</span></span>
                  </div>
                </div>
                
                <a href={whatsappLink} className="w-full bg-esvcblue hover:bg-esvcblue-light text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Quero essa viagem
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&q=80&w=800" alt="Bariloche" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-esvcdark/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Internacional
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-esvcdark mb-2">Bariloche, ARG</h3>
                <p className="text-slate-500 mb-6 flex-grow">Pacote de R$ 8.000 para viagem daqui a 9 meses</p>
                
                <div className="bg-sand-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">Entrada:</span>
                    <span className="font-bold text-esvcdark">R$ 1.000,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">+ 7 Parcelas de:</span>
                    <span className="font-display font-bold text-2xl text-esvcblue">R$ 1.000<span className="text-sm font-sans font-normal text-slate-500">/mês</span></span>
                  </div>
                </div>
                
                <a href={whatsappLink} className="w-full bg-esvcdark hover:bg-esvcdark-light text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Quero essa viagem
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-esvcdark text-white py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-esvcblue rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pronto para fechar sua próxima viagem?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light">Não deixe a falta de limite no cartão te impedir de viver momentos incríveis. Fale com a gente e descubra como o boleto pré-pago encaixa no seu bolso.</p>
          
          <a 
            href={whatsappLink}
            className="inline-flex bg-esvcblue hover:bg-esvcblue-light text-white px-10 py-5 rounded-full font-bold text-xl items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(0,124,186,0.3)] hover:-translate-y-1 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Especialista no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-esvcdark-dark text-slate-400 py-8 text-center border-t border-white/10 text-sm">
        <p>© {new Date().getFullYear()} ESVC Turismo. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
