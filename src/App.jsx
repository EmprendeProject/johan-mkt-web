import React from 'react';
import tituloImg from './assets/disenos-johan/titulo.webp';
import estoEsParaImg from './assets/disenos-johan/cuadro-esto-es-para-ti-1.webp';
import estoEsPara2Img from './assets/disenos-johan/cuadro-esto-es-para-2.webp';
import tituloQueAprenderasImg from './assets/disenos-johan/título que aprenderás.png';
import cajasQueAprenderasImg from './assets/disenos-johan/que aprenderás cajas de info.png';
import VslPlayer from './VslPlayer';
import fechaEventoImg from './assets/disenos-johan/fecha del evento web.webp';
import listoParaAsistirImg from './assets/disenos-johan/listo para asistir.png';
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
          <p className="prompt-large">MIRA EL <span className="text-red">VÍDEO</span> DE ABAJO.</p>
        </div>
      </header>

      <section className="vsl-section">
        <div className="video-container" style={{ padding: 0, overflow: 'visible', background: 'transparent', boxShadow: 'none', border: 'none' }}>
          <VslPlayer videoId="001d866c-35c8-4d12-acef-e512d0629dde" />
        </div>
      </section>

      <section className="cta-section">
        <a href="https://wa.link/7etfay" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ textDecoration: 'none' }}>
          <span>COMPRAR ENTRADA</span>
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      <section className="info-image-section">
        <img src={estoEsParaImg} alt="Esto es para ti" className="info-image" style={{ position: 'relative', left: '4%' }} />
      </section>

      <section className="info-image-section" style={{ marginTop: '-4rem' }}>
        <img src={estoEsPara2Img} alt="Esto es para ti 2" className="info-image" style={{ position: 'relative', right: '16%', transform: 'scale(1.25)', transformOrigin: 'top center' }} />
      </section>

      <section className="info-image-section" style={{ marginTop: '8rem', marginBottom: 0 }}>
        <img src={tituloQueAprenderasImg} alt="Título Qué Aprenderás" className="info-image" />
      </section>

      <section className="info-image-section" style={{ marginTop: 0 }}>
        <img src={cajasQueAprenderasImg} alt="Qué Aprenderás Cajas de Info" className="info-image" />
      </section>

      <section className="info-image-section">
        <img src={fechaEventoImg} alt="Fecha del Evento" className="info-image" />
      </section>

      <section className="info-image-section" style={{ marginBottom: 0 }}>
        <img src={listoParaAsistirImg} alt="Estás Listo Para Asistir" className="info-image" />
      </section>

      <section className="info-image-section" style={{ marginTop: 0 }}>
        <img src={costoImg} alt="Costo del Workshop" className="info-image" />
      </section>
    </div>
  );
}

export default App;
