import React from 'react'

import { Box, Typography } from '@mui/material'

import BCHImage from '../../../assets/img/mobile/main3/BCH.png'
import BNBImage from '../../../assets/img/mobile/main3/BNB.png'
import BSVImage from '../../../assets/img/mobile/main3/BSV.png'
import BTCImage from '../../../assets/img/mobile/main3/BTC.png'
import DCRImage from '../../../assets/img/mobile/main3/DCR.png'
import EOSImage from '../../../assets/img/mobile/main3/EOS.png'
import ETCImage from '../../../assets/img/mobile/main3/ETC.png'
import ETHImage from '../../../assets/img/mobile/main3/ETH.png'
import LTCImage from '../../../assets/img/mobile/main3/LTC.png'
import NEOImage from '../../../assets/img/mobile/main3/NEO.png'
import TRXImage from '../../../assets/img/mobile/main3/TRX.png'
import USDTImage from '../../../assets/img/mobile/main3/USDT.png'
import XRPImage from '../../../assets/img/mobile/main3/XRP.png'
import XTZImage from '../../../assets/img/mobile/main3/XTZ.png'
import ZECImage from '../../../assets/img/mobile/main3/ZEC.png'
import { green, red } from '@mui/material/colors'


const walletImageList = [
    BCHImage,
    BNBImage,
    BSVImage,
    BTCImage,
    DCRImage,
    EOSImage,
    ETCImage,
    ETHImage,
    LTCImage,
    NEOImage,
    TRXImage,
    USDTImage,
    XRPImage,
    XTZImage,
    ZECImage,
];
const walletNameList = [
    'BitCoin',
    'BNBImage',
    'BSVImage',
    'BTCImage',
    'DCRImage',
    'EOSImage',
    'ETCImage',
    'ETHImage',
    'LTCImage',
    'NEOImage',
    'TRXImage',
    'USDTImage',
    'XRPImage',
    'XTZImage',
    'ZECImage',
];

const walletNicNameList = [
    'BTC',
    'BNB',
    'BSV',
    'BTC',
    'DCR',
    'EOS',
    'ETC',
    'ETH',
    'LTC',
    'NEO',
    'TRX',
    'USDT',
    'XRP',
    'XTZ',
    'ZEC',
];

const walletPriceList = [
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
    '$21,322.86',
];

const walletUpList = [
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
    '+0.32%',
];

const walletUpColorList = ['red', 'green'];

// console.log(props.imageList, props.visble)/

export default function BitCard(props) {
    return (
        <div className='BitCard' 
        style={{
            backgroundColor: '#03161F',
            border: '1px solid #153B4C',
            borderRadius: '15px',
            minWidth: '185px',
            minHeight: '205px',
            maxWidth: '185px',
            maxHeight: '204px',
            paddingTop: '23px',
            marginRight: '15px',
            marginleft: '15px',

            display: props.visble,
        }}>
                <img
                    src={`${walletImageList[props.imageList]}`}
                    alt="walletListImage"
                    style={{ 
                        height: '45px',
                    }}
                />
                <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        color: 'white',
                        marginTop: '10px'
                    }}>
                    {props.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        fontSize: '10px',
                        fontWeight: '500',
                        color: '#AFAFAF',
                        
                    }}>
                    {props.nickName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#AFAFAF',
                    mt: '20px'
                }}>
                    {props.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                    color: props.chartColor,
                    mt: '10px'
                }}>
                    {props.chartUp}
                </Typography>
        </div>
    )
}
