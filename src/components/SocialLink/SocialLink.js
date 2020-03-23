import React from 'react'
import PropTypes from 'prop-types'
import RemixIcon from '../RemixIcon/RemixIcon'
import './SocialLink.scss'

export const SocialLink = ({ icon, href, fill, size}) => {
    return (
        <li className="social-link"><a href={href}><RemixIcon type={icon} fill={fill} size={size}/></a></li>
    )
}

SocialLink.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.string,
    fill: PropTypes.string,
    size: PropTypes.string
}

SocialLink.displayName = 'SocialLink'

export default SocialLink