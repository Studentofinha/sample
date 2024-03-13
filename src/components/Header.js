import React from 'react'
import product from './product'
import Footer from './Footer'

const Header = () => {

  return (
    <div>
      This is header
      <Footer product={product} />
    </div>
  )
}

export default Header
