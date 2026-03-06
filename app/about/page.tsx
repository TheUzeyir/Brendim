'use client';

import {useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import AutoPlay from '../components/slider/AutoPlay';
import {data} from "../data/aboutdata"
import style from "../styles/aboutpage/aboutpage.module.scss"
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

type Person = {
  id:number
  firstName:string
  lastName:string
  email:string
  image:string
}

export default function About() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [persons, setpersons] = useState<Person[]>([])
  
    useEffect(() => {
      fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setpersons(data.users))
    }, [])
  
    const sliderData = persons.map(person => ({
      img: person.image,
      title: person.firstName + " " + person.lastName,
    }))

      const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Göndərilir...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Mesajınız göndərildi!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('Xəta baş verdi, yenidən cəhd edin.');
      }
    } catch (err) {
      setStatus('Xəta baş verdi, yenidən cəhd edin.');
    }
  };
  

  return (
    <div className="">
      <Header/>
        <AutoPlay items={sliderData}/>
      <div className="container">
        <div className={style.about_hoverCard}>
          <div className={style.tabs}>
            {data.map((item, index) => (
              <div
                key={index}
                className={activeIndex === index ? "tab active" : "tab"}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className={style.content}>
            <div className={style.text}>
              <h2>{data[activeIndex].title}</h2>
              <p>{data[activeIndex].description}</p>
            </div>
            <div className={style.image}>
              <img src={data[activeIndex].img} />
            </div>
          </div>
        </div>
        <div className={style.sponsor}>
          <h2>Sponsorluklarimiz</h2>
          <div className={style.sponsor_imgcard}>
            <div className={style.sponsor_imgcard_box}>
              <p>Lorem.</p>
              <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="" />
            </div>
            <div className={style.sponsor_imgcard_box}  >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt ad ut eum doloremque esse ipsum voluptas nobis velit. Quos laudantium earum dolore esse consectetur optio accusamus excepturi explicabo quod!</p>
              <img src="https://cuttingedgepr.com/wp-content/uploads/2020/06/Sponsorship-Become-a-Sponsor-3-iStock-881120664.jpg" alt="" />
            </div>
            <div className={style.sponsor_imgcard_box}>
              <p>Lorem.</p>
              <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="" />
            </div>
            <div className={style.sponsor_imgcard_box}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt ad ut eum doloremque esse ipsum voluptas nobis velit. Quos laudantium earum dolore esse consectetur optio accusamus excepturi explicabo quod!</p>
              <img src="https://cuttingedgepr.com/wp-content/uploads/2020/06/Sponsorship-Become-a-Sponsor-3-iStock-881120664.jpg" alt="" />
            </div>
            <div className={style.sponsor_imgcard_box}>
              <p>Lorem.</p>
              <img src="https://www.plannedgiving.com/wp-content/uploads/2023/09/sponsorship.jpg" alt="" />
            </div>
            <div className={style.sponsor_imgcard_box}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt ad ut eum doloremque esse ipsum voluptas nobis velit. Quos laudantium earum dolore esse consectetur optio accusamus excepturi explicabo quod!</p>
              <img src="https://cuttingedgepr.com/wp-content/uploads/2020/06/Sponsorship-Become-a-Sponsor-3-iStock-881120664.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className={style.contact_card}>
            <div className={style.contact_card_left}>
              <h2>Contact Us</h2>                  
              <div className={style.contact_item}>
                <strong>Email:</strong>
                <a href="mailto:info@brendim.com" className={style.contact_link}>
                  <FaEnvelope style={{ marginRight: '8px',color:'black'}} />
                  info@brendim.com
                </a>
              </div>
              <div className={style.contact_item}>
                <strong>Phone:</strong>
                <a
                  href="https://wa.me/994507970044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.contact_link}
                >
                  <FaWhatsapp style={{ marginRight: '8px', color: '#25D366' }} />
                  +994 50 797 00 44
                </a>
              </div>
              <div className={style.contact_item}>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=20+Mall,+Tbilisi+Avenue,+Baku,+Azerbaijan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.contact_link}
                >
                  <FaMapMarkerAlt style={{ marginRight: '8px', color: 'red' }} />
                  20 Mall, Tbilisi Avenue, Baku, Azerbaijan
                </a>
              </div>

              <div className={style.contact_item}>
                <strong>Working Hours:</strong>
                <p>Mon - Fri: 09:00 - 18:00</p>
              </div>
            </div>
          <div className={style.contact_card_right}>
            <iframe
              src="https://www.google.com/maps?q=20+Mall+Baku&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={style.contact_form_container}>
      <h2>Bizimlə Əlaqə</h2>
      <form onSubmit={handleSubmit} className={style.contact_form}>
        <div className={style.row}>
          <input
            type="text"
            name="firstName"
            placeholder="Ad"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Soyad"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Müraciətinizi yazın"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Göndər</button>
      </form>
      {status && <p className={style.status}>{status}</p>}
    </div>
      </div>
      <Footer/>
    </div>
  )
}
