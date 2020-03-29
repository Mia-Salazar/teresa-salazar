import React from 'react'
import PropTypes from 'prop-types'
import './Review.scss'

export const Review = ({title, job, text, src, alt, onClick }) => {

    return (
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
    )
}

Review.propTypes = {
    title: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    text: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func
}

Review.displayName = 'Review'

export default Review