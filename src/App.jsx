import React from 'react';
import tituloImg from './assets/disenos-johan/titulo.webp';
import estoEsParaImg from './assets/disenos-johan/cuadro-esto-es-para-ti-1.webp';
import queAprenderasImg from './assets/disenos-johan/que-aprenderas.webp';
import estoEsPara2Img from './assets/disenos-johan/cuadro-esto-es-para-2.webp';
import VslPlayer from './VslPlayer';
import workshopImg from './assets/disenos-johan/workshop-convierte-1.0-portada.webp';
import fechaEventoImg from './assets/disenos-johan/fecha del evento web.webp';
import costoImg from './assets/disenos-johan/costo del workshop.webp';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      {/* Background elements */}
      <div className="glow-blob top-left"></div>
      <div className="glow-blob bottom-right"></div>

      <header className="hero-section">
        <img src={tituloImg} className="main-title-img" alt="El Futuro de tu Negocio" />
        <div className="video-prompt-container">
          <p className="prompt-small">¿CÓMO SABER SI ESTO ES PARA TI?</p>
          <p className="prompt-large">MIRA EL <span className="text-red">VÍDEO</span> DE ABAJO</p>
        </div>
      </header>

      <section className="vsl-section">
        <div className="video-container" style={{ padding: 0, overflow: 'visible', background: 'transparent', boxShadow: 'none', border: 'none' }}>
          <VslPlayer videoId="001d866c-35c8-4d12-acef-e512d0629dde" />
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
        <img src={estoEsPara2Img} alt="Esto es para ti 2" className="info-image" />
      </section>

      <section className="info-image-section">
        <img src={queAprenderasImg} alt="Qué aprenderás" className="info-image" />
      </section>

      <section className="info-image-section">
        <img src={workshopImg} alt="Workshop Convierte" className="info-image" />
      </section>

      <section className="info-image-section">
        <img src={fechaEventoImg} alt="Fecha del Evento" className="info-image" />
      </section>

      <section className="info-image-section">
        <img src={costoImg} alt="Costo del Workshop" className="info-image" />
      </section>
    </div>
  );
}

export default App;
