import React from 'react'
import { useTranslation } from 'react-i18next'

export const Drago = ({activeDrago }) => {
    const { t } = useTranslation();
    
    return (
        <>
            <h4>{t('experience.three.title')}</h4>
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
        </>
    )
}

Drago.displayName = 'Drago'

export default Drago