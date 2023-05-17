import React from "react";
import s from './sizes.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector } from "../../redux/slices/cart_slice";


const Sizes = ({currentSize,setCurrentSize}) => {
const dispatch = useDispatch()
const size = useSelector(cartSelector)
// const [currentSize,setCurrentSize] = React.useState(0) 
console.log(size.size)
  const sizes = ["S", "M", "L", "XL", "XXL"];
 
  const onClickFunc = (index) => {
    setCurrentSize(index)
  };


  return (
    <div className={s.sizes}>
      {sizes.map((size, index) => {
        return (
          <span
            key={index}
            className={currentSize === index ? `${s.selected}` : ""}
            onClick={() => onClickFunc(index)}
          >
            {size}
          </span>
        );
      })}
    </div>
  );
};

export default Sizes;
