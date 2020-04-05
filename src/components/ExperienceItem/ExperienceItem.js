import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './ExperienceItem.scss'

export const ExperienceItem = ({title, subtitle, year, active, className, children }) => {
    const classes = classNames('timeline-item', active, className)
    // const [openDropdown, setOpenDropdown] = useState(false)
    // const toggleDropdown = () => {
    //     setOpenDropdown(!openDropdown)
    //   }


    return (
        <article className={classes}>
            <div className="experience-item__text-container">
                <h3 className="experience-item__title">{title}</h3>
                <p className="experience-item__subtitle">{subtitle}</p>
                <p className="experience-item__year">{year}</p>
                <div>
                    {children}
                </div>
            </div>
        </article>
    )
}

ExperienceItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    subtitle: PropTypes.string,
    active: PropTypes.string,
    children: PropTypes.node
}

ExperienceItem.displayName = 'ExperienceItem'

export default ExperienceItem