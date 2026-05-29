import React from 'react';
import { useLocation } from 'wouter';
import './galeria.css';

// Lista de fotos - Edite os nomes aqui conforme os seus arquivos
const fotosExpedicao = [
  { id: 1, url: '/Galeria/img01.jpeg', alt: 'Expedição 1' },
  { id: 2, url: '/Galeria/img02.jpeg', alt: 'Expedição 2' },
  { id: 3, url: '/Galeria/img03.jpeg', alt: 'Expedição 3' },
  { id: 4, url: '/Galeria/img04.jpeg', alt: 'Expedição 4' },
  { id: 5, url: '/Galeria/img05.jpeg', alt: 'Expedição 5' },
  { id: 6, url: '/Galeria/img06.jpeg', alt: 'Expedição 6' },
   { id: 7, url: '/Galeria/img07.jpeg', alt: 'Expedição 7' },
     { id: 9, url: '/Galeria/img09.jpeg', alt: 'Expedição 9' },
      { id: 10, url: '/Galeria/img10.jpeg', alt: 'Expedição 10' },
        { id: 12, url: '/Galeria/img12.jpeg', alt: 'Expedição 12' },
         { id: 13, url: '/Galeria/img13.jpeg', alt: 'Expedição 13' },
          { id: 14, url: '/Galeria/img14.jpeg', alt: 'Expedição 14' },
           { id: 15, url: '/Galeria/img15.jpeg', alt: 'Expedição 15' },
            { id: 16, url: '/Galeria/img16.jpeg', alt: 'Expedição 16' },
              { id: 18, url: '/Galeria/img18.jpeg', alt: 'Expedição 18' },
                { id: 20, url: '/Galeria/img20.jpeg', alt: 'Expedição 20' },
                 { id: 21, url: '/Galeria/img21.jpeg', alt: 'Expedição 21' },
                  { id: 22, url: '/Galeria/img22.jpeg', alt: 'Expedição 22' },
                   { id: 23, url: '/Galeria/img23.jpeg', alt: 'Expedição 23' },
                    { id: 24, url: '/Galeria/img24.jpeg', alt: 'Expedição 24' },
                     { id: 25, url: '/Galeria/img25.jpeg', alt: 'Expedição 25' },
                      { id: 26, url: '/Galeria/img26.jpeg', alt: 'Expedição 26' },
                          { id: 27, url: '/Galeria/img27.jpeg', alt: 'Expedição 27' },
                           { id: 28, url: '/Galeria/img28.jpeg', alt: 'Expedição 28' },
                                { id: 29, url: '/Galeria/img29.jpeg', alt: 'Expedição 29' },
                                { id: 30, url: '/Galeria/img30.jpeg', alt: 'Expedição 30' },
                                 { id: 31, url: '/Galeria/img31.jpeg', alt: 'Expedição 31' },
                                  { id: 32, url: '/Galeria/img32.jpeg', alt: 'Expedição 32' },
                                   { id: 33, url: '/Galeria/img33.jpeg', alt: 'Expedição 33' },
                                    { id: 34, url: '/Galeria/img34.jpeg', alt: 'Expedição 34' },
                                        { id: 35, url: '/Galeria/img35.jpeg', alt: 'Expedição 35' },
                                            { id: 36, url: '/Galeria/img36.jpeg', alt: 'Expedição 36' },
                                             { id: 37, url: '/Galeria/img37.jpeg', alt: 'Expedição 37' },
                                              { id: 38, url: '/Galeria/img38.jpeg', alt: 'Expedição 38' },
                                               { id: 39, url: '/Galeria/img39.jpeg', alt: 'Expedição 39' },
                                                    { id: 40, url: '/Galeria/img40.jpeg', alt: 'Expedição 40' },
                                                        { id: 41, url: '/Galeria/img41.jpeg', alt: 'Expedição 41' },
                                                                { id: 42, url: '/Galeria/img42.jpeg', alt: 'Expedição 42' }, 
                                                                    { id: 43, url: '/Galeria/img43.jpeg', alt: 'Expedição 43' }, 
                                                                            { id: 44, url: '/Galeria/img44.jpeg', alt: 'Expedição 44' },
                                                                                { id: 45, url: '/Galeria/img45.jpeg', alt: 'Expedição 45' }, 
                                                                                        { id: 46, url: '/Galeria/img46.jpeg', alt: 'Expedição 46' },
                                                                                                { id: 47, url: '/Galeria/img47.jpeg', alt: 'Expedição 47' },
                                                                                                        { id: 48, url: '/Galeria/img48.jpeg', alt: 'Expedição 48' },    
                                                                                                                { id: 49, url: '/Galeria/img49.jpeg', alt: 'Expedição 49' },    
                                                                                                                        { id: 50, url: '/Galeria/img50.jpeg', alt: 'Expedição 50' },
                                                                                                                            { id: 51, url: '/Galeria/img51.jpeg', alt: 'Expedição 51' }, 
                                                                                                                                { id: 52, url: '/Galeria/img52.jpeg', alt: 'Expedição 52' },
                                                                                                                                    { id: 53, url: '/Galeria/img53.jpeg', alt: 'Expedição 53' },
                                                                                                                                       
                                                                                                                                            { id: 57, url: '/Galeria/img57.jpeg', alt: 'Expedição 57' },
                                                                                                                                                { id: 56, url: '/Galeria/img56.jpeg', alt: 'Expedição 56' },  

                                                                                                                            
                                                                

                              
];


export function Galeria() {
  const [, navigate] = useLocation();

  return (

    <section className="galeria-container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="galeria-titulo">Galeria de Aventuras</h2>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Voltar
        </button>
      </div>
      <div className="galeria-grid">
        {fotosExpedicao.map((foto) => (
          <div key={foto.id} className="galeria-item">
            <img src={foto.url} alt={foto.alt} className="galeria-img" />
            <div className="galeria-overlay">
              <span></span>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
