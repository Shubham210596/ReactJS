import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={1799}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="Samsung Galaxy S20 FE 5G (Cloud Lavender, 8GB RAM, 128GB Storage)"
            price={34999}
            image="https://m.media-amazon.com/images/I/81QVLzeVckL._SY741_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Apple 2023 MacBook Pro Laptop M2 Max chip with 12‑core CPU and 38‑core GPU: 33.74 cm (16.2-inch), 32GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Silver"
            price={349900}
            image="https://m.media-amazon.com/images/I/31iy73DPqfL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Samsung 7 kg Fully-Automatic Top Loading Washing Machine (WA70A4002GS/TL, Imperial Silver, Diamond drum)"
            price={15790}
            image="https://m.media-amazon.com/images/I/613KfoiSsML._SY679_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Samsung 146 cm (58 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA58AUE70AKLXL (Black)"
            price={48490}
            image="https://m.media-amazon.com/images/I/71DT3qZJsOL._SX450_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Sparx Men's Sc0214g Loafers"
            price={759}
            image="https://m.media-amazon.com/images/I/81BBBgUiluL._UX625_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
