import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

export const Input = ({ type, id, label, name, ...rest}) => {
    return (
        <label className="input-container" for={id}>
        {label}
            <input type={type} placeholder={label} name={name} id={id} {...rest} className="input"/>
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
}

Input.displayName = 'Input'

export default Input