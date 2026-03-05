"use client";
import React, { Component } from "react";
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

export default function PauseOnHover({ items, className }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className={`container ${className}`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={style.sliderItem}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}