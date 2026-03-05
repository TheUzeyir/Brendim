"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../../../app/styles/slider/slider.module.scss";

function PauseOnHover() {
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
    <div className="container">
      <div className="slider-container">
        <Slider {...settings}>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2024-12-03/af030a99-0c34-40a0-9228-64e3cf462eae.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2024-12-03/5c5faf07-c9f5-495a-895d-985be2ae3afd.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2024-12-03/fd783d97-77c9-4def-bc34-6a3baad268be.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2024-12-03/4dbbf828-dbe2-4f79-a049-4de11755eac1.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2024-12-03/85e24984-319b-4927-a127-ac3295d0152d.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2025-08-19/b599236d-a71c-4f6b-b035-c6c5ab039c00.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2025-10-27/d06177cb-7682-4f1d-9489-c20829c87cdd.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
          <div className={style.sliderItem}>
            <img src="https://cdn.dsmcdn.com/mnresize/100/-/homepage/prod/2025-11-05/fc588349-2175-4b81-b30b-1a0ea60b08d4.png" alt="" />
            <p>Lorem, ipsum dior</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PauseOnHover;
