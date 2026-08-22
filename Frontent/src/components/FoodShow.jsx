import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/FoodShow.css";

const FoodShow = () => {
  const [mydata, setMydata] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const Loaddata = async () => {
    const api = "http://127.0.0.1:8000/foodshow/";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    Loaddata();
  }, []);

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((e) => (e === 0 ? mydata.length - 1 : e - 1));
  };

  const showNext = () => {
    setActiveIndex((e) => (e === mydata.length - 1 ? 0 : e + 1));
  };

  const ans = mydata.map((key, index) => {
    return (
      <div
        className="showcase-item"
        key={key.id}
        onClick={() => openModal(index)}
      >
        <img src={key.Image} alt={key.Name} />
      </div>
    );
  });

  return (
    <section className="showcase-section">
      <div className="showcase-heading">
        <span>Food Showcase</span>
        <h2>
          Let's See Our <b>Fast Food</b>
        </h2>
      </div>

      <div className="showcase-grid">{ans}</div>

      {activeIndex !== null && mydata[activeIndex] && (
        <div className="showcase-modal-overlay" onClick={closeModal}>
          <div
            className="showcase-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={mydata[activeIndex].Image}
              alt={mydata[activeIndex].Name}
              className="showcase-modal-img"
            />

            <h3 className="showcase-modal-title">{mydata[activeIndex].Name}</h3>

            <p className="showcase-modal-desc">
              {mydata[activeIndex].Description}
            </p>

            <div className="showcase-modal-nav">
              <button onClick={showPrev}>‹ Prev</button>
              <button className="showcase-next-button" onClick={showNext}>
                Next ›
              </button>
            </div>

            <button className="showcase-modal-close" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodShow;
