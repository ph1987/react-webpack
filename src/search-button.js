'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => alert('search')}>
    Search
  </Button>
)

SearchButton.defaultProps = {
  
}

export default SearchButton