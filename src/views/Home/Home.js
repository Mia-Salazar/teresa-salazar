import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import './Home.scss'

const Header = () => {
  const { t } = useTranslation();
  
  var personalityText = ['Human Resources', t('freak'), t('bilingual'), t('karaoke fan')];

  textSequence(0);
  function textSequence(i) {
    if (personalityText.length > i) {
      setTimeout(function() {
        document.querySelector(".home__personality").innerHTML = personalityText[i];
        textSequence(++i);
      }, 1500);

    } else if (personalityText.length == i) {
      textSequence(0);
    }
  }

  return (
    <section className="home">
      <Title title={t('home.title')} />
      <p className="home__text">¡Encantada de conocerte! Soy Teresa</p>
      <p className="home__text">Y soy <span className="home__text home__personality"></span></p>
      <h3 className="home__leading-text">{t('home.project')}</h3>
      <div className="home__projects">
        <article>holi</article>
        <article>holi</article>
        <article>holi</article>
        <article>holi</article>
      </div>
    </section>
  );
}

export default Header;
