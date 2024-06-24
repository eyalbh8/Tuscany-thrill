import React from 'react';
import './Gallery.css';

const images = require.context('./assets', true);
const imageList = images.keys().map(image => images(image));

function Gallery() {
  const sections = [
    { id: 'VillaLaFornace', title: 'Villa La Fornace' },
    { id: 'VillaPieveVecchia', title: 'Villa Pieve Vecchia' },
    { id: 'LocandaDelGlicine', title: 'Locanda del Glicine boutique hotel' },
    { id: 'OsteriaLaRimessa', title: 'Osteria la Rimessa' },
    { id: 'RistoranteIlGlicine', title: 'Ristorante il Glicine' }
  ];

  const renderImages = () => {
    return imageList.slice(0, 20).map((image, index) => (
      <img src={image} alt={`Gallery-${index}`} key={index} />
    ));
  };

  return (
    <div className="Gallery">
      <h2 className="Gallery-title">Gallery</h2>
      {sections.map(section => (
        <section className="Gallery-section" id={section.id} key={section.id}>
          <h2 className="Gallery-section-title">{section.title}</h2>
          <div className="Gallery-images">
            {renderImages()}
          </div>
        </section>
      ))}
      <section className="App-section" id="ContactUs">
        <h2>Feel free to contact us anytime!</h2>
        <div className="contact-info">
          <a href="https://wa.me/393892388287?text=Ciao!%20I%20want%20to%20come%20to%20your%20restaurant%20%F0%9F%98%8A" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
          </a>
          <a href="tel:+393892388287" className="icon-link">
            <span role="img" aria-label="Phone" className="phone-icon">📞</span>
          </a>
          <a href="mailto:TuscanyThrill@gmail.com" className="icon-link">
            <span role="img" aria-label="Email" className="email-icon">📧</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Gallery;