import React from 'react'
import s from './preloader.module.scss'
import preloader from '../../assets/flower.gif'

const Preloader = () => {
  return (
    <div className={s.main}>
        <img src={preloader} className={s.preloaderImg}/>
    </div>
  )
}

export default Preloader