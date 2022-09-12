import React from 'react'

import Header from '../componets/Header'
import MMain1 from '../componets/mobile/MMain1'
import MMain2 from '../componets/mobile/MMain2'
import MMain3 from '../componets/mobile/MMain3'
import MMain4 from '../componets/mobile/MMain4'
import MMain5 from '../componets/mobile/MMain5'
import MMain6 from '../componets/mobile/MMain6'
import MMain7 from '../componets/mobile/MMain7'
import Footer from '../componets/Footer'

export default function Mobile() {
  return (
    <div className='mobile' style={{ backgroundColor: '#031016' }}>
      <Header />
      <MMain1 />
      <MMain2 />
      <MMain3 />
      <MMain4 />
      <MMain4 />
      <MMain5 />
      <MMain6 />
      <MMain7 />
      <Footer />
    </div>
  )
}
