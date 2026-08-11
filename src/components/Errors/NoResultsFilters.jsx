function NoResultsFilters({onClear}) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full h-px bg-[#2A6A90] opacity-50 mt-10 mb-6"></div>

      <div className="flex flex-col items-center justify-start min-h-screen pt-4 p-8">
      <h1 className="text-3xl mb-12 mt-10 font-bold text-[#2A6A90] text-center">
        Sem resultados para filtros escolhidos
      </h1>
      
       <svg xmlns="http://www.w3.org/2000/svg" 
       height="80px"
        viewBox="0 -960 960 960" 
        width="80px" 
        fill="currentColor"
        className="text-[#2A6A90]"
        >
        <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm16.5 138.5Q301-343 276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420q-68 0-123.5 38.5Zm-32.5 270Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z"/>
       </svg>

      <h1 className="text-xl mb-12 mt-10 text-center">
        Experimente limpar os filtros de pesquisa e tente novamente.
      </h1>
      

      {/* Botão com flexbox para alinhar texto e ícone lado a lado */}
      <button 
        onClick={onClear}
        type="button" 
        className="bg-[#2A6A9066] rounded-full w-64 h-20  cursor-pointer flex items-center justify-center gap-3 px-4"
      >
        <span className="text-xl font-medium text-[#2A6A90]">
          Limpar Filtros
        </span>
         <svg xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 mt-1 text-[#2A6A90]"
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="currentColor">
            <path d="M477-135q-143 0-244-101T132-479.75q0-142.76 101-244.5Q334-826 477-826q91 0 160.39 36.72Q706.79-752.55 757-687v-139h72v291H537v-71h164q-39-56-94-90.5T477-731q-105.25 0-178.12 72.82-72.88 72.83-72.88 178Q226-375 298.88-302q72.89 73 178.15 73 77.97 0 144.47-45T716-393h97q-30 115-123.26 186.5Q596.49-135 477-135Z"/>
            </svg>
      </button>
    </div>
    </div>
  );
}

export default NoResultsFilters;