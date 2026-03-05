"use client";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline,IoPerson } from "react-icons/io5";
import styles from "../styles/header.css/Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart,FaBars } from "react-icons/fa6";

export default function Header() {

    const [hoverHeart, setHoverHeart] = useState(false);
    const [hoverCart, setHoverCart] = useState(false);
    const [hoverAccount, setHoverAccount] = useState(false);

  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.header_top}>
                <div className={styles.header_top_left}><h1>Brendim</h1></div>
                <div className={styles.header_top_search}>
                    <input type="text" className={styles.header_top_search_input} placeholder="Mehsul kateqoriya ve brend axtar"/>
                    <IoMdSearch className={styles.header_top_search_icon}/>
                </div>
                <div className={styles.header_top_right}>
                    <div 
                    className={styles.header_top_right_item}
                    onMouseEnter={() => setHoverAccount(true)}
                    onMouseLeave={() => setHoverAccount(false)}
                    >
                    {hoverAccount ? <IoPerson /> : <IoPersonOutline />} Hesabim
                    </div>
                    <div 
                    className={styles.header_top_right_item}
                    onMouseEnter={() => setHoverHeart(true)}
                    onMouseLeave={() => setHoverHeart(false)}
                    >
                    {hoverHeart ? <FaHeart /> : <CiHeart />} Sevimliler
                    </div>
                    <div 
                    className={styles.header_top_right_item}
                    onMouseEnter={() => setHoverCart(true)}
                    onMouseLeave={() => setHoverCart(false)}
                    >
                    {hoverCart ? <FaShoppingCart /> : <SlBasketLoaded />} Sebetim
                    </div>
                    <div className={styles.header_top_right_item}><BiSupport />Destek</div>
                </div>
            </div>
            <div className={styles.header_bottom}>
                <div className={styles.header_bottom_Leftitem}><FaBars className={styles.header_bottom_Leftitem_icon} /> Kateqoriyalar</div>
                <div className={styles.header_bottom_Rightitem}>Kisi</div>
                <div className={styles.header_bottom_Rightitem}>Qadin</div>
                <div className={styles.header_bottom_Rightitem}>Usaq</div>
                <div className={styles.header_bottom_Rightitem}>Usaq</div>
                <div className={styles.header_bottom_Rightitem}>Usaq</div>
                <div className={styles.header_bottom_Rightitem}>Usaq</div>
                <div className={styles.header_bottom_Rightitem}>Usaq</div>
                <div className={styles.header_bottom_Rightitem}>Usaq</div>
            </div>
        </div>
    </header>
  );
}