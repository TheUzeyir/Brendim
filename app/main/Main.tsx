'use client';

import React,{useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PauseOnHover from '../components/slider/PauseOnHover';

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
}

export default function Main() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  const sliderData = products.map(product => ({
    img: product.thumbnail,
    title: product.title,
  }))

  return (
    <div>
      <Header/>
      <PauseOnHover items={sliderData}/>
      <Footer/>
    </div>
  )
}
