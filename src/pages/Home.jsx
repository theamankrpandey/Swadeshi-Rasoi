import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import slide1 from "../assets/images/slide1.jpg"
import slide2 from "../assets/images/slide2.jpeg"
import slide3 from "../assets/images/slide3.jpg"
import axios from "axios";
import "../assets/css/App.css"
import { useEffect, useState } from "react";
const Home = () => {
  const [mydata,setMydata] = useState([]);
  const Loaddata=async()=>{
    const api = "http://localhost:3000/Items";
    const response = await axios.get(api)
    console.log(response.data)
    setMydata(response.data)
  }
  useEffect(()=>{
    Loaddata()
  },[])

  const ans = mydata.map((key)=>{
    return(
      <>
      <Card style={{ width: '18rem'}} id="food">
      <Card.Img variant="top" src={key.Image} />
      <Card.Body>
        <Card.Title>{key.Name}</Card.Title>
        <Card.Text>
          {key.Description}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
  return (
    <>  
      <Carousel fade style={{marginLeft:"120px", marginTop:"20px"}}>
      <Carousel.Item>
        <img src={slide1} style={{width:"90%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} style={{width:"90%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} style={{width:"90%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1>Our Menu</h1>
    <div id="mydata" >
      {ans}
    </div>
    </>
  );
};

export default Home;
