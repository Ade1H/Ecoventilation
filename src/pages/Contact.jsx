// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Kontakta oss</h1>
      <p className="text-center mb-5">
        Har du frågor eller vill boka en tjänst? Fyll i formuläret så återkommer vi så snart som möjligt.
      </p>

      <div className="row g-4">
        {/* Form */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4">
            <h4 className="mb-4">Skicka meddelande</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Namn</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-post</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Telefon</label>
                <input type="tel" id="phone" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">Tjänst</label>
                <select id="service" className="form-select">
                  <option value="">Välj tjänst</option>
                  <option value="ventilation">Ventilationsservice</option>
                  <option value="avlopp">Avloppsservice</option>
                  <option value="dammsugare">Centraldammsugare</option>
                  <option value="other">Annat</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Meddelande</label>
                <textarea id="message" rows="5" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Skicka meddelande</button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4 bg-light">
            <h4 className="mb-4">Kontaktinformation</h4>
            <p><strong>E-post:</strong> info@epventilation.se</p>
            <p><strong>Telefon:</strong> 08-123 456 78</p>
            <p><strong>Arbetstider:</strong> Mån-Fre: 8:00-17:00, Lör: 9:00-14:00, Sön: Stängt</p>
            <p><strong>Områden vi täcker:</strong> Hela Stockholms län och omnejd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
