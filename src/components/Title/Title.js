import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

const Title = ({title}) => {
  return (
        <div className="title-container">
            <div className="title-container__square"></div>
            <h2>{title}</h2>
        </div>
  );
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;
