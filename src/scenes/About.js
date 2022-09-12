import React from 'react'

import Header from '../componets/Header'
import Footer from '../componets/Footer'
import AMain1 from '../componets/about/AMain1'
import AMain2 from '../componets/about/AMain2'
import AMain3 from '../componets/about/AMain3'
import AMain4 from '../componets/about/AMain4'
import AMain5 from '../componets/about/AMain5'
import AMain6 from '../componets/about/AMain6'

export default function About() {
  return (
    <div className='about' style={{ backgroundColor: '#031016' }}>
      <Header />
      <AMain1 />
      <AMain2 />
      <AMain3 />
      <AMain4 />
      <AMain5 />
      <AMain6 />
      <Footer />
    </div>
  )
}
