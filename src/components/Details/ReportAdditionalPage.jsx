import React from 'react';

function ReportAdditionalPage() {
  const noiseOptions = [
    {
      id: 'quiet',
      label: 'Silenciosa',
      selected: false,
      icon: (
        <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ),
    },
    {
      id: 'normal',
      label: 'Normal',
      selected: true,
      icon: (
        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
          <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
        </svg>
      ),
    },
    {
      id: 'noisy',
      label: 'Barulhenta',
      selected: false,
      icon: (
        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
        </svg>
      ),
    },
  ];

  const outletOptions = [
    {
      id: 'yes',
      label: 'Sim',
      selected: true,
      icon: (
        <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'no',
      label: 'Não',
      selected: false,
      icon: (
        <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      id: 'unknown',
      label: 'Não sei',
      selected: false,
      icon: <span className="text-2xl font-bold text-black">?</span>,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 flex items-end justify-center">
      <div className="w-full max-w-sm bg-white rounded-t-3xl p-6 shadow-lg flex flex-col items-center">
        {/* Barra superior */}
        <div className="w-12 h-1 bg-gray-400 rounded-full mb-5" />

        {/* Cartão de sucesso no topo */}
        <div className="w-full bg-[#F5F7FA] rounded-2xl p-4 mb-7 relative flex flex-col items-center text-center">
          <div className="absolute top-4 left-4 text-gray-800 p-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <p className="text-[#3A7CA5] font-semibold text-base leading-snug mt-3">
            Feedback registado
            <br />
            com sucesso
          </p>

          <svg className="w-6 h-6 text-gray-500 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Pergunta 1: Ruído */}
        <div className="w-full mb-7">
          <h2 className="text-center font-bold text-gray-900 text-base mb-5">
            Quão barulhenta está a sala?
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {noiseOptions.map((option) => (
              <div key={option.id} className="flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 rounded-full bg-[#E2E2E2] flex items-center justify-center">
                  {option.icon}
                  {option.selected && (
                    <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#2A85D0] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-800">{option.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pergunta 2: Tomadas */}
        <div className="w-full mb-4">
          <h2 className="text-center font-bold text-gray-900 text-base mb-5">
            A sala tem tomadas?
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {outletOptions.map((option) => (
              <div key={option.id} className="flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 rounded-full bg-[#E2E2E2] flex items-center justify-center">
                  {option.icon}
                  {option.selected && (
                    <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#2A85D0] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-800">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportAdditionalPage;