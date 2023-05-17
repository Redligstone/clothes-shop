import React from "react";
import s from "./orderForm.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cartSelector } from "../../redux/slices/cart_slice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { clearProducts } from "../../redux/slices/cart_slice";
import { setCategoryId } from "../../redux/slices/categories_slice";


const OrderForm = () => {
  const { items, totalPrice } = useSelector(cartSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const sizes = ["S", "M", "L", "XL", "XLL"];
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
    if (!values.country) {
      errors.country = "Поле Страна обязательно";
    }
    if (!values.city) {
      errors.city = "Поле Город обязательно";
    }
    if (!values.street) {
      errors.street = "Поле Улица обязательно";
    }
    if (!values.house) {
      errors.house = "Поле Дом обязательно";
    }
    if (!values.flat) {
      errors.flat = "Поле Квартира обязательно";
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
      country: "",
      city: "",
      street: "",
      house: "",
      flat: "",
    },
    validate,
    onSubmit: (values) => {
      navigate('/orderMade')
      const order = {данные:values,товары:items,цена:totalPrice}
      alert("Можете проверить данные своего заказа в консоли")
      console.log(order);
      dispatch(clearProducts())
    },
  });

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <section className={s.header}>
          <h1>Оформление заказа</h1>
          <div className={s.path}>
            <Link to='/' className={s.path_made}>Главная</Link>
            <span className={s.path_made}> — </span>
            <span>Оформление заказа</span>
            <span></span>
          </div>
        </section>

        
          <form onSubmit={formik.handleSubmit}>
           <section className={s.main}>
              <div className={s.client__info}>
                <div className={s.data}>
                  <h2>Данные покупателя</h2>
                  <input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className={s.error}>{formik.errors.name}</div>
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
                    <div className={s.error}>{formik.errors.email}</div>
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
                    <div className={s.error}>{formik.errors.phone}</div>
                  )}
                </div>
  
                <div className={s.adress}>
                  <h2>Адрес получателя</h2>
  
                  <input
                    type="text"
                    placeholder="Страна"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.country && formik.errors.country && (
                    <div className={s.error}>{formik.errors.country}</div>
                  )}
  
                  <input
                    type="text"
                    placeholder="Город"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className={s.error}>{formik.errors.city}</div>
                  )}
  
                  <input
                    type="text"
                    placeholder="Улица"
                    name="street"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.street && formik.errors.street && (
                    <div className={s.error}>{formik.errors.street}</div>
                  )}
                  <input
                    type="number"
                    placeholder="Дом"
                    name="house"
                    value={formik.values.house}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.house && formik.errors.house && (
                    <div className={s.error}>{formik.errors.house}</div>
                  )}
  
                  <input
                    type="number"
                    placeholder="Квартира"
                    name="flat"
                    value={formik.values.flat}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.flat && formik.errors.flat && (
                    <div className={s.error}>{formik.errors.flat}</div>
                  )}
                </div>
              </div>
  
              <div className={s.about__order}>
                <div className={s.info__about}>
                  <h2>Ваш заказ</h2>
                  <div className={s.head__about}>
                    <span>Товар</span>
                    <span>Всего</span>
                  </div>
                  <div className={s.items__about}>
                    {items.map((item) => (
                      <div className={s.item}>
                        <span>
                          {item.count} x {item.title}({sizes[item.size]})
                        </span>
                        <span>{item.price}₽</span>
                      </div>
                    ))}
                  </div>
                  <div className={s.total__about}>
                    <span>Итого</span>
                    <span>{totalPrice}₽</span>
                  </div>
                </div>
  
                <div className={s.payment}>
                  <h2>Способы оплаты</h2>
                  <div>
                    <input type="radio" />
                    <span>Оплата наличными</span>
                  </div>
                  <button type="submit"> Разместить заказ
                  </button>
                </div>
              </div>
           </section>
          </form>
      </div>
    </div>
  );
};

export default OrderForm;
