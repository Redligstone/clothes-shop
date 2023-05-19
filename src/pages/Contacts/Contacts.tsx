import React, { useState } from "react";
import s from "./contacts.module.scss";
import map from "../../assets/map.jpg";
import { Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/categories_slice";

const Contacts: React.FC = () => {
    const  [sent,setSent] = useState(false)
    const dispatch = useDispatch()
  const location = useLocation()
  const path = location.pathname

 
  if(path !== '/shop'){
    dispatch(setCategoryId(0))
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Поле Имя обязательно";
    }
    if (!values.email) {
      errors.email = "Поле E-mail обязательно";
    }
    if (!values.message) {
      errors.message = "Поле Сообщение обязательно";
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
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      values.name = ''
      values.email = ''
      values.phone = ''
      values.message = ''
      setSent(true)

    },
  });

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <section className={s.header}>
          <h1>Контакты</h1>
          <div className={s.path}>
            <Link to="/">Главная</Link>
            <span className={s.path_made}> — </span>
            <span>Контакты</span>
            <span></span>
          </div>
        </section>

        <div className={s.map}>
          <div>
            <img src={map} />
          </div>
        </div>

        <section className={s.contacts}>
          <div className={s.column}>
            <span>Телефон</span>
            <a href="tel:+1234567890">+7 (495) 823-54-12</a>
          </div>
          <div className={s.column}>
            <span>E-mail</span>
            <a href="info@sitename.com">info@sitename.com</a>
          </div>
          <div className={s.column}>
            <span>Адрес</span>
            <span>г. Москва, 3-я улица Строителей, 25</span>
          </div>
        </section>

        <section className={s.connect}>
          <h2>Напишите нам</h2>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Имя"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={sent}
                className={sent ? `${s.disabled}` : ''}
              />
              {formik.touched.name && formik.errors.name && (
                <div className={s.error}>{formik.errors.name}</div>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={sent}
                className={sent ? `${s.disabled}` : ''}
              />
              {formik.touched.email && formik.errors.email && (
                <div className={s.error}>{formik.errors.email}</div>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Телефон"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={sent}
                className={sent ? `${s.disabled}` : ''}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className={s.error}>{formik.errors.phone}</div>
              )}
            </div>

            <div>
              <textarea
                placeholder="Сообщение"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={sent}
                className={sent ? `${s.disabled}` : ''}
              />
              {formik.touched.message && formik.errors.message && (
                <div className={s.error}>{formik.errors.message}</div>
              )}
            </div>

            <div className={s.buttons}>
                {sent
                ? <div><button disabled className={s.sent}>Сообщение успешно отправлено</button></div>
                : <div><button type="submit" className={s.submit}>Отправить</button></div>
                }
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
