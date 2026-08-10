import errorIcon from "../../assets/error.svg";
import refreshIcon from "../../assets/refresh.svg";

function Error() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full h-px bg-[#2A6A90] opacity-50 mt-10 mb-6"></div>

      <div className="flex flex-col items-center justify-start min-h-screen pt-4 p-8">
      <h1 className="text-4xl mb-12 mt-10 font-bold text-[#2A6A90] text-center">
        Ocorreu um erro
      </h1>
      
       <svg xmlns="http://www.w3.org/2000/svg" 
       height="80px" 
       viewBox="0 -960 960 960" 
       width="96px" 
       fill="currentColor"
       className="text-[#2A6A90]"
       >
       <path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
       </svg>

      <h1 className="text-xl mb-12 mt-10 text-center">
        Algo correu mal do nosso lado, <br/> pedimos desculpa.
      </h1>
      

      {/* Botão com flexbox para alinhar texto e ícone lado a lado */}
      <button 
        type="button" 
        className="bg-[#2A6A9066] rounded-full w-64 h-20  cursor-pointer flex items-center justify-center gap-3 px-4"
      >
        <span className="text-xl font-medium text-[#2A6A90]">
          Tente Novamente
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

export default Error;