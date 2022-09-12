import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Container } from '@mui/system';

import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

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
import BitButton3 from '../Button/BitButton3';

import '../../assets/css/MMain7.css'
import { Box, InputAdornment, TextField, Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        // color: theme.palette.common.white,
        color: 'gray',
        border: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        //   backgroundColor: 'black',
        color: 'white',
        border: 'none',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(index, wallet, asset, reward, sent, exchange, support, expart, notifi) {
    return { index, wallet, asset, reward, sent, exchange, support, expart, notifi };
}

const rows = [
    createData(1, 2, 'Bitcoin(BTC)', 4.56, 'y', 'y', 'y', 'y', 'y'),
    createData(2, 3, 'Bitcoin(BTC)', 5.6, 'y', 'y', 'y', 'y', 'y'),
    createData(3, 6, 'Bitcoin(BTC)', 1.56, 'n', 'n', 'y', 'y', 'y'),
    createData(4, 1, 'USDT', 5.67, 'y', 'y', 'y', 'n', 'n'),
    createData(5, 11, 'Bitcoin(BTC)', 4.23, 'y', 'y', 'y', 'y', 'y'),
    createData(6, 2, 'ETH', 4.27, 'y', 'y', 'n', 'y', 'y'),
];

const walletList = [
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

export default function MMain7() {
    return (
        <div className='mobile-main7'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <Box>
                <Box
                    sx={{
                        mt: 10,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        sx={{

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
                        Supported&nbsp;
                    </Typography>
                    <Typography
                        sx={{

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
                        Cryptocurrencies
                    </Typography>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '40px',
                            fontWeight: '500',
                        }}
                    >
                        (238)
                    </Typography>
                </Box>
                <TextField
                    className='mobile-main7-searchbar'
                    id="outlined-basic"
                    placeholder='Search asset...'
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        className: styles.searchbar_input
                    }}
                    sx={{
                        border: '1px solid #153B4C',
                        backgroundColor: '#010B0F',
                        color: 'white',
                        width: { xs: '300px', sm: '450px', md: '600px', lg: '750px', xl: '900px' },
                        borderRadius: '9px',
                        boxShadow: '0px 0px 25px rgba(39, 101, 132, 0.3)',
                        mt: 10
                    }} />
            </Box>
            <Container>
                <TableContainer component={Paper}
                    className='mobile-main7-table'
                    sx={{
                        mt: 10
                    }}>
                    <Table
                        sx={{
                            minWidth: '700px'
                        }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align='center'>Index</StyledTableCell>
                                <StyledTableCell align="left">Digital Asset</StyledTableCell>
                                <StyledTableCell align="center">APY Rewards</StyledTableCell>
                                <StyledTableCell align="center">Send</StyledTableCell>
                                <StyledTableCell align="center">Exchange</StyledTableCell>
                                <StyledTableCell align="center">Gas Support</StyledTableCell>
                                <StyledTableCell align="center">Export</StyledTableCell>
                                <StyledTableCell align="center">Notification</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.index}>
                                    <StyledTableCell align="center" component="th" scope="row" className='classes.table_sticky'>
                                        {row.index}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                            <img
                                                src={`${walletList[row.wallet]}`}
                                                alt="walletListImage"
                                                style={{ height: '45px' }}
                                            />
                                            {row.asset}
                                        </Box>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <BitButton3 content={row.reward} />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.sent === 'y' && <CheckIcon color='success' />}
                                        {row.sent === 'n' && <ClearIcon color='error' />}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.exchange === 'y' && <CheckIcon color='success' />}
                                        {row.exchange === 'n' && <ClearIcon color='error' />}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.support === 'y' && <CheckIcon color='success' />}
                                        {row.support === 'n' && <ClearIcon color='error' />}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.expart === 'y' && <CheckIcon color='success' />}
                                        {row.expart === 'n' && <ClearIcon color='error' />}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.notifi === 'y' && <CheckIcon color='success' />}
                                        {row.notifi === 'n' && <ClearIcon color='error' />}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <BitButton2 content="See More" marginY="10" />
        </div>
    )
}

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        boxShadow: '0px 0px 25px rgba(39, 101, 132, 0.3)',
        borderRadius: '9px',
    },
    searchbar_input: {
        color: 'white',
        backgroundColor: 'white',
        boxShadow: '0px 0px 25px rgba(39, 101, 132, 0.3)',
        borderRadius: '9px',
    },
});





