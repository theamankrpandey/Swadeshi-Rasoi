import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background_image from "../assets/images/Swadeshi_Rasoi.jpg";
import axios from "axios";
import "../assets/css/App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlice";
import Menu from "../components/Menu";
import Offer from "./Offer";
import FoodShow from "../components/FoodShow";

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
        className="home-section" id="home-section"
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

      <section className="story-section">
        <div className="story-left">
          <div className="story-badge">
            <strong>12+</strong>
            <span>Years of Excellence</span>
          </div>

          <img
            className="story-main-img"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=900&fit=crop"
            alt="Our Restaurant"
          />

          <img
            className="story-small-img"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop"
            alt="Fine Dining"
          />
        </div>

        <div className="story-right">
          <span className="story-tag">Our Story</span>

          <h2 className="story-heading">
            We Invite You to Visit
            <br />
            Our <span>Food Restaurant</span>
          </h2>

          <p className="story-text">
            Founded in 2012, Sarab began as a small corner joint with a big
            dream - to serve food that brings people together. Today we're proud
            to serve thousands of happy customers every week with the same
            passion that started it all.
          </p>

          <div className="story-features">
            <div className="story-feature-item">
              <div className="story-feature-icon">🌿</div>
              <div>
                <h4>100% Fresh Ingredients</h4>
                <p>
                  We source locally and sustainably. Every ingredient is
                  hand-picked daily for maximum freshness.
                </p>
              </div>
            </div>

            <div className="story-feature-item">
              <div className="story-feature-icon">🏅</div>
              <div>
                <h4>Award-Winning Recipes</h4>
                <p>
                  Our signature recipes have won national culinary awards 5
                  years in a row.
                </p>
              </div>
            </div>

            <div className="story-feature-item">
              <div className="story-feature-icon">🚚</div>
              <div>
                <h4>Lightning-Fast Delivery</h4>
                <p>
                  Order online and get hot, fresh food at your door in under 25
                  minutes, guaranteed.
                </p>
              </div>
            </div>
          </div>

          <button
            className="story-cta-button"
            onClick={() =>
              document
                .getElementById("food-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            📖 View Full Menu
          </button>
        </div>
      </section>

      <section>
        <Menu/>
      </section>

      <section>
        <Offer/>
      </section>

      <section>
        <FoodShow/>
      </section>
    </div>
  );
};

export default Home;
