import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./cart.module.scss";
import { BsCartX } from "react-icons/bs";
import CartItem from "../../components/CartItem/CartItem";
import { cartSelector } from "../../redux/slices/cart_slice";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/categories_slice";

const Cart = () => {
  const { items, totalPrice } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  if (path !== "/shop") {
    dispatch(setCategoryId(0));
  }

  if (!items.length) {
    window.scrollTo(0, 0);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <section className={s.header}>
          <h1>Корзина</h1>
          <div className={s.path}>
            <Link to="/">Главная</Link>
            <span className={s.path_made}> — </span>
            <span>Корзина</span>
            <span></span>
          </div>
        </section>

        {items.length ? (
          <section className={s.cart}>
            <div className={s.cart__header}>
              <div className={s.table}>
                <div>Товар</div>
                <div>Цена</div>
                <div>Количество</div>
                <div>Всего</div>
              </div>
              <span className={s.underline}></span>
            </div>

            <div className={s.cart__items}>
              {items.map((item, key) => (
                <CartItem
                  key={key}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  color={item.color}
                  count={item.count}
                  id={item.id}
                  size={item.size}
                />
              ))}
            </div>
          </section>
        ) : (
          <section className={s.empty}>
            <BsCartX className={s.empty__cart} />
            <h2>В вашей корзине ещё нет товаров...</h2>
            <p>
              Прежде чем сделать заказ, вам необходимо добавить товары из
              магазина.
            </p>
            <Link to="/shop">Перейти в магазин</Link>
          </section>
        )}

        {items.length ? (
          <section className={s.coupon}>
            <input type="text" placeholder="Введите купон" />
            <button>Применить купон</button>
          </section>
        ) : (
          ""
        )}

        {items.length ? (
          <section className={s.order}>
            <div className={s.price}>
              <span>Итого:</span>
              <span className={s.totalPrice}>{totalPrice} ₽</span>
            </div>
            <Link to={items.length && "/orderForm"}>Оформить заказ</Link>
          </section>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
