import React, { useState } from 'react'

import { Box, Container, InputAdornment, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'

import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";

import SearchIcon from '@mui/icons-material/Search';

import BitButton3 from '../Button/BitButton3';

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
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import '../../assets/css/SMain2.css'
import BitButton2 from '../Button/BitButton2';


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


export default function SMain2() {

    const [selectedOption, setSelectedOption] = useState("");
    const [highlightedOption, setHighlightedOption] = useState("");

    return (
        <div className='status-main2'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Typography
                sx={{
                    mt: 10,
                    width: { xs: '300px', md: '600px', lg: '930px' },
                    fontSize: '40px',
                    fontWeight: '400',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Supported Cryptocurrency Assets(266)
            </Typography>
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

            <Container>
                <Box className='status-main2-sort'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        mt: '50px',
                    }}>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: '10px',
                            color: 'white',
                            fontWeight: '500',
                            // alignItems: 'center'
                        }}>
                        Sort by
                    </Typography>
                    <ComboBox
                        className='status-main2-sort-main'
                        options={options}
                        placeholder="CoinMarketCap Index"
                        defaultIndex={4}
                        optionsListMaxHeight={300}
                        style={{
                            width: "160px",
                            borderColor: 'red',
                            alignItems: 'center',
                            marginLeft: '20px'
                        }}
                        focusColor="#20C374"
                        renderOptions={(option) => (
                            <div className="comboBoxOption">{option}</div>
                        )}
                        onSelect={(option) => setSelectedOption(option)}
                        onChange={(event) => console.log(event.target.value)}
                        enableAutocomplete
                        onOptionsChange={(option) => setHighlightedOption(option)}
                    />
                </Box>
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
                                <StyledTableCell align="center"> </StyledTableCell>
                                <StyledTableCell align="center"> </StyledTableCell>
                                <StyledTableCell align="center"> </StyledTableCell>
                                <StyledTableCell align="center">Mobile</StyledTableCell>
                                <StyledTableCell align="center">Gas Support</StyledTableCell>
                                <StyledTableCell align="center">Details</StyledTableCell>
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

                                    </StyledTableCell>
                                    <StyledTableCell align="center">

                                    </StyledTableCell>
                                    <StyledTableCell align="center">

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
                                        Operational
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <BitButton2 content="See More" marginY="10" />
            </Container>
        </div>
    )
}

const styles = theme => ({
    textField1: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    searchbar_input: {
        color: 'white',
        backgroundColor: 'white'
    },
    table_sticky: {
        sticky: {
            position: "sticky",
            left: 0,
            background: "white",
            boxShadow: "5px 2px 5px grey"
        }
    }
});


const options = [
    "America",
    "India",
    "Australia",
    "Argentina",
    "Ireland",
    "Indonesia",
    "Iceland",
    "Japan",
    "China",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua",
    "Barbuda",
    "Mexico",
    "Monaco",
    "Nepal",
    "Bulgaria",
    "Pakistan",
    "Russia",
    "Egypt",
    "Sri Lanka",
    "Singapore"
];