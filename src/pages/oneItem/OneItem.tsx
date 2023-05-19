import React, { useEffect, useState } from "react";
import s from "./oneitem.module.scss";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useDispatch} from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Sizes from "../../components/sizes/Sizes";
import Colors from "../../components/colors/Colors";
import {
  CartItem,
  addProduct,
} from "../../redux/slices/cart_slice";
import Preloader from '../../components/preloadcer/preloader'
import { setCategoryId } from "../../redux/slices/categories_slice";

const OneItem: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<CartItem>();
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [interestingProducts, setInterestingProducts] = useState([]);
  const dispatch = useDispatch();
  const [loaded,setLoaded] = useState(false)
  const location = useLocation()
  const path = location.pathname


  if(path !== '/shop'){
    dispatch(setCategoryId(0))
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoaded(false)
        const { data } = await axios.get(
          "https://6440292eb9e6d064be09816e.mockapi.io/shop/" + id
        );
        setProduct(data);
        setCurrentCategory(data.category);
        setLoaded(true)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [id]);

  React.useEffect(() => {
    async function fetchInterestingProducts() {
      try {
        const { data } = await axios.get(
          `https://6440292eb9e6d064be09816e.mockapi.io/shop?category=${product?.category}`
        );
        setInterestingProducts(data.filter((item) => item.id !== product.id));
      } catch (error) {
        console.log(error);
      }
    }
    fetchInterestingProducts();
  }, [product]);

  const addProductToCart = () => {
    const cartProduct: CartItem = {
      id: Number(id),
      title: product.title,
      size: currentSize,
      color: currentColor,
      price: product.price,
      imageUrl: product.imageUrl,
      count: 0,
    };
    dispatch(addProduct(cartProduct));
  };

  if (!product) {
    return (
      <div className={s.empty}>
        <h2>Загрузка</h2>
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      { loaded 
      ?
        <div className={s.container}>
          <section className={s.header}>
            <h1>{product.title}</h1>
            <div className={s.path}>
              <Link to="/" className={`${s.current} ${s.link}`}>
                Главная
              </Link>
              <span className={s.current}> — </span>
              <Link to="/shop" className={`${s.current} ${s.link}`}>
                Магазин
              </Link>
              <span className={s.current}></span>
              <span className={s.current}> — </span>
              <span>{product.title}</span>
            </div>
          </section>

          <section className={s.main}>
            <div className={s.image}>
              <img src={product.imageUrl} alt="" />
            </div>

            <div className={s.info}>
              <h2>
                <span className={s.price}>{product.price}₽</span>
                <span className={s.prevPrice}>{product.prevPrice}</span>
              </h2>

              <div className={s.size}>
                <span className={s.choose}>Выберите размер</span>
                <Sizes
                  currentSize={currentSize}
                  setCurrentSize={setCurrentSize}
                />
              </div>

              <div className={s.color}>
                <span className={s.choose}>Выберите цвет</span>
                <Colors
                  currentColor={currentColor}
                  setCurrentColor={setCurrentColor}
                />
              </div>

              <div className={s.add}>
                <span className={s.counter}>1</span>
                <button onClick={addProductToCart}>Добавить в корзину</button>
              </div>
            </div>
          </section>

          <section className={s.interesting}>
            <h2>Связанные товары</h2>
            <div className={s.items}>
              {interestingProducts.map((product) => (
                <ProductItem
                  id={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          </section>
        </div>
        :
        <Preloader/>
      }
    </div>
  );
};

export default OneItem;
