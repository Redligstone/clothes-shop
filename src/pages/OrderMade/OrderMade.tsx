import React from 'react'
import s from './orderMade.module.scss'
import {Link, useLocation} from 'react-router-dom'
import {AiOutlineCheck} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/categories_slice'

const OrderMade = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const path = location.pathname

 
  if(path !== '/shop'){
    dispatch(setCategoryId(0))
  }

  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <section className={s.header}>
                <h1>Заказ получен</h1>
                <div className={s.path}>
                    <Link to='/' className={s.link}>Главная</Link>
                    <span className={s.path_made}> — </span>
                    <span className={s.path_made}>Оформление заказа</span>
                    <span> — </span>
                    <span>Заказ получен</span>
                </div>
            </section>

            <section className={s.success}>
              <div className={s.congrats}>
                <span>
                  <AiOutlineCheck className={s.check}/>
                </span>
                <div className={s.text}>
                  <h2>Заказ успешно оформлен</h2>
                  <p>Мы свяжемся с вами в ближайшее время!</p>
                </div>
              </div>

              <Link to='/'>Перейти на главную</Link>
            </section>

        </div>
    </div>
  )
}

export default OrderMade