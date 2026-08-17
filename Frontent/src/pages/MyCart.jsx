import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus ,faMinus} from "@fortawesome/free-solid-svg-icons";
import { quanInc,quanDec} from "../CartSlice";
import Button from 'react-bootstrap/Button';
const MyCart = () => {
  const cart = useSelector(state => state.MyCart.cart);
  const [data, Setdata] = useState([]);
  const dispatch = useDispatch();
  const Loaddata = async () => {
    const api = "http://127.0.0.1:8000/items/";
    const response = await axios.get(api);
    console.log(response.data);
    Setdata(response.data);
  };

  useEffect(() => {
    Loaddata();
  }, []);

  const ans = cart.map((key) => {
    return (
      <tr>
        <td>
          <img src={key.Image} width="100" />
        </td>
        <td>{key.Name}</td>
        <td>{key.Category}</td>
        <td>{key.Description}</td>
        <td>{key["Restaurant Name"]}</td>
        <td>₹{key.Price*key.Quantity}</td>
        <td>
          <FontAwesomeIcon icon={faPlus} style={{color: "rgb(255, 17, 17)",}} onClick={()=>{dispatch(quanInc(key))}} />
          {key.Quantity}
          <FontAwesomeIcon icon={faMinus} style={{color: "rgb(255, 17, 17)",}} onClick={()=>{dispatch(quanDec(key))}}/>
          </td>
          <Button variant="success">PayNow</Button> 
      </tr>
    );
  });

  return (
    <Table >
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Restuarent Name</th>
          <th>Price</th>
          <th>Quantity</th> 
          <th></th>
        </tr>
      </thead>

      <tbody>
        {ans}
      </tbody>
    </Table>
  );
};

export default MyCart;