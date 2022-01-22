import React from 'react'
import PropTypes from 'prop-types'
import './ExperienceItem.scss'

export const ExperienceItem = ({title, subtitle, year, children, active, onClick, activePss, activeDrago, activeOpen }) => {
    return (
        <article className={active | activeOpen | activeDrago | activePss ? "experience-item active" : "experience-item" } onClick={onClick}>
            <h3 className="experience-item__title">{title}</h3>
            <p className="experience-item__subtitle">{subtitle}</p>
            <p className="experience-item__year">{year}</p>
            <div className={active | activeOpen | activeDrago | activePss ? "experience-item__info experience-item__info--active" : "experience-item__info" } >
                {children}
            </div>
        </article>
    )
}

ExperienceItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    subtitle: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}

ExperienceItem.displayName = 'ExperienceItem'

export default ExperienceItem