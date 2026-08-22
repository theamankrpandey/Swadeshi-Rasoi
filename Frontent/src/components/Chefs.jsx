import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/Chefs.css";

const Chefs = () => {
  const [mydata, setMydata] = useState([]);

  const Loaddata = async () => {
    const api = "http://127.0.0.1:8000/chefs/";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    Loaddata();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <div className="chef-card" key={key.id}>
        <div className="chef-img-wrap">
          <img src={key.Image} alt={key.Name} />

          <div className="chef-social">
            {key.Instagram && (
              <a href={key.Instagram} target="_blank" rel="noreferrer">
                📷
              </a>
            )}
            {key.Facebook && (
              <a href={key.Facebook} target="_blank" rel="noreferrer">
                f
              </a>
            )}
            {key.Twitter && (
              <a href={key.Twitter} target="_blank" rel="noreferrer">
                🐦
              </a>
            )}
          </div>
        </div>

        <div className="chef-info">
          <h4 className="chef-name">{key.Name}</h4>
          <span className="chef-role">{key.Role}</span>
          <p className="chef-experience">{key.Experience}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="chef-section">
      <div className="chef-heading">
        <span>The Culinary Team</span>
        <h2>
          Meet Our Expert <b>Chefs</b>
        </h2>
        <div className="chef-underline"></div>
      </div>

      <div className="chef-container">{ans}</div>
    </section>
  );
};

export default Chefs;
