'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={() => alert('é like like like')}>
    Curtir
  </Button>
)

LikeButton.defaultProps = {
  
}

export default LikeButton