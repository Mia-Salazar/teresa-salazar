import React from 'react'
import { useTranslation } from 'react-i18next'

export const Open = ({active }) => {
    const { t } = useTranslation();

    return (
        <>
            <h4>{t('experience.one.title')}</h4>
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
                { t('experience.one.listEleven') &&
                <>
                    <li>{t('experience.one.listEleven')}</li>
                    <li>{t('experience.one.listTwelve')}</li>
                    <li>{t('experience.one.listThirteen')}</li>
                </>
                }
            </ul>
        </>
    )
}

Open.displayName = 'Open'

export default Open