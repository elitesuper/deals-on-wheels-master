import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import man from "../../assets/images/team1.png";
import "./BrowsCard.css";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const BrowsCard = ({ carData }) => {
  const { name, price, image, id } = carData;
  const navigate = useNavigate();
  return (
    <div className="hero-card-br">
      <div className="brcard">
        <div className="bgcard__img">
          <img src={image} />
        </div>

        <div className="bgcard__content">
          <div className="bgcard__info">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>

          <div className="bgcard__vin">
            <p>VIN : JTEKQ5JR4M5931366 | Stock : 36205F</p>
          </div>

          <div className="bgcard__feature">
            <p>Odometer : 15,988KM</p>
            <p>Exterior : Magnetic Grey</p>
            <p className="dont">Exterior : Magnetic Grey</p>
          </div>

          <div className="bgcard__feature2">
            <p>Interior : Grey</p>
            <p>Drive Type : 4-Wheel Drive</p>
            <p className="dont">Body Style : Sport</p>
          </div>

          <div className="bgcard__btns">
            <button className="bg-btn bg-btn1">Contact Us</button>
            <button className="bg-btn bg-btn2">Test Drive</button>
            <button
              onClick={() => navigate(`/browscars/${id}`)}
              className="bg-btn bg-btn3"
            >
              View Details
            </button>
            <button className="bg-btn bg-btn4">View in Metaverse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsCard;
