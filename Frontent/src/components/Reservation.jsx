import { useState } from "react";
import axios from "axios";
import "../assets/css/Reservation.css";

const Reservation = () => {
  const [mydata, setMydata] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Guests: "1 Person",
    Date: "",
    Time: "09:00 AM",
    SpecialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setMydata({ ...mydata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = "http://127.0.0.1:8000/reservations/";
    await axios.post(api, mydata);

    setSubmitted(true);
    setMydata({
      Name: "",
      Phone: "",
      Email: "",
      Guests: "1 Person",
      Date: "",
      Time: "09:00 AM",
      SpecialRequests: "",
    });
  };

  return (
    <section className="reservation-section">
      <div className="reservation-heading">
        <span>Book a Table</span>
        <h2>
          Make a <b>Reservation</b>
        </h2>
        <div className="reservation-underline"></div>
        <p>
          Reserve your table for a memorable dining experience. We recommend
          booking 24 hours in advance for weekend evenings.
        </p>
      </div>

      <div className="reservation-container">
        <div className="reservation-contact-card">
          <h3>Contact Info</h3>
          <p>We're happy to help you plan the perfect dining experience.</p>

          <div className="reservation-contact-item">
            <div className="reservation-contact-icon">🕐</div>
            <div>
              <strong>OPENING HOURS</strong>
              <span>Wed - Sun, 9 AM - 11 PM</span>
            </div>
          </div>

          <div className="reservation-contact-item">
            <div className="reservation-contact-icon">📞</div>
            <div>
              <strong>CALL FOR BOOKING</strong>
              <span>+1 (800) 123-4567</span>
            </div>
          </div>

          <div className="reservation-contact-item">
            <div className="reservation-contact-icon">👥</div>
            <div>
              <strong>GROUP DINING</strong>
              <span>Special menus for 10+ guests</span>
            </div>
          </div>

          <div className="reservation-contact-item">
            <div className="reservation-contact-icon">📍</div>
            <div>
              <strong>LOCATION</strong>
              <span>42 Flavor Street, NY</span>
            </div>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="reservation-success">
              ✅ Request received! Check your email for confirmation.
            </div>
          )}

          <div className="reservation-row">
            <div className="reservation-field">
              <label>Full Name *</label>
              <input
                type="text"
                name="Name"
                placeholder="John Doe"
                value={mydata.Name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-field">
              <label>Phone Number *</label>
              <input
                type="text"
                name="Phone"
                placeholder="+1 (800) 000-0000"
                value={mydata.Phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="reservation-row">
            <div className="reservation-field">
              <label>Email Address *</label>
              <input
                type="email"
                name="Email"
                placeholder="you@email.com"
                value={mydata.Email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-field">
              <label>Number of Guests *</label>
              <select name="Guests" value={mydata.Guests} onChange={handleChange}>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>
          </div>

          <div className="reservation-row">
            <div className="reservation-field">
              <label>Date *</label>
              <input
                type="date"
                name="Date"
                value={mydata.Date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-field">
              <label>Time *</label>
              <select name="Time" value={mydata.Time} onChange={handleChange}>
                <option>09:00 AM</option>
                <option>12:00 PM</option>
                <option>03:00 PM</option>
                <option>06:00 PM</option>
                <option>09:00 PM</option>
              </select>
            </div>
          </div>

          <div className="reservation-field">
            <label>Special Requests</label>
            <textarea
              name="SpecialRequests"
              placeholder="Allergies, dietary needs, special occasions..."
              value={mydata.SpecialRequests}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="reservation-submit-button">
            📅 Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;