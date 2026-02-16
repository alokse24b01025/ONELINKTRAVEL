import React, { useState } from 'react';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null); // 'privacidade' ou 'termos'

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="relative py-8 px-6 overflow-hidden">
      {/* Fundo Translúcido */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/20 z-0"></div>
      
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center relative z-10">
        <div className="text-center">
          <p 
            className="text-[9px] md:text-[10px] text-black/60 font-medium uppercase tracking-[0.4em] mb-4"
            style={{ fontFamily: 'var(--font-worksans)' }}
          >
            © 2026 One Link HOLDING.
          </p>
          
          <div className="w-12 h-[1px] bg-black/10 mx-auto mb-4"></div>
          
          <div className="flex justify-center gap-10 text-[9px] text-black/40 font-semibold uppercase tracking-[0.2em]">
            <span 
              onClick={() => setActiveModal('privacidade')}
              className="hover:text-black hover:tracking-[0.25em] transition-all duration-500 cursor-pointer ease-in-out"
            >
              Privacidade
            </span>
            <span 
              onClick={() => setActiveModal('termos')}
              className="hover:text-black hover:tracking-[0.25em] transition-all duration-500 cursor-pointer ease-in-out"
            >
              Termos
            </span>
          </div>
        </div>
      </div>

      {/* MODAL ESTRUTURA (Aparece quando activeModal não é null) */}
      {activeModal && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white/90 backdrop-blur-xl max-w-2xl w-full max-h-[70vh] overflow-y-auto rounded-[2rem] p-10 shadow-2xl border border-white/50 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Conteúdo do Modal */}
            <h2 className="text-xl font-medium text-black mb-6 uppercase tracking-widest" style={{ fontFamily: 'var(--font-manrope)' }}>
              {activeModal === 'privacidade' ? 'Política de Privacidade' : 'Termos de Serviço'}
            </h2>
            
            <div className="text-gray-600 text-sm leading-relaxed space-y-4" style={{ fontFamily: 'var(--font-worksans)' }}>
              {activeModal === 'privacidade' ? (
                <>
                  <p>A One Link valoriza a sua privacidade. Os seus dados são protegidos com os mais altos padrões de segurança.</p>
                  <p>Coletamos apenas informações necessárias para o processamento do seu visto e comunicação direta.</p>
                </>
              ) : (
                <>
                  <p>Ao utilizar os nossos serviços, concorda com a mediação profissional da One Link para a sua jornada internacional.</p>
                  <p>Garantimos transparência total em todos os honorários e prazos de processamento estabelecidos.</p>
                </>
              )}
            </div>
          </div>
          {/* Clicar fora fecha o modal */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
    </footer>
  );
};

export default Footer;