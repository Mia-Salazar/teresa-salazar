import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from '../../components/Title/Title'
import Article from '../../components/Article/Article'
import Review from '../../components/Review/Review'
import './Home.scss'

import cardImage from '../../assets/images/card.jpg'
import pumpkinImage from '../../assets/images/halloween.jpg'
import wantedImage from '../../assets/images/wanted.jpg'
import pyconesImage from '../../assets/images/pycones.JPG'
import openImage from '../../assets/images/open.JPG'

const Home = () => {
  const { t } = useTranslation();
  
  var personalityText = ['Teresa', 'Human Resources', t('freak'), t('bilingual'), t('karaoke fan')];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1800 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };

  textSequence(0);
  function textSequence(i) {
    if (personalityText.length > i) {
      setTimeout(function() {
        document.querySelector(".home__personality").innerHTML = personalityText[i];
        textSequence(++i);
      }, 1500);

    } else if (personalityText.length === i) {
      textSequence(0);
    }
  }

  return (
    <section className="home">
      <Title title={t('home.title')} />
      <p className="home__text">Soy <span className="home__text home__personality"></span></p>
      <p className="home__text">{t('header.about')}</p>

      <h3 className="home__leading-text">{t('home.project')}</h3>
      <div className="home__projects">
      <Carousel responsive={responsive} showDots={true} infinite={true} containerClass="home__carousel" keyBoardControl={true} dotListClass="home__carousel-dot">
        <Article title={t('article.article1.title')} link="https://medium.com/@tsalazargr/el-algoritmo-de-apple-card-es-el-nuevo-test-de-inteligencia-877114351efa" imageUrl={cardImage} />
        <Article title={t('article.article2.title')} link="https://medium.com/@tsalazargr/7-seres-de-ultratumba-que-encontrar%C3%A1s-en-una-oficina-632e25120b55" imageUrl={pumpkinImage} />
        <Article title={t('article.article3.title')} link="https://www.linkedin.com/pulse/se-busca-madre-social-los-peligros-de-la-tecnolog%C3%ADa-teresa/" imageUrl={wantedImage} />
        <Article title={t('article.article4.title')} link="https://www.youtube.com/watch?v=Z7gQGcVtBiM/" imageUrl={pyconesImage} />
        <Article title={t('article.article5.title')} link="https://www.facebook.com/85638467171/videos/318707818747458/?t=2" imageUrl={openImage} />
      </Carousel>;
      </div>
      <h3 className="home__leading-text">{t('opinion.title')}</h3>
      <div className="home__reviews">
        <Review title={t('opinion.one.name')} iconName="medal-2" job={t('opinion.one.job')} text={t('opinion.one.text')} iconSize="3x"/>
        <Review title={t('opinion.two.name')} iconName="medal-2" job={t('opinion.two.job')} text={t('opinion.two.text')}/>
        <Review title={t('opinion.three.name')} iconName="medal-2" job={t('opinion.three.job')} text={t('opinion.three.text')}/>
      </div>
    </section>
  );
}

export default Home;
