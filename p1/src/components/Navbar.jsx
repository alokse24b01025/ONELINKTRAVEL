import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para rolagem suave até às secções
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-20 flex justify-between items-center px-4 md:px-8 bg-white/10 backdrop-blur-2xl border-b border-white/30 z-[100]">
      
      {/* CONTENTOR DO LOGÓTIPO */}
      <div className="relative h-full w-40 md:w-64 flex items-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <img 
            src="/logo-full.svg" 
            alt="Logótipo One Link Travel" 
            className="h-[140px] md:h-[260px] w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>
      
      {/* NAVEGAÇÃO DESKTOP - Apenas os 4 links originais */}
      <div 
        className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-gray-900"
        style={{ fontFamily: 'var(--font-worksans)' }}
      >
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-blue-600 transition-colors">Início</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Serviços</a>
        <a href="#visas" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Vistos</a>
        <div 
          onClick={(e) => scrollToSection(e, 'team')} 
          className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors group"
        >
          <span>Sobre nós</span>
          <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* BOTÃO MOBILE (Hambúrguer) */}
      <button 
        className="md:hidden p-2 text-gray-900 relative z-[120]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir Menu"
      >
        <div className="flex flex-col gap-1.5 w-6">
          <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* MENU LATERAL - Apenas os 4 links originais */}
      <div className={`fixed top-0 right-0 w-[70%] sm:w-64 h-screen bg-white/60 backdrop-blur-3xl border-l border-white/40 shadow-2xl transition-transform duration-500 ease-in-out z-[115] pt-24 px-8 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div 
          className="flex flex-col gap-8 text-[18px] font-medium text-gray-900"
          style={{ fontFamily: 'var(--font-worksans)' }}
        >
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:translate-x-2 transition-transform">Início</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:translate-x-2 transition-transform">Serviços</a>
          <a href="#visas" onClick={(e) => scrollToSection(e, 'services')} className="hover:translate-x-2 transition-transform">Vistos</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'team')} className="hover:translate-x-2 transition-transform">Sobre nós</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;