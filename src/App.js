import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.jpg"; // Update to the correct path
import Gallery from "./Gallery";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component

function App() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);

  const scrollToSection = (id) => {
    console.log(`Scrolling to section: ${id}`);
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with ID ${id} not found`);
      return;
    }
    const headerOffset = headerRef.current.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
    setAccommodationOpen(false);
    setDiningOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <header className="App-header" ref={headerRef}>
          <img src={logo} className="App-logo" alt="logo" />
          <nav className={`App-nav ${menuOpen ? "open" : ""}`}>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => setAccommodationOpen(!accommodationOpen)}
              >
                Accommodation
              </button>
              {accommodationOpen && (
                <div className="dropdown-content">
                  <Link
                    to="/#VillaLaFornace"
                    className="dropdown-link"
                    onClick={scrollToSection.bind(this, "VillaLaFornace")}
                  >
                    Villa La Fornace
                  </Link>
                  <Link
                    to="/#LocandaDelGlicine"
                    className="dropdown-link"
                    onClick={scrollToSection.bind(this, "LocandaDelGlicine")}
                  >
                    Locanda del Glicine boutique hotel
                  </Link>
                  <Link
                    to="/#VillaPieveVecchia"
                    className="dropdown-link"
                    onClick={scrollToSection.bind(this, "VillaPieveVecchia")}
                  >
                    Villa Pieve Vecchia
                  </Link>
                </div>
              )}
            </div>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => setDiningOpen(!diningOpen)}
              >
                Dining
              </button>
              {diningOpen && (
                <div className="dropdown-content">
                  <Link
                    to="/#OsteriaLaRimessa"
                    className="dropdown-link"
                    onClick={scrollToSection.bind(this, "OsteriaLaRimessa")}
                  >
                    Osteria la Rimessa
                  </Link>
                  <Link
                    to="/#RistoranteIlGlicine"
                    className="dropdown-link"
                    onClick={scrollToSection.bind(this, "RistoranteIlGlicine")}
                  >
                    Ristorante del Glicine
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <button
            className="book-now"
            onClick={() => scrollToSection("ContactUs")}
          >
            Book Now
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
