import React from "react";
import s from './cartItem.module.scss'
import {RxCross1} from 'react-icons/rx'
import { useDispatch } from "react-redux";
import { addProduct, minusItem, removeProduct } from "../../redux/slices/cart_slice";
import {Link} from 'react-router-dom'

type Props ={
  id:number,
  title:string,
  price:number,
  count:number,
  imageUrl:string,
  size:number,
  color:number,
}

const CartItem:React.FC<Props> = ({id,title,price,count,imageUrl,size,color}) => {

  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(removeProduct({id,color,size}))
  }
  const minusProduct = () => {
    dispatch(minusItem({id,color,size}))
  }
  const addItem = () =>{
    dispatch(addProduct({id,color,size}))
  }

  const sizes = ["S", "M", "L", "XL", "XLL"];
  const colors = [s.brown, s.grey, s.pink, s.yellow];

  return (
    <div className={s.cart__item}>
      <div className={s.product}>
        <RxCross1 className={s.cross} onClick={removeItem}/>
        <Link to={`/shop/${id}`} >
          <img src={imageUrl} alt="" />
        </Link>
        <Link to={`/shop/${id}`} >
        <span className={s.description}>{title} ({sizes[size]})</span>
        </Link>
        
        <span className={`${s.color} ${colors[color]}`}></span>
      </div>
      <span className={s.price}>{price}₽</span>
      <div className={s.count}>
        <span className={s.minus} onClick={minusProduct}>-</span>
        <span>{count}</span>
        <span className={s.plus} onClick={addItem}>+</span>
      </div>
      <span className={s.total}>{count * price}₽</span>
    </div>
  );
};

export default CartItem;
