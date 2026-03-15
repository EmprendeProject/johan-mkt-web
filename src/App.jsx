import React from 'react';
import tituloImg from './assets/diseños johan/titulo.webp';
import estoEsParaImg from './assets/diseños johan/cuadro esto es para ti 1.webp';
import queAprenderasImg from './assets/diseños johan/que aprenderas.webp';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      {/* Background elements */}
      <div className="glow-blob top-left"></div>
      <div className="glow-blob bottom-right"></div>

      <header className="hero-section">
        <img src={tituloImg} className="main-title-img" alt="El Futuro de tu Negocio" />
        <p className="subtitle">
          No se si quieres poner una descripcion aqui jejee
        </p>
      </header>

      <section className="vsl-section">
        <div className="video-container">
          <iframe 
            src="https://player.vimeo.com/video/1173740313?h=0&title=0&byline=0&portrait=0" 
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Video Sales Letter"
          ></iframe>
        </div>
      </section>

      <section className="cta-section">
        <button className="cta-button">
          Comenzar Ahora
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>

      <section className="info-image-section">
        <img src={estoEsParaImg} alt="Esto es para ti" className="info-image" />
      </section>

      <section className="info-image-section">
        <img src={queAprenderasImg} alt="Qué aprenderás" className="info-image" />
      </section>
    </div>
  );
}

export default App;
