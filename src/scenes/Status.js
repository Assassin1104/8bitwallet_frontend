import React from 'react'
import Footer from '../componets/Footer'
import Header from '../componets/Header'
import SMain1 from '../componets/status/SMain1'
import SMain2 from '../componets/status/SMain2'

export default function Status() {
  return (
    <div className='status' style={{ backgroundColor: '#031016' }}>
      <Header />
      <SMain1 />
      <SMain2 />
      <Footer />
    </div>
  )
}
