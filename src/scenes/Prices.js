import React from 'react'
import Footer from '../componets/Footer'
import Header from '../componets/Header'

import PMain1 from '../componets/prices/PMain1'
import PMain2 from '../componets/prices/PMain2'
import PMain3 from '../componets/prices/PMain3'

export default function Prices() {
  return (
    <div className='prices' style={{ backgroundColor: '#031016' }}>
      <Header />
      <PMain1 />
      <PMain2 />
      <PMain3 />
      <Footer />
    </div>
  )
}
