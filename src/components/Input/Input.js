import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

export const Input = ({ type, id, label, name, ...rest}) => {
    return (
        <label className="input-container" htmlFor={id}>
        {label}
            <input type={type} placeholder={label} name={name} id={id} {...rest} className="input"/>
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

Input.displayName = 'Input'

export default Input