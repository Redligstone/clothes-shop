import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import s from './colors.module.scss'
import { cartSelector } from "../../redux/slices/cart_slice";

const Colors = ({currentColor,setCurrentColor}) => {

  const colors = [s.brown, s.grey, s.pink, s.yellow];


  const onClickFunc = (index) => {
    setCurrentColor(index)
  };
  return (
    <div className={s.colors}>
      {colors.map((color, index) => {
        return (
          <span
            key={index}
            className={currentColor === index ? `${color} ${s.selected}` : `${color}`}
            onClick={() => onClickFunc(index)}
          >
          </span>
        );
      })}
    </div>
)
};

export default Colors;

