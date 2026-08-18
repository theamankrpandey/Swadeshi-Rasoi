import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background_image from "../assets/images/Swadeshi_Rasoi.jpg";
import axios from "axios";
import "../assets/css/App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlice";

const Home = () => {
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

  const ans = mydata.map((key) => {
    return (
      <Card className="food-card" key={key.id}>
        <Card.Img variant="top" src={key.Image} />

        <Card.Body>
          <div className="food-category">{key.Category}</div>

          <Card.Title>{key.Name}</Card.Title>

          <Card.Text>{key.Description}</Card.Text>

          <div className="food-bottom">
            <span className="food-price">₹{key.Price}</span>

            <Button
              className="food-button"
              onClick={() => dispatch(addToCart(key))}
            >
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="home-page">
      <section
        className="home-section"
        style={{
          backgroundImage: `url(${background_image})`,
        }}
      >
        <div className="home-overlay"></div>

        <div className="home-content">
          <div className="small-badge">
            <span>★</span>
            #1 Rated Fast Food Restaurant
          </div>

          <h1>
            Delicious
            <span>Fast Food</span>
             for Every Moment
          </h1>

          <p>
            Experience bold flavors crafted from premium ingredients. From
            crispy burgers to gourmet pizzas — every bite is an adventure worth
            savoring.
          </p>

          <div className="home-buttons">
            <button
              className="menu-button"
              onClick={() =>
                document
                  .getElementById("food-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              🍴 Explore Menu
            </button>

            <button className="story-button">
              <span>▶</span>
              Watch Our Story
            </button>
          </div>

          <div className="home-details">
            <div>
              <strong>850+</strong>
              <small>HAPPY CUSTOMERS</small>
            </div>

            <div>
              <strong>120+</strong>
              <small>MENU ITEMS</small>
            </div>

            <div>
              <strong>15+</strong>
              <small>EXPERT CHEFS</small>
            </div>

            <div>
              <strong>12yr</strong>
              <small>EXPERIENCE</small>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="offer-card">
            <div className="offer-icon">🔥</div>
            <div>
              <strong>Hot Deal</strong>
              <small>30% off today</small>
            </div>
          </div>

          <div className="delivery-card">
            <div className="delivery-icon">●</div>
            <div>
              <strong>20 min</strong>
              <small>Fast delivery</small>
            </div>
          </div>

          <div className="rating-card">
            <div className="rating-icon">★</div>
            <div>
              <strong>4.9/5</strong>
              <small>2k+ reviews</small>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="marquee-wrap">
          <div className="marquee-track">
            <span>● Gourmet Burgers</span>
            <span>● Artisan Pizzas</span>
            <span>● Fresh Wraps & Rolls</span>
            <span>● Loaded Fries</span>
            <span>● Ice Cream Shakes</span>
            <span>● Grilled Sandwiches</span>
            <span>● Crispy Fried Chicken</span>
            <span>● Gourmet Burgers</span>
            <span>● Artisan Pizzas</span>
            <span>● Fresh Wraps & Rolls</span>
            <span>● Loaded Fries</span>
            <span>● Ice Cream Shakes</span>
            <span>● Grilled Sandwiches</span>
            <span>● Crispy Fried Chicken</span>
          </div>
        </div>

        <div className="category-heading">
          <span>What We Offer</span>
          <h2>Browse by Category</h2>
          <p>
            From sizzling burgers to exotic world cuisines - find your favourite
            in our menu
          </p>
        </div>

        <div className="category-grid">
          <div className="category-card active">
            <img
              src="https://themewagon.github.io/sarab/img/menu/4.jpg"
              alt="All Items"
            />
            <h4>All Items</h4>
            <small>99 items</small>
          </div>

          <div className="category-card activ">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop"
              alt="Burgers"
            />
            <h4>Burgers</h4>
            <small>24 items</small>
          </div>

          <div className="category-card activ">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop"
              alt="Pizza"
            />
            <h4>Pizza</h4>
            <small>18 items</small>
          </div>

          <div className="category-card activ">
            <img
              src="https://themewagon.github.io/sarab/img/menu/3.jpg"
              alt="Fried Chicken"
            />
            <h4>Fried Chicken</h4>
            <small>15 items</small>
          </div>

          <div className="category-card activ">
            <img
              src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=300&fit=crop"
              alt="Wraps"
            />
            <h4>Wraps</h4>
            <small>12 items</small>
          </div>

          <div className="category-card activ">
            <img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop"
              alt="Desserts"
            />
            <h4>Desserts</h4>
            <small>20 items</small>
          </div>
        </div>
      </section>

      <section id="food-section" className="food-section">
        <div className="food-heading">
          <span>OUR MENU</span>
          <h2>Choose Your Favorite</h2>
          <p>Freshly prepared food made with love and premium ingredients.</p>
        </div>

        <div className="food-container">{ans}</div>
      </section>
    </div>
  );
};

export default Home;
