import React from 'react'
import PropTypes from 'prop-types'
import './Review.scss'

export const Review = ({title, job, text, src, alt, onClick, aria, href }) => {

    return (
        <a class="review-link" href={href} target="_blank" aria-label={aria} rel="noreferrer noopener">
            <article className="review" onClick={onClick}>
                <figure className="review__img-container">
                    <img alt={alt} src={src} className="review__img"/>
                </figure>
                <div className="review__text-container">
                    <h4 className="review__title">{title}</h4>
                    <p className="review__job">{job}</p>
                    <p className="review__text">{text}</p>
                </div>
            </article>
        </a>
    )
}

Review.propTypes = {
    title: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    aria: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Review.displayName = 'Review'

export default Review