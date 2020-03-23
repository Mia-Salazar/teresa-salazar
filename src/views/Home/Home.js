import React from 'react'
import { useTranslation } from 'react-i18next'
import './Home.scss'

const Header = () => {
  const { t } = useTranslation();
  
  var personalityText = [t('home.HR'), t('home.friki'), t('home.bilingual'), t('home.karaoke')];

  textSequence(0);
  function textSequence(i) {
    if (personalityText.length > i) {
      setTimeout(function() {
        document.querySelector(".home__personality").innerHTML = personalityText[i];
        textSequence(++i);
      }, 1000);

    } else if (personalityText.length == i) {
      textSequence(0);
    }
  }

  return (
      <section className="home">
        <h2>{t('home.title')}</h2>
        <p className="home__text">¡Encantada de conocerte! Soy Teresa</p>
        <p className="home__text">Y soy <span className="home__text home__personality"></span></p>
      </section>
  );
}

export default Header;
