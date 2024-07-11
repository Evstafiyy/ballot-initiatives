import React from 'react'
import './Button.css'


function Button({buttonName, buttonClass, onClickFunc, type = 'button'}) {
  return (
	<button className={buttonClass} onClick={onClickFunc}>{buttonName}</button>
  )
}

export default Button