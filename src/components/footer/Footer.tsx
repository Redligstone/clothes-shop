import React from 'react'
import { Link, useLocation } from "react-router-dom";
import s from './footer.module.scss'
import dress from "../../assets/header__dress.png";
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import VisaMC from '../../assets/visa-mastercard 1.png'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, setCategoryId } from '../../redux/slices/categories_slice';

const Footer:React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    const transitScroll = () => {
        window.scrollTo(0,0)
    }

    const {categoryId} = useSelector(categoriesSelector);
    const dispatch = useDispatch()

    const onclickTransit = (id) => {
        dispatch(setCategoryId(id))
    }

    const categories = ['Пальто','Свитшоты','Кардиганы','Толстовки' ]



  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <section className={s.rights__block}>
                <Link onClick={() => window.scrollTo(0,0)} to='/' className={s.logo}>
                    <img src={dress} className={s.dress} />
                    <span>WOMAZING</span>
                </Link>
                <p>© Все права защищены </p>
                <p>Политика конфиденциальности</p>
                <p>Публичная оферта</p>
            </section>
    
            <section className={s.nav__block}>
                <ul className={s.nav}>
                    <li className={s.column}>
                        <Link to='/' onClick={transitScroll} className={path === '/' ? `${s.list__header} ${s.selected}` : `${s.list__header} `}>Главная</Link>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </li>
    
                    <li className={s.column}>
                        <Link to='/shop' onClick={transitScroll} className={path === '/shop' ? `${s.list__header} ${s.selected}` : `${s.list__header} `}>Магазин</Link>
                            <ul>
                                {
                                categories.map((category,id) => <li><Link to='/shop' onClick={() => onclickTransit(id + 1)}>{category}</Link></li>)
                                }
                            </ul>
                    </li>
    
                    <li className={s.column}>
                        <Link to='/about' onClick={transitScroll} className={path === '/about' ? `${s.list__header} ${s.selected}` : `${s.list__header} `}>О бренде</Link>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </li>
    
                    <li className={s.column}>
                        <Link to='/contacts' onClick={transitScroll} className={path === '/contacts' ? `${s.list__header} ${s.selected}` : `${s.list__header} `}>Контакты</Link>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </li>
                    
                </ul>
            </section>
    
            <section className={s.info__block}>
                <a href="tel:+1234567890" >+7-(495)-823-54-12</a>
                <Link to='/contacts' className={s.link} type='email' onClick={() => window.scrollTo(0,850)}>hello@womazing.com</Link>
                <div className={s.social}>
                    <a href="https://instagram.com/"><AiOutlineInstagram className={s.icon}/></a>
                    <a href="https://facebook.com/"><AiOutlineFacebook className={s.icon}/></a>
                    <a href="https://twitter.com/"><FiTwitter className={s.icon}/></a>
                </div>
    
                <div>
                   <img src={VisaMC} alt="" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Footer