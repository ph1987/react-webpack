'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} ></div>
)

Square.defaultProps = {
  color: 'red'
}

export default Square