import React, { useRef, useState } from 'react';
import './App.css';
import logo from './logo.jpg'; // Make sure your logo.jpg is in the src folder

function App() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const headerOffset = headerRef.current.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className={`App-nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('VillaLaFornace')}>Villa La Fornace</button>
          <button onClick={() => scrollToSection('VillaPieveVecchia')}>Villa Pieve Vecchia</button>
          <button onClick={() => scrollToSection('LocandaDelGlicine')}>Locanda del Glicine</button>
          <button onClick={() => scrollToSection('App7')}>App. 7</button>
          <button onClick={() => scrollToSection('App8')}>App. 8</button>
          <button onClick={() => scrollToSection('LaRimessa')}>La Rimessa</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </header>
      <main className="App-main">
        <section className="App-section" id="AboutUs">
          <h2>About Us</h2>
          <p>Information about the company.</p>
        </section>
        <section className="App-section" id="VillaLaFornace">
          <h2>Villa La Fornace</h2>
          <p>Description of Villa La Fornace. This is an amazing villa with great amenities and beautiful views. Perfect for a relaxing vacation. Enjoy the luxurious interiors and the serene surroundings.</p>
          <div className="App-images">
            <img src="https://via.placeholder.com/150" alt="VillaLaFornace-1" />
            <img src="https://via.placeholder.com/150" alt="VillaLaFornace-2" />
            <img src="https://via.placeholder.com/150" alt="VillaLaFornace-3" />
            <img src="https://via.placeholder.com/150" alt="VillaLaFornace-4" />
            <img src="https://via.placeholder.com/150" alt="VillaLaFornace-5" />
            <img src="https://via.placeholder.com/150" alt="VillaLaFornace-6" />
          </div>
        </section>
        <section className="App-section" id="VillaPieveVecchia">
          <h2>Villa Pieve Vecchia</h2>
          <p>Description of Villa Pieve Vecchia. This villa offers modern comforts and a great location. Enjoy the spacious rooms, the private pool, and the stunning architecture. Ideal for families and groups.</p>
          <div className="App-images">
            <img src="https://via.placeholder.com/150" alt="VillaPieveVecchia-1" />
            <img src="https://via.placeholder.com/150" alt="VillaPieveVecchia-2" />
            <img src="https://via.placeholder.com/150" alt="VillaPieveVecchia-3" />
            <img src="https://via.placeholder.com/150" alt="VillaPieveVecchia-4" />
            <img src="https://via.placeholder.com/150" alt="VillaPieveVecchia-5" />
            <img src="https://via.placeholder.com/150" alt="VillaPieveVecchia-6" />
          </div>
        </section>
        <section className="App-section" id="LocandaDelGlicine">
          <h2>Locanda del Glicine</h2>
          <p>Description of Locanda del Glicine. Our hotel offers top-notch services, comfortable rooms, and excellent dining options. Perfect for business trips and leisure stays. Experience unparalleled hospitality.</p>
          <div className="App-images">
            <img src="https://via.placeholder.com/150" alt="LocandaDelGlicine-1" />
            <img src="https://via.placeholder.com/150" alt="LocandaDelGlicine-2" />
            <img src="https://via.placeholder.com/150" alt="LocandaDelGlicine-3" />
            <img src="https://via.placeholder.com/150" alt="LocandaDelGlicine-4" />
            <img src="https://via.placeholder.com/150" alt="LocandaDelGlicine-5" />
            <img src="https://via.placeholder.com/150" alt="LocandaDelGlicine-6" />
          </div>
        </section>
        <section className="App-section" id="App7">
          <h2>App. 7</h2>
          <p>Description of App. 7. This apartment is perfect for city living, offering modern amenities and a convenient location. Enjoy the stylish design and the vibrant neighborhood.</p>
          <div className="App-images">
            <img src="https://via.placeholder.com/150" alt="App7-1" />
            <img src="https://via.placeholder.com/150" alt="App7-2" />
            <img src="https://via.placeholder.com/150" alt="App7-3" />
            <img src="https://via.placeholder.com/150" alt="App7-4" />
            <img src="https://via.placeholder.com/150" alt="App7-5" />
            <img src="https://via.placeholder.com/150" alt="App7-6" />
          </div>
        </section>
        <section className="App-section" id="App8">
          <h2>App. 8</h2>
          <p>Description of App. 8. Enjoy a comfortable stay in this well-equipped apartment. Ideal for short and long-term stays, with easy access to local attractions and public transport.</p>
          <div className="App-images">
            <img src="https://via.placeholder.com/150" alt="App8-1" />
            <img src="https://via.placeholder.com/150" alt="App8-2" />
            <img src="https://via.placeholder.com/150" alt="App8-3" />
            <img src="https://via.placeholder.com/150" alt="App8-4" />
            <img src="https://via.placeholder.com/150" alt="App8-5" />
            <img src="https://via.placeholder.com/150" alt="App8-6" />
          </div>
        </section>
        <section className="App-section" id="LaRimessa">
          <h2>La Rimessa</h2>
          <p>Description of La Rimessa. A charming location offering unique experiences and wonderful services. Perfect for events and special occasions, with beautiful surroundings and facilities.</p>
          <div className="App-images">
            <img src="https://via.placeholder.com/150" alt="LaRimessa-1" />
            <img src="https://via.placeholder.com/150" alt="LaRimessa-2" />
            <img src="https://via.placeholder.com/150" alt="LaRimessa-3" />
            <img src="https://via.placeholder.com/150" alt="LaRimessa-4" />
            <img src="https://via.placeholder.com/150" alt="LaRimessa-5" />
            <img src="https://via.placeholder.com/150" alt="LaRimessa-6" />
          </div>
        </section>
        <section className="App-section" id="ContactUs">
          <h2>Contact Us</h2>
          <p>Contact information.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
