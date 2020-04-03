import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import './Article.scss'

export const Article = ({title, text, link, imageUrl}) => {
    const { t } = useTranslation();

    return (
        <article className="article" style={{backgroundImage: `url(${imageUrl})` }}>
            <h4 className="article__title">{title}</h4>
            <p className="article__text">{text}</p>
            <a className="article__link" href={link} target="_blank" rel="noreferrer noopener">{t('article.cta')}</a>
        </article>
    )
}

Article.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    link: PropTypes.string.isRequired,
}

Article.displayName = 'Article'

export default Article