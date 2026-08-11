function Loading() {
  return (
    
    // fixed inset-0 z-50 para cobrir o Header e a barra de pesquisa
    <div className="fixed inset-0 z-50 bg-[#2A6A90] flex flex-col items-center justify-start">
      {/* 1. Linha divisória de ponta a ponta */}
      <div className="w-full h-px bg-[#2A6A90] opacity-40"></div>

      {/* 2. Conteúdo central com animação no texto */}
      <div className="flex flex-col items-center pt-20">
        <h1 className="animate-text-fade text-center tracking-wider text-5xl font-bold text-white mt-60">
          SPOTTER
        </h1>
    
      </div>
    </div>
  );
}

export default Loading;