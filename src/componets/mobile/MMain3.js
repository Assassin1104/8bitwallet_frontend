import React from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import BCHImage from '../../assets/img/mobile/main3/BCH.png'
import BNBImage from '../../assets/img/mobile/main3/BNB.png'
import BSVImage from '../../assets/img/mobile/main3/BSV.png'
import BTCImage from '../../assets/img/mobile/main3/BTC.png'
import DCRImage from '../../assets/img/mobile/main3/DCR.png'
import EOSImage from '../../assets/img/mobile/main3/EOS.png'
import ETCImage from '../../assets/img/mobile/main3/ETC.png'
import ETHImage from '../../assets/img/mobile/main3/ETH.png'
import LTCImage from '../../assets/img/mobile/main3/LTC.png'
import NEOImage from '../../assets/img/mobile/main3/NEO.png'
import TRXImage from '../../assets/img/mobile/main3/TRX.png'
import USDTImage from '../../assets/img/mobile/main3/USDT.png'
import XRPImage from '../../assets/img/mobile/main3/XRP.png'
import XTZImage from '../../assets/img/mobile/main3/XTZ.png'
import ZECImage from '../../assets/img/mobile/main3/ZEC.png'
import BitButton2 from '../Button/BitButton2'

export default function MMain3() {
    return (
        <div className='mobile-main3'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                sx={{
                    mt: 10,
                    fontSize: '40px',
                    fontWeight: '500',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                235 +
            </Typography>
            <Typography
                sx={{
                    mt: 5,
                    fontSize: '25px',
                    fontWeight: '400',
                    textAlign: 'center',
                    color: 'white'
                }}>
                235+ Cryptocurrency Assets
            </Typography>
            <Typography
                sx={{
                    mt: 2,
                    fontSize: '20px',
                    fontWeight: '400',
                    textAlign: 'center',
                    color: 'white'
                }}>
                with more launching in future releases…
            </Typography>
            <Box
                sx={{
                    mt: 15,
                    display: { xs: 'none', md: 'block' }
                }}>
                <Box sx={{}}>
                    <img src={`${BCHImage}`} style={{ margin: '10px' }} alt="BCHImage" />
                    <img src={`${BNBImage}`} style={{ margin: '10px' }} alt="BNBImage" />
                    <img src={`${BSVImage}`} style={{ margin: '10px' }} alt="BSVImage" />
                    <img src={`${BTCImage}`} style={{ margin: '10px' }} alt="BTCImage" />
                    <img src={`${DCRImage}`} style={{ margin: '10px' }} alt="DCRImage" />
                    <img src={`${EOSImage}`} style={{ margin: '10px' }} alt="EOSImage" />
                    <img src={`${ETCImage}`} style={{ margin: '10px' }} alt="ETCImage" />
                </Box>
                <Box>
                    <img src={`${ETHImage}`} style={{ margin: '10px' }} alt="ETHImage" />
                    <img src={`${LTCImage}`} style={{ margin: '10px' }} alt="LTCImage" />
                    <img src={`${NEOImage}`} style={{ margin: '10px' }} alt="NEOImage" />
                    <img src={`${TRXImage}`} style={{ margin: '10px' }} alt="TRXImage" />
                    <img src={`${USDTImage}`} style={{ margin: '10px' }} alt="USDTImage" />
                    <img src={`${XRPImage}`} style={{ margin: '10px' }} alt="XRPImage" />
                    <img src={`${XTZImage}`} style={{ margin: '10px' }} alt="XTZImage" />
                    <img src={`${ZECImage}`} style={{ margin: '10px' }} alt="ZECImage" />
                </Box>
            </Box>

            <Box
                sx={{
                    mt: 15,
                    display: { xs: 'block', md: 'none', }
                }}>
                <Box>
                    <img src={`${BCHImage}`} style={{ margin: '10px' }} alt="BCHImage" />
                </Box>
                <Box>
                    <img src={`${BNBImage}`} style={{ margin: '10px' }} alt="BNBImage" />
                    <img src={`${BSVImage}`} style={{ margin: '10px' }} alt="BSVImage" />
                </Box>
                <Box>
                    <img src={`${BTCImage}`} style={{ margin: '10px' }} alt="BTCImage" />
                    <img src={`${DCRImage}`} style={{ margin: '10px' }} alt="DCRImage" />
                    <img src={`${EOSImage}`} style={{ margin: '10px' }} alt="EOSImage" />
                </Box>
                <Box>
                    <img src={`${ETCImage}`} style={{ margin: '10px' }} alt="ETCImage" />
                    <img src={`${ETHImage}`} style={{ margin: '10px' }} alt="ETHImage" />
                    <img src={`${LTCImage}`} style={{ margin: '10px' }} alt="LTCImage" />
                    <img src={`${NEOImage}`} style={{ margin: '10px' }} alt="NEOImage" />
                </Box>
                <Box>
                    <img src={`${TRXImage}`} style={{ margin: '10px' }} alt="TRXImage" />
                    <img src={`${USDTImage}`} style={{ margin: '10px' }} alt="USDTImage" />
                    <img src={`${XRPImage}`} style={{ margin: '10px' }} alt="XRPImage" />
                    <img src={`${XTZImage}`} style={{ margin: '10px' }} alt="XTZImage" />
                    <img src={`${ZECImage}`} style={{ margin: '10px' }} alt="ZECImage" />
                </Box>
            </Box>
            <BitButton2 content="See More" marginY="10" />
        </div >
    )
}
