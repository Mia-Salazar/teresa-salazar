import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from "react-multi-carousel";
import TextLoop from "react-text-loop";
import LazyLoad from 'react-lazyload';
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
import coronaImage from '../../assets/images/corona-dark.png'
import juan from '../../assets/images/juan.jpg'
import luis from '../../assets/images/luis.jpg'
import irene from '../../assets/images/irene.jpg'
import gonzalo from '../../assets/images/gonzalo.jpg'

const Home = () => {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
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

  return (
    <section className="home">
      <Title title={t('home.title')} />
      <div className="text">{t('header.am')} <span className="home__personality"><TextLoop springConfig={{ stiffness: 180, damping: 8 }} children={["Teresa Salazar", "Human Resources", "friki as hell", "karaoke fan", "Recruiter"]} /></span></div>
      <p className="text">{t('header.about')}</p>
      <p className="text">{t('header.aboutTwo')}</p>
      <h3 className="leading-text">{t('home.project')}</h3>
      <div className="home__projects">
      <Carousel responsive={responsive} showDots={true} infinite={true} containerClass="home__carousel" keyBoardControl={true} dotListClass="home__carousel-dot">
        <LazyLoad throttle={200} height={50}>
          <Article title={t('article.article1.title')} link="https://medium.com/@tsalazargr/el-algoritmo-de-apple-card-es-el-nuevo-test-de-inteligencia-877114351efa" imageUrl={cardImage} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <Article title={t('article.article2.title')} link="https://medium.com/@tsalazargr/7-seres-de-ultratumba-que-encontrar%C3%A1s-en-una-oficina-632e25120b55" imageUrl={pumpkinImage} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <Article title={t('article.article3.title')} link="https://www.linkedin.com/pulse/se-busca-madre-social-los-peligros-de-la-tecnolog%C3%ADa-teresa/" imageUrl={wantedImage} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <Article title={t('article.article4.title')} link="https://www.youtube.com/watch?v=Z7gQGcVtBiM/" imageUrl={pyconesImage} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <Article title={t('article.article5.title')} link="https://www.facebook.com/85638467171/videos/318707818747458/?t=2" imageUrl={openImage} />
        </LazyLoad>
        <LazyLoad throttle={200} height={50}>
          <Article title={t('article.article6.title')} link="https://medium.com/@tsalazargr/el-humor-en-los-tiempos-del-coronavirus-2efa7ec8ddfe" imageUrl={coronaImage} />
        </LazyLoad>
      </Carousel>
      </div>
      <h3 className="leading-text leading-text--review">{t('opinion.title')}</h3>
      <div className="home__reviews">
        <Review href="https://www.linkedin.com/in/irene-castro-s%C3%A1nchez-3a7b2b171/" aria={t('opinion.four.aria')} title={t('opinion.four.name')} src={irene} alt={t('opinion.four.alt')} job={t('opinion.four.job')} text={t('opinion.four.text')}/>
        <Review href="https://www.linkedin.com/in/juanmanuel-perez/" aria={t('opinion.one.aria')} title={t('opinion.one.name')} src={juan} alt={t('opinion.one.alt')} job={t('opinion.one.job')} text={t('opinion.one.text')}/>
        <Review href="https://www.linkedin.com/in/luis-vidaechea-benito-35303255/" aria={t('opinion.two.aria')} title={t('opinion.two.name')} src={luis} alt={t('opinion.two.alt')} job={t('opinion.two.job')} text={t('opinion.two.text')}/>
        <Review href="https://www.linkedin.com/in/gonzalo-pareja-bola%C3%B1os-b0017b6/" aria={t('opinion.three.aria')} title={t('opinion.three.name')} src={gonzalo} alt={t('opinion.three.alt')} job={t('opinion.three.job')} text={t('opinion.three.text')}/>
      </div>
    </section>
  );
}

export default Home;
