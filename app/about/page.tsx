import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PauseOnHover from '../components/slider/PauseOnHover'
import { categories } from './data'

export default function About() {
  return (
    <div>
      {/* <Header/>
      <div className="aboutCard">
        <img src="https://universidadeuropea.com/resources/media/images/global-marketing-800x450.width-640.jpg" alt="" />
        <div className="aboutCard_item">
          <h2>Vizyonumuz</h2>
          <p>Trendyol olarak vizyonumuz, müşteriler için en çok tercih
             edilen alışveriş platformu, satıcılar için en güçlü iş ortağı ve
             ekiplerimiz için en iyi çalışma ortamı olmak. Her adımda bu üç hedef doğrultusunda 
             ilerliyor, herkes için değer yaratan bir ekosistem inşa ediyoruz.</p>
        </div>
      </div>
      <Footer/> */}
      <PauseOnHover items={categories}/>
    </div>
  )
}
