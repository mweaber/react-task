import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ color, text }) => {
    return <button className='btn' style={{ backgroundColor: color }}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}


export default Button
