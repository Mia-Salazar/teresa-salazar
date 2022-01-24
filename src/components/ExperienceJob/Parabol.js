import React from 'react'
import { useTranslation } from 'react-i18next'

export const Parabol = ({active }) => {
    const { t } = useTranslation();

    return (
        <>
            <p className="experience-item__text">{t('experience.cero.description')}</p>
            <p className="experience-item__text">{t('experience.cero.descriptionTwo')}</p>
            <ul className="experience-item__list">
                <li>{t('experience.cero.list')}</li>
                <li>{t('experience.cero.listTwo')}</li>
                <li>{t('experience.cero.listThree')}</li>
                <li>{t('experience.cero.listFour')}</li>
                <li>{t('experience.cero.listFive')}</li>
                <li>{t('experience.cero.listSix')}</li>
                <li>{t('experience.cero.listSeven')}</li>
                <li>{t('experience.cero.listEight')}</li>
                <li>{t('experience.cero.listNine')}</li>
                <li>{t('experience.cero.listTen')}</li>
                <li>{t('experience.cero.listEleven')}</li>
            </ul>
        </>
    )
}

Parabol.displayName = 'Parabol'

export default Parabol