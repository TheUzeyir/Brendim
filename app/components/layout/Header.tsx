"use client";
import { useState,useEffect} from "react";
import { CiHeart } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline,IoPerson } from "react-icons/io5";
import styles from "../../styles/header.css/Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart,FaBars } from "react-icons/fa6";
import Link from "next/link"

export default function Header() {

    const [categories, setCategories] = useState<string[]>([]);
    const [hoverHeart, setHoverHeart] = useState(false);
    const [hoverCart, setHoverCart] = useState(false);
    const [hoverAccount, setHoverAccount] = useState(false); 
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = (path: string) => {
      window.location.href = path;
    }

    useEffect(() => {
      if (search.length < 1) {
        setResults([]);
        return;
      }
    
      setLoading(true);
    
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then(data => {
          setResults(data.products);
          setLoading(false);
        });
    }, [search]);

    useEffect(() => {
      fetch("https://dummyjson.com/products/categories")
        .then(res => res.json())
        .then(data => {
          const slugs = data.map((item: any) => item.title);
          setCategories(slugs);
        });
    }, []);

  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.header_top}>
                <div className={styles.header_top_left}><Link href="/">Brendim</Link></div>
                <div className={styles.header_top_search}>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className={styles.header_top_search_input}
                      placeholder="Mehsul kateqoriya ve brend axtar"
                    />                    <IoMdSearch className={styles.header_top_search_icon}/>
                </div>
                {search && (
                  <div className={styles.search_results}>
                    {loading && <p>Axtarılır...</p>}

                    {!loading && results.length === 0 && (
                      <p>Mehsul tapılmadı. Digər məhsullara baxın.</p>
                    )}

                    {!loading &&
                      results.slice(0, 5).map((item) => (
                        <div key={item.id} className={styles.search_item}>
                          <img src={item.thumbnail} width={40} />
                          <span>{item.title}</span>
                        </div>
                      ))}
                  </div>
                )}
                <div className={styles.header_top_right}>
                    <div 
                    className={styles.header_top_right_item}
                    onMouseEnter={() => setHoverAccount(true)}
                    onMouseLeave={() => setHoverAccount(false)}
                    onClick={()=>navigate("/signup")}
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
                {categories.slice(0,6).map((cat, index) => (
                  <div key={index} className={styles.header_bottom_Rightitem}>
                    {cat}
                  </div>
                ))}
            </div>
        </div>
    </header>
  );
}