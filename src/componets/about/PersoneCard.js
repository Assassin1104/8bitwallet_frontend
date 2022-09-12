import React from 'react'

import { Box } from '@mui/material'

import AMain5Human1 from '../../assets/img/about/david.png'
import AMain5Human2 from '../../assets/img/about/david.png'
import AMain5Human3 from '../../assets/img/about/david.png'
import AMain5Human4 from '../../assets/img/about/david.png'
import AMain5Human5 from '../../assets/img/about/david.png'
import AMain5Human6 from '../../assets/img/about/david.png'

import LinkedInImage from '../../assets/img/about/linkedin.png';
import TwitterImage from '../../assets/img/about/twitter.png'

export default function PersoneCard(props) {

    const humanImage = [AMain5Human1, AMain5Human2, AMain5Human3, AMain5Human4, AMain5Human5, AMain5Human6];
    return (
        <div className='about-human-card'
            style={{
                width: { xs: '210px', sm: '260px', lg: '310px' },
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
            <Box width='300px'>
                <img
                    src={`${humanImage[props.humanNsum]}`}
                    alt="humanImage"
                    style={{
                        boxShadow: '10px 10px #3ECF8E',
                        marginTop: '20px',
                        width: { xs: '200px', sm: '250px', lg: '300px' }
                    }}
                />
                <p
                    style={{
                        fontSize: '25px',
                        fontWeight: '500',
                        color: 'white'
                    }}>
                    {props.humanName}
                </p>
                <p
                    style={{
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#9F9F9F',
                    }}>
                    {props.humanRole}
                </p>
                <img
                    src={`${LinkedInImage}`}
                    alt="LinkedInImage"
                    style={{}}
                />
                <img
                    src={`${TwitterImage}`}
                    alt="TwitterImage"
                    style={{ marginLeft: '10px' }}
                />
            </Box>
        </div>
    )
}
