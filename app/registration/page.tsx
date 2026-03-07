import React, { useState } from "react";
// import userIcon from "../../img/user.svg";
// import passwordIcon from "../../img/password.svg";
import styles from "../styles/registration/Registration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const errorMessages = (message?:string) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message || "İstifadəçi tapılmadı, Xahiş olunur daxil olun.",
      footer: '<a href="/signup">Daxil olmaq üçün buraya click edin!!</a>',
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!data.userName || !data.password) {
      errorMessages("Lütfen kullanıcı adı ve şifreyi doldurun.");
      return;
    }

    try {
      const response = await axios.post(
        "https://restartbaku-001-site3.htempurl.com/api/auth",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 && response.data.isSuccessful) {
        const userName = response.data.data?.userModel?.userName;
        const token = response.data?.token || response.data?.data?.token;

        if (userName) {
          localStorage.setItem("userName", userName);
        }

        if (token) {
          localStorage.setItem("authToken", token);
        }

        navigate("/");
      } else {
        errorMessages("Kullanıcı bulunamadı.");
      }
    } catch (error) {
      console.error("Login error:", error);
      errorMessages("Giriş zamanı xəta baş verdi.");
    }
  };

  return (
    <div className={styles.container}>
      <p
        className={styles.navigateText}
        onClick={() => {
          navigate("/");
        }}
      >
        <MdKeyboardArrowLeft />
      </p>

      <div className={styles.formContainer}>
        <form
          className={styles.formLogin}
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <h2>{t("loginPageLoginText")}</h2>

          <div>
            <div className={styles.Input}>
              <input
                type="text"
                name="userName"
                value={data.userName}
                placeholder={t("loginPageEmainInput")}
                onChange={changeHandler}
              />
              {/* <img src={userIcon} alt="User Icon" /> */}
            </div>
          </div>

          <div>
            <div className={styles.Input}>
              <input
                type="password"
                name="password"
                value={data.password}
                placeholder={t("loginPagePassInput")}
                onChange={changeHandler}
              />
              {/* <img src={passwordIcon} alt="Password Icon" /> */}
            </div>
          </div>

          <button type="submit" className={styles.loginBtn}>
            {t("loginPageLoginText")}
          </button>

          <div>
            <span>
              {t("loginPageNotAccText")}
              <Link to="/signup">{t("loginPageCteateAccText")}</Link>
            </span>
          </div>
        </form>
      </div>

      <img
        src="https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/a0f87f7e-434d-4c3c-9584-f7ee351d5f64-10432-dubai-img-worlds-of-adventure---uae-resident-offer-01.jpg"
        alt="Background"
        className={styles.LoginSignUpBackImg}
      />
    </div>
  );
}