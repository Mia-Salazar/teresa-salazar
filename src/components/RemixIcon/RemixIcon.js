import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './RemixIcon.scss'

export const RemixIcon = ({ type, size = '1x', fill = 'line', color = 'black', className,}) => {
    const classes = classNames('remix-icon',`ri-${type}-${fill}`,`ri-${size}`, color, className)
    return (
        <i className={classes} role='presentation'/>
    )
}

RemixIcon.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    fill: PropTypes.string,
}

RemixIcon.displayName = 'RemixIcon'

export default RemixIcon