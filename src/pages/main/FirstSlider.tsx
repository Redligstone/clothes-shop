import React, { useState } from "react";
// import "./main.scss";
import { Link } from "react-router-dom";
import s from "./1stSlider.module.scss";
import {BsArrowDown} from 'react-icons/bs'
import left from '../../assets/fist__Block-left.png'
import middle from '../../assets/first__block-middle.png'
import right from '../../assets/first__block-right.png'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: "Новейшие поступления в этом сезоне", description: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать." },
    { title: "Новые поступления в следующем сезоне", description: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.Время исскать" },
    { title: "Старые поступления в прошлом сезоне", description: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время покупать." },
  ];

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={s.slider}>
      <section className={s.slide}>
        <h1 className={s.title}>{slides[currentIndex].title}</h1>
        <div className={s.description}><p>{slides[currentIndex].description}</p></div>
        <div className={s.button__block}>
          <span><BsArrowDown className={s.arrow}/></span>
          <Link to="/shop"><p>Открыть магазин</p></Link>
        </div>
      </section>

      <div className={s.pages__container}>
        {slides.map((slide, slideIndex) => (
          <div className={s.page__container} onClick={() => goToSlide(slideIndex)}>
            <div
              className={currentIndex === slideIndex ? s.page__active : s.page}
              key={slideIndex}
            >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FirstSlider: React.FC = () => {
  return (
    <section className={s.container}>
      <div className={s.firstSlider__block}>
    
        <ImageSlider />
    
        <div className={s.images}>
          <div className={s.images__container}>
              <img src={left} className={s.left}/>
              <img src={middle} className={s.middle}/>
              <img src={right} className={s.right}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSlider;
