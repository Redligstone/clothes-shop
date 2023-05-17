import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./dreamTeam.module.scss";
import image from "../../assets/dream_team.png";
import image2 from '../../assets/dream-team-2.jpg'
import image3 from '../../assets/dream_team3.jpg'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: image },
    { image: image2 },
    { image: image3 },
    ];

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={s.slider}>
      <section className={s.slide}>
        <div className={s.images__block}>
          <Link to="/">
            <img src={slides[currentIndex].image} />

            <div className={s.pages__container}>
              {slides.map((slide, slideIndex) => (
                <div className={s.page__container} onClick={() => goToSlide(slideIndex)}>
                    <div
                      className={
                        currentIndex === slideIndex ? s.page__active : s.page
                      }
                      key={slideIndex}
                      
                    ></div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

const DreamTeam = () => {
  return (
    <div className={s.container}>
      <div className={s.slider__block}>
        <h2>Команда мечты Womazing</h2>
        <ImageSlider />
      </div>

      <div className={s.description__block}>
            <h3>Для каждой</h3>
            <div>
                <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                <Link to='/'>Подробнее о бренде</Link>
            </div>
      </div>
    </div>
  );
};

export default DreamTeam;
