import React, { useRef, useState } from 'react';
import './App.css';
import logo from './assets/logo.jpg'; // Ensure your logo.jpg is in the src folder
import ServerAPI from './ServerAPI'; // Import the ServerAPI

function App() {
  const images = require.context('./assets', true);
  const imageList = images.keys().map(image => images(image));
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    checkIn: '',
    checkOut: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    setAccommodationOpen(false); // Close the accommodation dropdown after clicking
    setDiningOpen(false); // Close the dining dropdown after clicking
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
        errors[key] = 'This field is required';
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        console.log('Submitting form with data:', formData);
        await ServerAPI.post('/setup_new_client', {
          name: formData.name,
          business: formData.business,
          check_in_date: formData.checkIn,
          check_out_date: formData.checkOut,
          email: formData.email,
          phone_number: formData.phone,
        });
        setFormSubmitted(true);
        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form', error);
      }
    } else {
      console.log('Form validation errors:', errors);
    }
  };

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className={`App-nav ${menuOpen ? 'open' : ''}`}>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setAccommodationOpen(!accommodationOpen)}>Accommodation</button>
            {accommodationOpen && (
              <div className="dropdown-content">
                <button onClick={() => scrollToSection('VillaLaFornace')}>Villa La Fornace</button>
                <button onClick={() => scrollToSection('VillaPieveVecchia')}>Villa Pieve Vecchia</button>
                <button onClick={() => scrollToSection('LocandaDelGlicine')}>Locanda del Glicine boutique hotel</button>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setDiningOpen(!diningOpen)}>Dining</button>
            {diningOpen && (
              <div className="dropdown-content">
                <button onClick={() => scrollToSection('OsteriaLaRimessa')}>Osteria la Rimessa</button>
                <button onClick={() => scrollToSection('RistoranteIlGlicine')}>Ristorante il Glicine</button>
              </div>
            )}
          </div>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <button className="book-now" onClick={() => setBookingOpen(true)}>Book Now</button>
      </header>
      {bookingOpen && (
        <div className="booking-popup">
          <div className="booking-popup-content">
            <button className="close-popup" onClick={() => setBookingOpen(false)}>×</button>
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
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </label>
                  <label>
                    Business:
                    <select
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      className={formErrors.business ? 'error' : ''}
                    >
                      <option value="">Select...</option>
                      <option value="Villa La Fornace">Villa La Fornace</option>
                      <option value="Villa Pieve Vecchia">Villa Pieve Vecchia</option>
                      <option value="Locanda del Glicine boutique hotel">Locanda del Glicine boutique hotel</option>
                      <option value="App. 7">App. 7</option>
                      <option value="Room 8">Room 8</option>
                      <option value="App. 9">App. 9</option>
                    </select>
                    {formErrors.business && <span className="error-message">{formErrors.business}</span>}
                  </label>
                  <label>
                    Check In:
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className={formErrors.checkIn ? 'error' : ''}
                    />
                    {formErrors.checkIn && <span className="error-message">{formErrors.checkIn}</span>}
                  </label>
                  <label>
                    Check Out:
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className={formErrors.checkOut ? 'error' : ''}
                    />
                    {formErrors.checkOut && <span className="error-message">{formErrors.checkOut}</span>}
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </label>
                  <label>
                    Phone:
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? 'error' : ''}
                    />
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                  </label>
                  <button type="submit">Send</button>
                </form>
              </>
            ) : (
              <div className="thank-you-message">
                <p>Hi {formData.name}!</p>
                <p>Thank you for booking with us, we will contact you soon to verify your booking.</p>
                <p>See you soon 😊</p>
              </div>
            )}
          </div>
        </div>
      )}
      <main className="App-main">
        <section className="App-section" id="AboutUs">
          <h2>About Us</h2>
          <p>Located in the Maremma region of Tuscany, nestled between hills, nature, and archaeological sites, our company offers a variety of authentic places to sleep and dine. We aim to provide each guest with personalized attention, ensuring a relaxing and genuine vacation experience. Our accommodations and dining options reflect the true essence of Tuscan culture and hospitality. Our goal is to make every stay memorable and authentically Tuscan, giving guests the private attention and tranquility they deserve.</p>
        </section>
        <section className="App-section" id="VillaLaFornace">
          <h2>Villa La Fornace</h2>
          <p>This 17th-century villa offers an authentic yet pampering vacation experience, accommodating up to 10 guests in 5 double bedrooms. It features a snooker room, pool, spa, pizza oven, olive trees and a vast lawn. Guests can enjoy a private lake with kayaks, making it an ideal retreat for relaxation and fun. Located in an excellent area surrounded by a variety of activities.</p>
          <div className="App-images">
            <img src={imageList[6]} alt="VillaLaFornace-1" />
            <img src={imageList[8]} alt="VillaLaFornace-3" />
            <img src={imageList[9]} alt="VillaLaFornace-4" />
            <img src={imageList[10]} alt="VillaLaFornace-5" />
            <img src={imageList[7]} alt="VillaLaFornace-2" />
            <img src={imageList[11]} alt="VillaLaFornace-6" />
          </div>
          <p className="App-address">
            <a href="https://www.google.com/maps/search/?api=1&query=La+Fornace%2C+58042+Campagnatico+GR" target="_blank" rel="noopener noreferrer" className="navy-link">La Fornace, 58042 Campagnatico GR</a>
          </p>
        </section>
        <section className="App-section" id="VillaPieveVecchia">
          <h2>Villa Pieve Vecchia</h2>
          <p>This villa, originally built in 100 BC as a farmhouse, offers an authentic yet pampering design and accommodates up to 12 people. Surrounded by an archaeological site and olive trees, it features a private museum and a pool. The villa's excellent location is enhanced by a variety of nearby activities, making it a perfect vacation retreat.</p>
          <div className="App-images">
            <img src={imageList[6]} alt="VillaPieveVecchia-1" />
            <img src={imageList[6]} alt="VillaPieveVecchia-2" />
            <img src={imageList[6]} alt="VillaPieveVecchia-3" />
            <img src={imageList[6]} alt="VillaPieveVecchia-4" />
            <img src={imageList[6]} alt="VillaPieveVecchia-5" />
            <img src={imageList[6]} alt="VillaPieveVecchia-6" />
          </div>
          <p className="App-address">
            <a href="https://www.google.com/maps/search/?api=1&query=Localita%27+Pieve+Vecchia%2C+Campagnatico%2C+GR+58042" target="_blank" rel="noopener noreferrer" className="navy-link">Localita' Pieve Vecchia, Campagnatico, GR 58042</a>
          </p>
        </section>
        <section className="App-section" id="LocandaDelGlicine">
          <h2>Locanda del Glicine boutique hotel</h2>
          <p>This 17th-century boutique hotel, perched on a high hill above a Roman city, features a main building with 6 rooms for 2-5 guests. Additionally, there are 2 rooms nearby for up to 4 people and another room on a villa property with an archaeological site, museum, pool, and pizza oven. Located on the town's main piazza and has a restaurant, the hotel offers a unique blend of history and comfort.</p>
          <div className="App-images">
            <img src={imageList[6]} alt="LocandaDelGlicine-1" />
            <img src={imageList[6]} alt="LocandaDelGlicine-2" />
            <img src={imageList[6]} alt="LocandaDelGlicine-3" />
            <img src={imageList[6]} alt="LocandaDelGlicine-4" />
            <img src={imageList[6]} alt="LocandaDelGlicine-5" />
            <img src={imageList[6]} alt="LocandaDelGlicine-6" />
          </div>
          <p className="App-address">
            <a href="https://www.google.com/maps/search/?api=1&query=Piazza+Garibaldi%2C+1%2C+58042+Campagnatico+GR" target="_blank" rel="noopener noreferrer" className="navy-link">Piazza Garibaldi, 1, 58042 Campagnatico GR</a>
            <br />
            <a href="tel:+393892388287" className="navy-link phone-link">Borys - +393892388287</a>
          </p>
        </section>
        <section className="App-section" id="OsteriaLaRimessa">
          <h2>Osteria la Rimessa</h2>
          <p>Nestled in the beautiful 17th-century town of Montorsaio, this Tuscan restaurant offers both indoor and outdoor dining with panoramic views. Specializing in authentic Tuscan meat dishes, it also hosts private events, providing a genuine culinary experience in a charming historical setting. Enjoy traditional flavors while soaking in the breathtaking scenery of the Tuscan landscape.</p>
          <div className="App-images">
            <img src={imageList[0]} alt="OsteriaLaRimessa-1" />
            <img src={imageList[2]} alt="OsteriaLaRimessa-2" />
            <img src={imageList[1]} alt="OsteriaLaRimessa-3" />
            <img src={imageList[5]} alt="OsteriaLaRimessa-4" />
            <img src={imageList[4]} alt="OsteriaLaRimessa-5" />
            <img src={imageList[3]} alt="OsteriaLaRimessa-6" />
          </div>
          <p className="App-address">
            <a href="https://www.google.com/maps/search/?api=1&query=Via+Aiottola%2C+2%2C+58042+Montorsaio+GR" target="_blank" rel="noopener noreferrer" className="navy-link">Via Aiottola, 2, 58042 Montorsaio GR</a>
            <br />
            <a href="tel:+393892388287" className="navy-link phone-link">Borys - +393892388287</a>
          </p>
        </section>
        <section className="App-section" id="RistoranteIlGlicine">
          <h2>Ristorante il Glicine</h2>
          <p>Located in the beautiful town of Campagnatico, this Tuscan restaurant transforms from a casual rosticceria for lunch to an elegant dining venue in the evening. Offering both indoor and outdoor seating, it also hosts private events. It’s the perfect spot for a quick, high-quality lunch and an exquisite dining experience at night. Enjoy authentic Tuscan flavors in a charming setting.</p>
          <div className="App-images">
            <img src={imageList[6]} alt="RistoranteIlGlicine-1" />
            <img src={imageList[6]} alt="RistoranteIlGlicine-2" />
            <img src={imageList[6]} alt="RistoranteIlGlicine-3" />
            <img src={imageList[6]} alt="RistoranteIlGlicine-4" />
            <img src={imageList[6]} alt="RistoranteIlGlicine-5" />
            <img src={imageList[6]} alt="RistoranteIlGlicine-6" />
          </div>
          <p className="App-address">
            <a href="https://www.google.com/maps/search/?api=1&query=Piazza+Garibaldi%2C+1%2C+58042+Campagnatico+GR" target="_blank" rel="noopener noreferrer" className="navy-link">Piazza Garibaldi, 1, 58042 Campagnatico GR</a>
            <br />
            <a href="tel:+393892388287" className="navy-link phone-link">Borys - +393892388287</a>
          </p>
        </section>
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
      </main>
    </div>
  );
}

export default App;
