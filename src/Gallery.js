import React, { useState } from 'react';
import './Gallery.css';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const villaLaFornacaImages = require.context('./Villa La Fornaca', true);
const villaPieveVecchiaImages = require.context('./Villa Pieve Vecchia', true);
const locandaDelGlicineImages = require.context('./Locanda del Glicine boutique hotel', true);
const osteriaLaRimessaImages = require.context('./Osteria La Rimessa', true);
const ristoranteIlGlicineImages = require.context('./Ristorante il Glicine', true);

function Gallery() {
  const sections = [
    { id: 'VillaLaFornace', title: 'Villa La Fornace', images: villaLaFornacaImages },
    { id: 'VillaPieveVecchia', title: 'Villa Pieve Vecchia', images: villaPieveVecchiaImages },
    { id: 'LocandaDelGlicine', title: 'Locanda del Glicine boutique hotel', images: locandaDelGlicineImages },
    { id: 'OsteriaLaRimessa', title: 'Osteria la Rimessa', images: osteriaLaRimessaImages },
    { id: 'RistoranteIlGlicine', title: 'Ristorante il Glicine', images: ristoranteIlGlicineImages }
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const openLightbox = (sectionIndex, imageIndex) => {
    setCurrentSection(sectionIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const previousImage = () => {
    const sectionImages = sections[currentSection].images.keys();
    setCurrentImageIndex((currentImageIndex - 1 + sectionImages.length) % sectionImages.length);
  };

  const nextImage = () => {
    const sectionImages = sections[currentSection].images.keys();
    setCurrentImageIndex((currentImageIndex + 1) % sectionImages.length);
  };

  const renderImages = (sectionIndex, images) => {
    return images.keys().map((image, index) => (
      <img
        src={images(image)}
        alt={`Gallery-${index}`}
        key={index}
        onClick={() => openLightbox(sectionIndex, index)}
      />
    ));
  };

  const getImageSrc = (sectionIndex, imageIndex) => {
    const images = sections[sectionIndex].images;
    const imageKeys = images.keys();
    return images(imageKeys[imageIndex]);
  };

  return (
    <div className="Gallery">
      <h2 className="Gallery-title">Gallery</h2>
      {sections.map((section, sectionIndex) => (
        <section className="Gallery-section" id={section.id} key={section.id}>
          <h2 className="Gallery-section-title">{section.title}</h2>
          <div className="Gallery-images">
            {renderImages(sectionIndex, section.images)}
          </div>
        </section>
      ))}
      {lightboxOpen && (
        <div className="lightbox">
          <FaTimes className="close" onClick={closeLightbox} />
          <FaArrowLeft className="arrow arrow-left" onClick={previousImage} />
          <img src={getImageSrc(currentSection, currentImageIndex)} alt="Current" />
          <FaArrowRight className="arrow arrow-right" onClick={nextImage} />
        </div>
      )}
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
