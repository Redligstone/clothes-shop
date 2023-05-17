import React from 'react'
import s from './productItem.module.scss'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

type Props = {
  id:number,
  imageUrl:string,
  title:string,
  price:number,
  prevPrice?:number
}

const ProductItem:React.FC<Props> = ({id,imageUrl,title,price,prevPrice}) => {

  const onClickScroll = () =>{
    window.scrollTo(0, 0);
  }

    return(
      <div className={s.container}>
          <Link to={`/shop/${id}`} onClick={onClickScroll}>
            <img src={imageUrl} alt="" />
            {/* <div className={s.background}>
              <BsArrowRight className={s.arrow}/>
            </div> */}

            <h3 className={s.title}>{title} </h3>
          <div>
              {prevPrice ? (
              <div className={s.price}>
                  <span className={s.prevPrice}>₽{prevPrice}</span> 
                  <span>{price}</span>
              </div>
              )
              :(<span className={s.price}>{price} ₽</span>)
              }
          </div>
          </Link>
          
      </div>
    )
  }

export default ProductItem