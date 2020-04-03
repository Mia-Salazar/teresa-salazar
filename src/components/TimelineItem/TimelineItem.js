import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames';
import './TimelineItem.scss'

export const TimelineItem = ({title, subtitle, year, direction = 'right', moreInfo,className, moreText }) => {
    const classes = classNames('timeline-item', direction, className)
    const [openDropdown, setOpenDropdown] = useState(false)
    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
      }

    const { t } = useTranslation();
    return (
        <article className={classes}>
            <div className="timeline-item__text-container">
                <h3 className="timeline-item__title">{title}</h3>
                <p className="timeline-item__subtitle">{subtitle}</p>
                <p className="timeline-item__year">{year}</p>
                {moreInfo && (
                    <div className="timeline-item__dropdown">
                        <button className="timeline-item__dropdown-button" onClick={toggleDropdown}>{t('education.more')}</button>
                        <p className={openDropdown ? 'timeline-item__dropdown-text timeline-item__dropdown-text--open': 'timeline-item__dropdown-text'}>{moreText}</p>
                    </div>

                )}
            </div>
            <span className="timeline-item__circle"></span>
        </article>
    )
}

TimelineItem.propTypes = {
    className: PropTypes.string,
    moreTex: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    moreInfo: PropTypes.bool,
    subtitle: PropTypes.string.isRequired,
    direction: PropTypes.string,
}

TimelineItem.displayName = 'TimelineItem'

export default TimelineItem