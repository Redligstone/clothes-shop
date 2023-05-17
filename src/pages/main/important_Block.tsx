import React from 'react'
import s from './important.module.scss'
import {BiLike} from 'react-icons/bi'
import {BsPatchCheck} from 'react-icons/bs'
import settings from '../../assets/settings.png'

const Important_Block:React.FC = () => {
  return (
    <div className={s.container}>
       <h2>Что для нас важно</h2> 

        <div className={s.points}>
            <div className={s.point}>
                <BsPatchCheck className={s.image}/>
                <h3 className={s.title}>Качество</h3>
                <p className={s.text}>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
            </div>
            
            <div className={s.point}>
                <img src={settings} className={s.image}/>
                <h3 className={s.title}>Скорость</h3>
                <p className={s.text}>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
            </div>

            <div className={s.point}>
                <BiLike className={s.image}/>
                <h3 className={s.title}>Ответственность</h3>
                <p className={s.text}>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
            </div>
        </div>
    </div>
  )
}

export default Important_Block