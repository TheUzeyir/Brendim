'use client';
import React, { useEffect, useState } from "react";
import styles from "../styles/registration/Registration.module.scss";
import { validate } from "../utils/validate";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from 'next/navigation';

type FormKeys =
  | "name"
  | "phone"
  | "email"
  | "password"
  | "confirmPassword"
  | "IsAccepted";

type FormData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  IsAccepted: boolean;
};

type ErrorsType = Partial<Record<FormKeys, string>>;
type TouchedType = Partial<Record<FormKeys, boolean>>;

type InputType = {
  name: FormKeys;
  placeholder: string;
  icon: string;
  type?: string;
};

const SignUp: React.FC = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    IsAccepted: false,
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [touched, setTouched] = useState<TouchedType>({});
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login'); 
  };

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data]);

  const inputs: InputType[] = [
    { name: "name", placeholder: t("signInNameInput"), icon: "fa-user" },
    { name: "phone", placeholder: t("signInPhoneInput"), icon: "fa-phone" },
    { name: "email", placeholder: t("signInEmailInput"), icon: "fa-envelope" },
    {
      name: "password",
      placeholder: t("signInPassInput"),
      icon: "fa-lock",
      type: "password",
    },
    {
      name: "confirmPassword",
      placeholder: t("signInConfitmPassInput"),
      icon: "fa-lock",
      type: "password",
    },
  ];

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    if (name === "IsAccepted") {
      setData({ ...data, [name]: checked });
    } else if (name === "phone") {
      const formattedValue = value.replace(/\D/g, "");
      setData({ ...data, [name]: formattedValue });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!Object.keys(errors).length && data.IsAccepted) {
      const apiUrl =
        "https://restartbaku-001-site3.htempurl.com/api/auth/user-register";

      const payload = {
        userName: data.name,
        userPhone: data.phone,
        userEmail: data.email,
        userPassword: data.password,
        confirmPassword: data.confirmPassword,
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          toast.success("Uğurla qeydiyyat olundunuz!");

          setData({
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            IsAccepted: false,
          });

          setTouched({});
        } else if (response.status === 409) {
          toast.error(
            "Bu email artiq mövcuddur və yaxud butun melumatlari daxil edin"
          );
        } else {
          toast.warning("Yenidən cəhd edin");
        }
      } catch (error) {
        toast.error("Uğursuz əməliyyat.");
        console.error("API Error:", error);
      }
    } else {
      toast.error("Please check the fields again");

      setTouched({
        name: true,
        phone: true,
        email: true,
        password: true,
        confirmPassword: true,
        IsAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <p
        className={styles.navigateText}
        onClick={goToLogin}
      >
        <MdKeyboardArrowLeft />
      </p>

      <div className={styles.formContainer}>
        <form
          className={styles.formLogin}
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <h2>{t("signInRegstrationText")}</h2>

          {inputs.map((input, index) => (
            <div key={index}>
              <div
                className={
                  errors[input.name] && touched[input.name]
                    ? styles.unCompleted
                    : !errors[input.name] && touched[input.name]
                    ? styles.completed
                    : undefined
                }
              >
                <input
                  type={input.type || "text"}
                  name={input.name}
                  value={data[input.name] as string}
                  placeholder={input.placeholder}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  autoComplete="off"
                />

                <i className={`fa-solid ${input.icon}`}></i>
              </div>

              {errors[input.name] && touched[input.name] && (
                <span className={styles.error}>{errors[input.name]}</span>
              )}
            </div>
          ))}

          <div className={styles.terms}>
            <label htmlFor="IsAccepted">
              {t("signInRulesText")}
            </label>

            <input
              type="checkbox"
              name="IsAccepted"
              checked={data.IsAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={styles.termsCheckBox}
              required
            />
          </div>

          {!data.IsAccepted && Object.keys(errors).length > 0 && (
            <p className={styles.termsError}>
              {t("signInRulesRequiredText")}
            </p>
          )}

          <div>
            <span>
              {t("signInHaveAcc")}
              <p onClick={goToLogin}>{t("signInLoginText")}</p>
            </span>
          </div>

          <button
            type="submit"
            className={styles.loginBtn}
            disabled={!data.IsAccepted || Object.keys(errors).length > 0}
          >
            {t("signInFinishRegstration")}
          </button>
        </form>

        <ToastContainer />
      </div>

      <img
        src="https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
        alt="Background"
        className={styles.LoginSignUpBackImg}
      />
    </div>
  );
};

export default SignUp;