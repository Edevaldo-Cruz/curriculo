import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={style} onClick={onClick}>
      <IoIosArrowDropright
        style={{
          fontSize: "45px",
          color: "#021859",
        }}
      />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={style} onClick={onClick}>
      <IoIosArrowDropleft
        style={{
          fontSize: "45px",
          color: "#021859",
        }}
      />
    </button>
  );
}

function FeaturedProducts() {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div>
        <h1>Destaque do dia</h1>
        <Slider ref={slider} {...settings}>
          <div style={{ backgroundColor: "red" }}>teste</div>
          <div style={{ backgroundColor: "red" }}>teste</div>
          <div style={{ backgroundColor: "red" }}>teste</div>
          <div style={{ backgroundColor: "red" }}>teste</div>
          <div style={{ backgroundColor: "red" }}>teste</div>
          <div style={{ backgroundColor: "red" }}>teste</div>
          <div style={{ backgroundColor: "red" }}>teste</div>
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedProducts;
