import "../assets/css/Hours.css";

const Hours = () => {
  const schedule = [
    { day: "Monday - Tuesday", time: "Closed", closed: true },
    { day: "Wednesday - Thursday", time: "09:00 AM - 10:00 PM", closed: false },
    { day: "Friday", time: "09:00 AM - 11:00 PM", closed: false },
    { day: "Saturday", time: "10:00 AM - 11:30 PM", closed: false },
    { day: "Sunday", time: "11:00 AM - 09:00 PM", closed: false },
  ];

  return (
    <section className="hours-section">
      <div className="hours-heading">
        <span>Opening Hours</span>
        <h2>
          We're Open <b>For You</b>
        </h2>
        <div className="hours-underline"></div>
      </div>

      <div className="hours-container">
        <div className="hours-card hours-schedule-card">
          {schedule.map((item, index) => (
            <div className="hours-row" key={index}>
              <div className="hours-day">
                <span className="hours-icon">📅</span>
                {item.day}
              </div>

              <div
                className={`hours-time ${
                  item.closed ? "hours-closed" : "hours-open"
                }`}
              >
                <span className="hours-dot"></span>
                {item.time}
              </div>
            </div>
          ))}
        </div>

        <div className="hours-card hours-order-card">
          <div className="hours-order-icon">🚚</div>
          <h3>Order Online</h3>
          <p>Get hot food delivered in 25 minutes</p>
          <button className="hours-order-button">Order Now ?</button>
        </div>

        <div className="hours-card hours-contact-card">
          <div className="hours-contact-row hours-contact-title">
            <span className="hours-icon">📍</span>
            <strong>Find Us</strong>
          </div>

          <div className="hours-contact-row">
            <div>
              <span className="hours-icon">📍</span>
              Address
            </div>
            <span>42 Flavor Street, NY</span>
          </div>

          <div className="hours-contact-row">
            <div>
              <span className="hours-icon">📞</span>
              Phone
            </div>
            <span>+1 (800) 123-4567</span>
          </div>

          <div className="hours-contact-row">
            <div>
              <span className="hours-icon">✉️</span>
              Email
            </div>
            <span>hello@sarabfood.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;