import React from 'react'
import { useTranslation } from 'react-i18next'

export const Pss = ({activePss }) => {
    const { t } = useTranslation();
    
    return (
        <>
        <h4>{t('experience.two.title')}</h4>
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
        </>
    )
}

Pss.displayName = 'Pss'

export default Pss