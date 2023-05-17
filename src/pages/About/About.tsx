import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import s from './about.module.scss'
import idea from '../../assets/idea.png'
import magic from '../../assets/magic.png'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/categories_slice'

const About:React.FC = () => {
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
              <h1>О бренде</h1>
              <div className={s.path}>
                <Link to='/'>Главная</Link>
                <span className={s.path_made}> — </span>
                <span>О бренде</span>
                <span></span>
              </div>
        </section>
        
        <section className={s.idea}>
          <img src={idea} alt="" />

          <div className={s.info}>
            <h2>Идея и женщина</h2>
            <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
            <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
          </div>
        </section>

        <section className={s.magic}>
          <div className={s.info}>
            <h2>Магия в деталях</h2>
            <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
            <p>
            Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.
          </p>
          </div>
          <img src={magic} alt="" />
        </section>

        <div className={s.button}>
          <Link to='/shop'  >Перейти в магазин</Link>
        </div>
       
      </div>
    </div>
  )
}

export default About