import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.jpg"; // Update to the correct path
import Gallery from "./Gallery";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
import ServerAPI from "./ServerAPI";

function App() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    checkIn: "",
    checkOut: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        console.log("Submitting form with data:", formData);
        await ServerAPI.post("/setup_new_client", {
          name: formData.name,
          business: formData.business,
          check_in_date: formData.checkIn,
          check_out_date: formData.checkOut,
          email: formData.email,
          phone_number: formData.phone,
        });
        setFormSubmitted(true);
      } catch (error) {
        console.error("Error submitting form", error);
      }
    } else {
      console.log("Form validation errors:", errors);
    }
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
          <button className="book-now" onClick={() => setBookingOpen(true)}>
            Book Now
          </button>
        </header>
        {bookingOpen && (
          <div className="booking-popup">
            <div className="booking-popup-content">
              <button
                className="close-popup"
                onClick={() => setBookingOpen(false)}
              >
                ×
              </button>
              {!formSubmitted ? (
                <>
                  <h2>Book Now</h2>
                  <form onSubmit={handleFormSubmit}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={formErrors.name ? "error" : ""}
                      />
                      {formErrors.name && (
                        <span className="error-message">{formErrors.name}</span>
                      )}
                    </label>
                    <label>
                      Business:
                      <select
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        className={formErrors.business ? "error" : ""}
                      >
                        <option value="">Select...</option>
                        <option value="Villa La Fornace">
                          Villa La Fornace
                        </option>
                        <option value="Locanda del Glicine boutique hotel">
                          Locanda del Glicine boutique hotel
                        </option>
                        <option value="Villa Pieve Vecchia">
                          Villa Pieve Vecchia
                        </option>
                        <option value="Osteria la Rimessa">
                          Osteria la Rimessa
                        </option>
                        <option value="Ristorante del Glicine">
                          Ristorante del Glicine
                        </option>
                        <option value="App. 7">App. 7</option>
                        <option value="Room 8">Room 8</option>
                        <option value="App. 9">App. 9</option>
                      </select>
                      {formErrors.business && (
                        <span className="error-message">
                          {formErrors.business}
                        </span>
                      )}
                    </label>
                    <label>
                      Check In:
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className={formErrors.checkIn ? "error" : ""}
                      />
                      {formErrors.checkIn && (
                        <span className="error-message">
                          {formErrors.checkIn}
                        </span>
                      )}
                    </label>
                    <label>
                      Check Out:
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className={formErrors.checkOut ? "error" : ""}
                      />
                      {formErrors.checkOut && (
                        <span className="error-message">
                          {formErrors.checkOut}
                        </span>
                      )}
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? "error" : ""}
                      />
                      {formErrors.email && (
                        <span className="error-message">
                          {formErrors.email}
                        </span>
                      )}
                    </label>
                    <label>
                      Phone:
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={formErrors.phone ? "error" : ""}
                      />
                      {formErrors.phone && (
                        <span className="error-message">
                          {formErrors.phone}
                        </span>
                      )}
                    </label>
                    <button type="submit">Send</button>
                  </form>
                </>
              ) : (
                <div className="thank-you-message">
                  <p>Hi {formData.name}!</p>
                  <p>
                    Thank you for booking with us, we will contact you soon to
                    verify your booking.
                  </p>
                  <p>See you soon 😊</p>
                </div>
              )}
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
