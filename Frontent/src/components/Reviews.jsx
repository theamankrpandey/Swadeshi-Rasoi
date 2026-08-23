import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/Reviews.css";

const Reviews = () => {
  const [mydata, setMydata] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const Loaddata = async () => {
    const api = "http://127.0.0.1:8000/reviews/";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    Loaddata();
  }, []);

  
  useEffect(() => {
    if (mydata.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((e) => (e === mydata.length - 1 ? 0 : e + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [mydata]);

  const goToSlide = (index) => setActiveIndex(index);

  
  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    if (mydata.length > 0) {
      visibleCards.push(mydata[(activeIndex + i) % mydata.length]);
    }
  }

  const ans = visibleCards.map((key, i) => {
    return (
      <div className="review-card" key={key.id + "-" + i}>
        <div className="review-top">
          <div className="review-stars">
            {"★".repeat(key.Rating)}
          </div>
          <span className="review-quote">”</span>
        </div>

        <p className="review-text">{key.Description}</p>

        <div className="review-user">
          <img src={key.Image} alt={key.Name} />
          <div>
            <h4>{key.Name}</h4>
            <small>{key.Role}</small>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="review-section">
      <div className="review-heading">
        <span>What People Say</span>
        <h2>
          Our Customers <b>Feedback</b>
        </h2>
        <div className="review-underline"></div>
      </div>

      <div className="review-container">{ans}</div>

      <div className="review-dots">
        {mydata.map((key, index) => (
          <span
            key={key.id}
            className={`review-dot ${
              index === activeIndex ? "review-dot-active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Reviews;