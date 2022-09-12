import React, { useState } from "react";

import { Box, Button } from '@mui/material'

import BitCard from './BitCard'

import ArrowLeftImage from '../../../assets/img/arrow-left.png'
import ArrowRightImage from '../../../assets/img/arrow-right.png'
import { RowingSharp } from "@mui/icons-material";


export default function BitCardCarousel() {

    const [pos, setPostion] = useState(0);

    const cardDisplay = [
        'block',
        'block',
        'block',
        'block',
        'block',
        'block',
        'block',
        'block',
    ];

    function OnClickNextPosition() {
        if (pos === 0) {
            setPostion(1);
        } else if (pos === 7) {
            setPostion(7);
        }
        else {
            setPostion(pos + 1);
        }
        for (var i = 0; i < pos; i++) {
            cardDisplay[pos] = 'none';
        }
        console.log(pos);
        console.log(cardDisplay);
    }

    function OnClickPrevPosition() {
        if (pos > 0)
            setPostion(pos - 1);
        console.log(pos);
        cardDisplay[pos] = 'block'
        console.log(cardDisplay);
    }


    return (
        <Box className='bitCardCarousel'
            sx={{
                display: 'flex',
            }}
        >
            <Button
                onClick={OnClickPrevPosition}
                sx={{
                    marginRight: '20px',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={`${ArrowLeftImage}`}
                    alt="walletListImage"
                    style={{
                        height: '45px',
                    }}
                />
            </Button>
            <Box className='bitCardCarousel-main' sx={{
                display: 'flex',
                justifyContent: 'left',
                overflow: 'hidden',
                width: { xs: '200px', sm: '400px', md: '600px', lg: '800px', xl: '1000px' }
            }}>
                <BitCard imageList='1' name='Bitcoin' nickName='BNB' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[0]} />
                <BitCard imageList='10' name='Bitcoin' nickName='XTZ' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[1]} />
                <BitCard imageList='5' name='Bitcoin' nickName='USDT' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[2]} />
                <BitCard imageList='4' name='Bitcoin' nickName='BTC' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[3]} />
                <BitCard imageList='1' name='Bitcoin' nickName='BNB' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[4]} />
                <BitCard imageList='10' name='Bitcoin' nickName='XTZ' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[5]} />
                <BitCard imageList='5' name='Bitcoin' nickName='USDT' price='$21,322.86' chartUp='+0.34%' chartColor='#3ECF8E' visble={cardDisplay[6]} />
                <BitCard imageList='4' name='Bitcoin' nickName='BTC' price='$21,322.86' chartUp='-0.34%' chartColor='red' visble={cardDisplay[7]} />
            </Box>
            <Button
                sx={{
                    marginLeft: '20px'
                }}
                onClick={OnClickNextPosition}
            >
                <img
                    src={`${ArrowRightImage}`}
                    alt="walletListImage"
                    style={{
                        height: '45px',
                    }}
                />
            </Button>
        </Box>
    )
}
