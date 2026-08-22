import axios from "axios";
import "../assets/css/Menu.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlice";

const Menu = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const Loaddata = async () => {
    const api = "http://127.0.0.1:8000/items/";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    Loaddata();
  }, []);

  return (
    <section id="food-section" className="menu-section">
      <div className="menu-heading">
        <span>What's Cooking</span>
        <h2>
          Our Delicious <b>Menu</b>
        </h2>
      </div>

      <div className="menu-filters">
        <button className="menu-filter active">All</button>
        <button className="menu-filter">Burgers</button>
        <button className="menu-filter">Pizza</button>
        <button className="menu-filter">Chicken</button>
        <button className="menu-filter">Wraps</button>
        <button className="menu-filter">Desserts</button>
        <button className="menu-filter">Pasta</button>
      </div>

      <div className="menu-container">
        {mydata.map((item) => (
          <div className="menu-card" key={item.id}>
            <div className="menu-img-wrap">
              
                <span className={`menu-tag menu-tag-${item.TagType}`}>
                  ★ {item.Tag}
                </span>
              
              <span className="menu-heart">♡</span>
              <img src={item.Image} alt={item.Name} />
            </div>

            <div className="menu-card-body">
              <div className="menu-category">{item.Category}</div>
              <h4 className="menu-name">{item.Name}</h4>
              <p className="menu-desc">{item.Description}</p>

              <div className="menu-bottom">
                <div>
                  <span className="menu-price">₹{item.Price}</span>
                  {item.OldPrice && (
                    <span className="menu-old-price">₹{item.OldPrice}</span>
                  )}
                  <div className="menu-rating">★ ({item.Rating})</div>
                </div>

                <button
                  className="menu-add-button"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="menu-view-all-button"
        onClick={() => {
          document
            .getElementById("home-section")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        ▦ View Full Menu
      </button>
    </section>
  );
};

export default Menu;