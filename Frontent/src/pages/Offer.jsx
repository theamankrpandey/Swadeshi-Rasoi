import { useEffect, useState } from "react";
import "../assets/css/Offer.css";

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 31,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <section className="offer-section">
      <div className="offer-left">
        <span className="offer-badge">⚡ Limited Time Offer</span>

        <h2 className="offer-heading">
          Get 30% Off
          <br />
          Our Signature
          <br />
          <span>Burger</span> Meal
        </h2>

        <p className="offer-text">
          Don't miss our weekend special - grab our award-winning
          signature burger combo with loaded fries and a premium shake
          at an unbeatable price.
        </p>

        <div className="offer-timer">
          <div className="offer-timer-box">
            <strong>{pad(timeLeft.hours)}</strong>
            <small>Hours</small>
          </div>
          <div className="offer-timer-box">
            <strong>{pad(timeLeft.minutes)}</strong>
            <small>Minutes</small>
          </div>
          <div className="offer-timer-box">
            <strong>{pad(timeLeft.seconds)}</strong>
            <small>Seconds</small>
          </div>
        </div>

        <button className="offer-cta-button">🛒 Grab the Deal</button>
      </div>

      <div className="offer-right">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=600&fit=crop"
          alt="Signature Burger Meal"
        />

        <div className="offer-price-badge">
          <small>$24.99</small>
          <strong>$17.49</strong>
        </div>
      </div>
    </section>
  );
};

export default Offer;