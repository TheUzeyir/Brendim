"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/slider/slider.module.scss";

const products = [
  { id: 1, title: "New Brand Name", price: 299, sizes: [37, 38, 39, 40, 41] },
  { id: 2, title: "Cool Shoes", price: 199, sizes: [36, 37, 38, 39, 40] },
  { id: 3, title: "Sporty Sneaker", price: 249, sizes: [38, 39, 40, 41, 42] },
  { id: 4, title: "Classic Leather", price: 349, sizes: [37, 38, 39, 40, 41] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
  { id: 5, title: "Modern Kicks", price: 279, sizes: [36, 37, 38, 39, 40] },
];

function Responsive() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container">
    <div className={styles.sliderContainer}>
        <Slider {...settings}>
            {products.map((product) => (
            <div key={product.id} className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src="https://cdn.dsmcdn.com/homepage/prod/2025-08-20/07ec8cff-b06d-4dc7-ab4e-4b820a76e31b.png" alt="" />
                </div>
                <div className={styles.title}>
                <span>{product.title}</span>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
}

export default Responsive;
