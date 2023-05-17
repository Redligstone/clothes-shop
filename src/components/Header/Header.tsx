import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";
import dress from "../../assets/header__dress.png";
import cart from "../../assets/header__cart.png";
import s from "./header.module.scss";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import "./header.css";
import { cartSelector } from "../../redux/slices/cart_slice";
import { useLocation } from "react-router-dom";



const Header: React.FC = () => {
  const { items, totalCount } = useSelector(cartSelector);
  const [count, setCount] = useState(totalCount);
  const [popupOpen, setPopupOpen] = useState(false);
  const [callOrdered, setCallOrdered] = useState(false);
  const location = useLocation();
  const path = location.pathname;


  const handleReset = () => {
      formik.resetForm()
  }

  const isMounted = useRef(false);

  console.log(path);

  React.useEffect(() => {
    if (isMounted) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  React.useEffect(() => {
    setCount(totalCount);
  }, [totalCount]);

  const transitScroll = () => {
    window.scrollTo(0, 0);
  };

  if (popupOpen) {
    document.body.classList.add("popup-open");
  } else {
    document.body.classList.remove("popup-open");
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Поле Имя обязательно";
    }
    if (!values.email) {
      errors.email = "Поле E-mail обязательно";
    }
    if (!values.phone) {
      errors.phone = "Поле Телефон обязательно";
    } else if (values.phone.length < 11 || values.phone.length > 12) {
      errors.phone = "Пожалуйста, введите корректный номер телефона";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      values.name = "";
      values.email = "";
      values.phone = "";
      setCallOrdered(true);
    },
  });

  return (
    <div>
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <div className="header__body">
              <Link to="/" onClick={() => window.scrollTo(0,0)} className="header__logo">
                <img src={dress} className={s.dress} />
                <span>WOMAZING</span>
              </Link>

              <nav className="header__menu">
                <ul className="header__list">
                  <li>
                    <Link
                      to="/"
                      onClick={transitScroll}
                      className={path === "/" ? "  header__link active" : "header__link"}
                    >
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      onClick={transitScroll}
                      className={
                        path === "/shop" ? "  header__link active" : "header__link"
                      }
                    >
                      Магазин
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={transitScroll}
                      className={
                        path === "/about" ? "  header__link active" : "header__link"
                      }
                    >
                      О бренде
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contacts"
                      onClick={transitScroll}
                      className={
                        path === "/contacts" ? "  header__link active" : "header__link"
                      }
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              </nav>

              <div
                className="contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setPopupOpen(true);
                
                }}
              >
                <TbPhoneCall className="phone" />
                <span>+7 (495) 823-54-12</span>
              </div>

              <div className="cart">
                <Link to="/cart">
                  <img src={cart} className="cart_image" />

                  {totalCount !== 0 && (
                    <span className="counter">
                      <span>{count}</span>
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      {popupOpen && (
        <div className="order_call">
          <div className="order_call_background" onClick={() => {
            setPopupOpen(false);
            handleReset()
            }}></div>

          {callOrdered === false &&<div className="order_call__container">
            <img src="" alt="" />
            <form className="call__form" onSubmit={formik.handleSubmit}>
              <h2>Заказать обратный звонок</h2>
              <input
                type="text"
                placeholder="Имя"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='error'>{formik.errors.name}</div>
              )}

              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='error'>{formik.errors.email}</div>
              )}

              <input
                type="tel"
                placeholder="Телефон"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className='error'>{formik.errors.phone}</div>
              )}

              <button type="submit" className="order__call_btn">Заказать звонок</button>
            </form>
          </div>}

          {callOrdered &&<div className="order_call__container">
            <img src="" alt="" />
            <h2>Отлично! Мы скоро вам перезвоним.</h2>
            <a onClick={() => {
              setPopupOpen(false)
              setCallOrdered(false)
              }}>Закрыть</a>
          </div>}
        </div>
      )}
    </div>
  );
};

export default Header;
