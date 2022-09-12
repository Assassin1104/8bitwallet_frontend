import { Typography } from '@mui/material'
import React from 'react'

import MMain6CartImage1 from '../../assets/img/mobile/main6/cart1.png'
import MMain6CartImage2 from '../../assets/img/mobile/main6/cart2.png'
import MMain6CartImage3 from '../../assets/img/mobile/main6/cart3.png'
import MMain6CartImage4 from '../../assets/img/mobile/main6/cart4.png'
import MMain6CartImage5 from '../../assets/img/mobile/main6/cart5.png'
import MMain6CartImage6 from '../../assets/img/mobile/main6/cart6.png'

export default function MCart1(props) {
    const cartImage = [
        MMain6CartImage1,
        MMain6CartImage2,
        MMain6CartImage3,
        MMain6CartImage4,
        MMain6CartImage5,
        MMain6CartImage6
    ];

    const cartTitle = [
        "Keep Your Data Private",
        "Desktop Sync",
        "24/7 Human Support",
        "One-Touch Easy",
        "Friendly and Trusted",
        "Buy Crypto On-The-Go"
    ];

    const cartNote = [
        "Exodus mobile encrypts private keys and transaction data on your mobile device for your eyes only. Your data remains private - no registration or account setup required.",
        "By using your 12-word backup phrase you can control your wealth on your mobile device and sync to your desktop. Exchange in seconds on your mobile device with transactions that mirror your desktop.",
        "We won't leave you out on your own. Exodus provides an online help desk and 24/7 customer support to get your questions answered, fast.",
        "Now you can trade your cryptocurrency in a few taps. Want to exchange Bitcoin for something new? Exodus hides the complex details while assets are exchanged behind the scenes in seconds.",
        "Exodus makes it fun and easy to learn and use cryptocurrencies. No “tech speak” or confusing steps. Control your wealth with ease - and have fun doing it!",
        "Purchase your favorite cryptocurrencies within Exodus mobile, anytime, anywhere. Pay with credit/debit card, bank transfer, and Apple Pay. Once purchased, your crypto is yours to own."
    ];

    return (
        <div className='mobile-main-cart'
            style={{
                width: { xs: '210px', sm: '260px', lg: '310px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <img
                src={`${cartImage[props.cartNum]}`}
                alt="cartImage"
                style={{
                    marginTop: '80px',
                    width: { xs: '200px', sm: '250px', lg: '300px' }
                }} />
            <Typography sx={{
                mt: 1,
                fontSize: '25px',
                fontWeight: '500',
                textAlign: 'center',
                color: 'white',
                width: { xs: '200px', sm: '250px', lg: '300px' }
            }}>
                {cartTitle[props.cartNum]}
            </Typography>
            <Typography sx={{
                mt: 1,
                fontSize: '15px',
                fontWeight: '500',
                textAlign: 'center',
                color: '#D1D1D1',
                width: { xs: '200px', sm: '250px', lg: '300px' }
            }}>
                {cartNote[props.cartNum]}
            </Typography>
        </div>
    )
}
