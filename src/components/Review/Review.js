import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import RemixIcon from '../../components/RemixIcon/RemixIcon'
import './Review.scss'

export const Review = ({title, job, text, iconSize, iconName, onClick }) => {
    const { t } = useTranslation();

    return (
        <article className="review" onClick={onClick}>
            <RemixIcon type={iconName} size={iconSize} />
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
    iconSize: PropTypes.string,
    iconName: PropTypes.string,
    onClick: PropTypes.func
}

Review.displayName = 'Review'

export default Review