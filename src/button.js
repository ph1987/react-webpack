'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

Button.defaultProps = {
  
}

export default Button