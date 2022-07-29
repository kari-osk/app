import React from 'react'
import './style.css'

function Button({ handleClick, disabled, text }) {
  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled || false}
        className='btn'
      >
        {text}
      </button>
    </div>
  )
}

export default Button