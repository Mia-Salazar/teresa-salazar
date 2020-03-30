import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './Button.scss'

export const Button = ({ text, type, className, variant, ...rest}) => {
    const classes = classNames (className, {
        button: true,
        [variant]: variant,

    })
    return (
        <button className={classes} type={type}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    variant: PropTypes.string
}

Button.displayName = 'Button'

export default Button