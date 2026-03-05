"use client";

import { useState } from "react";
import styles from "../../styles/footer.css/footer.module.scss";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

type Country = "az" | "tr" | "en";

const countries: Record<Country, { flag: string; text: string }> = {
  az: { flag: "🇦🇿", text: "Ölkə seç" },
  tr: { flag: "🇹🇷", text: "Ülke seç" },
  en: { flag: "🇬🇧", text: "Choose country" },
};

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState<Country>("az");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_main}>
          <h2 className={styles.footer_main_title}>
            Brendim – Bütün Ehtiyaclarınız Bir Yerdə
          </h2>

          Brendim, bütün ehtiyaclarınızı qarşılayacaq geniş məhsul çeşidləri ilə
          xidmətinizdədir. Geyimdən aksesuara, ayaqqabıdan kosmetikaya,
          elektronikanın müxtəlif məhsullarından ev əşyalarına qədər çoxlu seçimlər
          təqdim olunur. Həm fərqli zövqlərə, həm də büdcələrə uyğun kolleksiyalar
          rahat və təhlükəsiz alış-veriş təcrübəsi təmin edir.

          <h2 className={styles.footer_main_title}>
            Müasir Dizayn və Şık Kombinasiyalar
          </h2>

          Gündəlik kombinlərinizi tamamlayacaq ayaqqabı və aksesuarlarda geniş
          seçim var. İdman ayaqqabısı, topuqlu ayaqqabı, sandalet, çəkmə və bot
          modelləri hər zövqə uyğundur.

          <h2 className={styles.footer_main_title}>
            Xüsusi Endirimlər və Kampaniyalar
          </h2>

          Brendim istifadəçilərinə sərfəli alış-veriş imkanları yaradır. Xüsusi
          günlərdə və kampaniyalarda endirimlərdən yararlanaraq büdcənizi qoruyub
          ehtiyaclarınızı rahatlıqla qarşılaya bilərsiniz.

          <h2 className={styles.footer_main_title}>Ev, Elektronika və Daha Çox</h2>

          Ev & dekorasiya, elektronika, oyun avadanlıqları, mətbəx əşyaları, uşaq
          məhsulları və məktəb ləvazimatları kimi kateqoriyalarda geniş məhsul
          çeşidi mövcuddur.

          <h2 className={styles.footer_main_title}>Yeni Sezon Məhsulları</h2>

          Geyim, kosmetika və texnologiya məhsulları daim yenilənir. Smartfonlar,
          planşet və kompüter məhsulları hər yaşa uyğun təqdim olunur.
        </div>
      </div>

      <div className={styles.footer_bottom_container}>
        <div className="container">
          <div className={styles.footer_bottom}>
            
            <div className={styles.footer_bottom_item}>
              <h2>Brendim</h2>
              <p>Haqqımızda</p>
              <p>Əlaqə</p>
              <p>Şərtlər</p>
              <p>Gizlilik</p>
            </div>

            <div className={styles.footer_bottom_item}>
              <h2>Yardım</h2>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
            </div>

            <div className={styles.footer_bottom_item_box}>
              <h2>Sponsorlar</h2>

              <div className={styles.footer_bottom_item_links}>
                <img src="https://cdn.dsmcdn.com/sfint/prod/fp/visa_1758883328053.svg" />
                <img src="https://cdn.dsmcdn.com/sfint/prod/fp/americanexpress_1758883315352.svg" />
                <img src="https://cdn.dsmcdn.com/sfint/prod/fp/mastercard_1758883269166.svg" />
                <img src="https://cdn.dsmcdn.com/sfint/prod/fp/troy_1758883343014.svg" />
              </div>
            </div>

            <div className={styles.footer_bottom_item}>
              
              {/* COUNTRY SELECT */}
              <div className={styles.countryBox}>
                <div
                  className={styles.countryHeader}
                  onClick={() => setOpen(!open)}
                >
                  {countries[country].flag} {countries[country].text}
                </div>

                {open && (
                  <div className={styles.countryDropdown}>
                    <div
                      className={styles.countryItem}
                      onClick={() => {
                        setCountry("az");
                        setOpen(false);
                      }}
                    >
                      🇦🇿 Azərbaycan
                    </div>

                    <div
                      className={styles.countryItem}
                      onClick={() => {
                        setCountry("tr");
                        setOpen(false);
                      }}
                    >
                      🇹🇷 Türkiye
                    </div>

                    <div
                      className={styles.countryItem}
                      onClick={() => {
                        setCountry("en");
                        setOpen(false);
                      }}
                    >
                      🇬🇧 English
                    </div>
                  </div>
                )}
              </div>

              {/* SOCIAL */}
              <div className={styles.footer_bottom_item_box}>
                <div className={styles.card}>
                  <a
                    className={`${styles.socialContainer} ${styles.containerOne}`}
                    href="#"
                  >
                    <FaInstagram className={styles.socialSvg} />
                  </a>

                  <a
                    className={`${styles.socialContainer} ${styles.containerTwo}`}
                    href="#"
                  >
                    <FaTiktok className={styles.socialSvg} />
                  </a>

                  <a
                    className={`${styles.socialContainer} ${styles.containerThree}`}
                    href="#"
                  >
                    <FaLinkedin className={styles.socialSvg} />
                  </a>

                  <a
                    className={`${styles.socialContainer} ${styles.containerFour}`}
                    href="#"
                  >
                    <FaWhatsapp className={styles.socialSvg} />
                  </a>
                </div>

                {/* APP BUTTONS */}
                <div className={styles.footer_sosialBox}>
                  <a
                    className={styles.appstoreButton}
                    href="https://apps.apple.com/us/iphone/today"
                    target="_blank"
                  >
                    <FaApple className={styles.appstoreIcon} />

                    <span className={styles.buttonText}>
                      <span className={styles.topText}>Download on the</span>
                      <span className={styles.bottomText}>App Store</span>
                    </span>
                  </a>

                  <a
                    className={styles.playstoreButton}
                    href="https://play.google.com/store/apps"
                    target="_blank"
                  >
                    <FaGooglePlay className={styles.playstoreIcon} />

                    <span className={styles.playstoreTexts}>
                      <span className={styles.playstoreText1}>GET IT ON</span>
                      <span className={styles.playstoreText2}>Google Play</span>
                    </span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}