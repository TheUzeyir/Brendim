import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../../../app/styles/slider/slider.module.scss";

type Item = {
  img: string;
  title: string;
  price?: number;
};

type Props = {
  items: Item[];
  className?: string;
};

function AutoPlay({ items, className }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className={`container ${className}`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={style.autosliderItem}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
