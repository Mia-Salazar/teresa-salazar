import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import Open from '../../components/ExperienceJob/Open'
import Pss from '../../components/ExperienceJob/Pss'
import Drago from '../../components/ExperienceJob/Drago'
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import './Experience.scss'

import openLogo from '../../assets/images/open-logo.png'
import pssLogo from '../../assets/images/pss-logo.png'
import dragoLogo from '../../assets/images/drago-logo.png'

const Experience = () => {
  const [active, setActive] = useState(false)
  const [activePss, setActivePss] = useState(false)
  const [activeDrago, setActiveDrago] = useState(false)

  const toggleActive = type => {
    if (type === 'pss') {
      setActivePss(!activePss)
      if (active === true | activeDrago === true) {
        setActive(false)
        setActiveDrago(false)
      }
    }  else if (type === 'drago') {
      setActiveDrago(!activeDrago)
      if (active === true | activePss === true) {
        setActive(false)
        setActivePss(false)
      }
    } else {
      setActive(!active)
      if (activeDrago === true | activePss === true) {
        setActivePss(false)
        setActiveDrago(false)
      }
    }
  }
 
  const { t } = useTranslation();

  return (
    <section className="experience">
      <Title title={t('experience.title')} />
      <p className="text">{t('experience.subtitle')}</p>
      <h2 className="leading-text">{t('experience.click')}</h2>
      <article className={active | activePss | activeDrago ? "experience__mosaic experience__mosaic--active" : "experience__mosaic" }>
        <figure className={active ? "experience__mosaic-image open" : activeDrago ? "experience__mosaic-image drago" : activePss ? "experience__mosaic-image pss" : "experience__mosaic-image" }>
          <img className="experience__logo" src={active ? openLogo : activeDrago ? dragoLogo : activePss ? pssLogo : '' } alt={t('experience.alt')} />
        </figure>
        <div className="experience__mosaic-text">
          {
          active ? <Open active={active}/> :
          activePss ? <Pss activePss={activePss}/> :
          activeDrago ? <Drago activeDrago={activeDrago}/> : ''
          }
        </div>
      </article>
      <div className="experience__item-container">
        <ExperienceItem onClick={() => toggleActive('open')} active={active} title={t('experience.one.title')} year={t('experience.one.year')} subtitle={t('experience.one.company')}>
          <p className="experience-item__text">{t('experience.one.description')}</p>
          <p className="experience-item__text">{t('experience.one.descriptionTwo')}</p>
          <ul className="experience-item__list">
            <li>{t('experience.one.list')}</li>
            <li>{t('experience.one.listTwo')}</li>
            <li>{t('experience.one.listThree')}</li>
            <li>{t('experience.one.listFour')}</li>
            <li>{t('experience.one.listFive')}</li>
            <li>{t('experience.one.listSix')}</li>
            <li>{t('experience.one.listSeven')}</li>
            <li>{t('experience.one.listEight')}</li>
            <li>{t('experience.one.listNine')}</li>
            <li>{t('experience.one.listTen')}</li>
          </ul>
        </ExperienceItem>
        <ExperienceItem onClick={() => toggleActive('pss')} activePss={activePss} title={t('experience.two.title')} year={t('experience.two.year')} subtitle={t('experience.two.company')}>
          <p className="experience-item__text">{t('experience.two.description')}</p>
          <ul className="experience-item__list">
            <li>{t('experience.two.list')}</li>
            <li>{t('experience.two.listTwo')}</li>
            <li>{t('experience.two.listThree')}</li>
            <li>{t('experience.two.listFour')}</li>
            <li>{t('experience.two.listFive')}</li>
            <li>{t('experience.two.listSix')}</li>
            <li>{t('experience.two.listSeven')}</li>
            <li>{t('experience.two.listEight')}</li>
            <li>{t('experience.two.listNine')}</li>
            <li>{t('experience.two.listTen')}</li>
            <li>{t('experience.two.listEleven')}</li>
            <li>{t('experience.two.listTwelve')}</li>
          </ul>
        </ExperienceItem>
        <ExperienceItem onClick={() => toggleActive('drago')} activeDrago={activeDrago} title={t('experience.three.title')} year={t('experience.three.year')} subtitle={t('experience.three.company')}>
          <p className="experience-item__text">{t('experience.three.description')}</p>
          <ul className="experience-item__list">
            <li>{t('experience.three.list')}</li>
            <li>{t('experience.three.listTwo')}</li>
            <li>{t('experience.three.listThree')}</li>
            <li>{t('experience.three.listFour')}</li>
            <li>{t('experience.three.listFive')}</li>
            <li>{t('experience.three.listSix')}</li>
            <li>{t('experience.three.listSeven')}</li>
            <li>{t('experience.three.listEight')}</li>
            <li>{t('experience.three.listNine')}</li>
          </ul>
        </ExperienceItem>
      </div>
    </section>
  );
}

export default Experience;
