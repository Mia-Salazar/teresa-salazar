import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import './MasonryItem.scss'

export const MasonryItem = ({title, text, alt, link, src, video, videoURL, ...rest}) => {
    const { t } = useTranslation();

    
    return (
        <article className="my-masonry-grid_column masonry-item">
            {video ? 
            <iframe title={title} src={videoURL} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen scrolling="no" style={{padding:0}} ></iframe> 
            :(
                <figure className="masonry-item__img-container">
                    <img src={src} className="masonry-item__img" alt={alt} />
                </figure>
            )}

            <div className="masonry-item__text-container">
                <h4 className="masonry-item__title">{title}</h4>
                <p className="masonry-item__text">{text}</p>
                <a className="masonry-item__link" href={link} target="_blank" rel="noreferrer noopener">{t('article.cta')}</a>
            </div>
        </article>
    )
}

MasonryItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    alt: PropTypes.string,
    videoURL: PropTypes.string,
    src: PropTypes.string,
    video: PropTypes.bool,
    link: PropTypes.string.isRequired,
}

MasonryItem.displayName = 'MasonryItem'

export default MasonryItem