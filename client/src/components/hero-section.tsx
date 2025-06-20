import { AlertTriangle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-[var(--dark-bg)] to-[var(--gold)]/10"></div>
      
      {/* Alert banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-danger py-4 px-6 z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center space-x-3 text-white">
            <AlertTriangle className="h-6 w-6 animate-pulse-slow" />
            <span className="text-lg font-semibold">ALERTA: Seu futuro está em risco</span>
            <AlertTriangle className="h-6 w-6 animate-pulse-slow" />
          </div>
        </div>
      </div>
      
      {/* Main hero content */}
      <div className="relative z-5 container mx-auto max-w-4xl px-6 text-center mt-20">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-gradient-gold mb-6 md:mb-8 leading-tight">
          Investimentos<br />
          <span className="text-red-500">X</span><br />
          Bets
        </h1>
        <h2 className="text-lg sm:text-xl md:text-3xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
          A Verdade Nua e Crua sobre seu futuro
        </h2>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-[var(--gold)]" />
      </div>
    </section>
  );
}
