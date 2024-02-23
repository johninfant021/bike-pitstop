import React, { Component } from "react";
import "./about.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import bike1 from "./about_pic/bike1.jpg";
import bike2 from "./about_pic/bike2.jpg";
import bike3 from "./about_pic/bike3.jpg";
import bike4 from "./about_pic/bike4.jpg";
import bike5 from "./about_pic/bike5.jpg";
import bike6 from "./about_pic/bike6.jpg";
import bike7 from "./about_pic/bike7.jpg";
import bike8 from "./about_pic/bike8.jpg";

class About extends Component {
  render() {
    return (
      <body>
        <h1 className="h1">About Us</h1>

        <div className="cent">
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={bike1} alt="bike" className="bike_pic" />
            <img src={bike2} alt="bike" className="bike_pic" />
            <img src={bike3} alt="bike" className="bike_pic" />
            <img src={bike4} alt="bike" className="bike_pic" />
            <img src={bike5} alt="bike" className="bike_pic" />
            <img src={bike6} alt="bike" className="bike_pic" />
            <img src={bike7} alt="bike" className="bike_pic" />
          </AliceCarousel>
        </div>

        <h1 className="h1">Our mission</h1>
        <p className="p">
          Our mission is to produce and continually develop quality products at
          a competitive price by getting it right the first time itself. We
          utilise proprietary technology and the expertise of our team members
          which made us the pioneers of organising the motorcycle accessories
          segment in India. Our forward-looking processes of coordinating assets
          to optimise delivery has helped us create a substantial online
          presence in all marketplaces. We continue to innovate and develop new
          approaches that will help us grow our customer base and achieve our
          target of more than 20 million riders by 2024.
        </p>
        <center>
          <img src={bike8} alt="bike" className="main_pic" />
        </center>
        <h1 className="h1">Our vision</h1>
        <p className="p">
          To become the leader in Mid-Range & Premium Motorcycle accessories'
          segment in India by inspiring and enhancing the motorcycling
          experiences of 20 Million riders by 2024.
        </p>
        <h1 className="h1">Our values</h1>
        <p className="p">
          <strong>
            Community first Passion for innovation Excellence in Quality For the
            people Nurture Talent
          </strong>{" "}
          We believe in building positive long-term relationships with our
          suppliers, staff, and customers. We run various programs to help new
          riders become better riders and also ignite the passion of riding in
          people who are yet to discover their love for riding. We also work
          with many amateur and professional racers to help them find a solid
          footing in the developing world of Indian motorsports.
        </p>
        <footer>
          <p>Developed by</p>
          <p>John Infant</p>
        </footer>
      </body>
    );
  }
}

export default About;
