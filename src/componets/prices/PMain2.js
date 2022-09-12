import React from 'react'

import { AppBar, Box, InputAdornment, Paper, styled, Tab, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Tabs, TextField, Typography, useTheme, TableSortLabel, Toolbar } from '@mui/material'

import { visuallyHidden } from '@mui/utils'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import SearchIcon from '@mui/icons-material/Search';

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
import PMain2TrendImage from '../../assets/img/price/trend.png'


import '../../assets/css/PMain2.css'

import BitButton2 from '../Button/BitButton2';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#010B0F',
        color: 'gray',
        border: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: '#031016',
        color: 'white',
        border: 'none',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: '#010B0F',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(wallet, asset, price, exchange, alert, volume, market) {
    return { wallet, asset, price, exchange, alert, volume, market };
}

const rows = [
    createData(2, 'Bitcoin(BTC)', '$21,322.86', '+0.32%', 'green', '$36.1B', '$411.2B'),
    createData(3, 'Bitcoin(BTC)', '$21,322.86', '+0.32%', 'green', '$36.1B', '$411.2B'),
    createData(6, 'Bitcoin(BTC)', '$21,322.86', '-0.15%', 'red', '$36.1B', '$411.2B'),
    createData(1, 'USDT', '$21,322.86', '+0.12%', 'green', '$36.1B', '$411.2B'),
    createData(11, 'Bitcoin(BTC)', '$21,322.86', '-0.25%', 'red', '$36.1B', '$411.2B'),
    createData(2, 'ETH', '$21,322.86', '-0.14%', 'red', '$36.1B', '$411.2B'),
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

//Sort
// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1
//     }
//     return 0
//   }
    
//   function getComparator(order, orderBy) {
//     return order === 'desc'
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy)
//   }
    
  // This method is created for cross-browser 
  // compatibility, if you don't need to support IE11, 
  // you can use Array.prototype.sort() directly
    
//   function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index])
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0])
//       if (order !== 0) {
//         return order
//       }
//       return a[1] - b[1]
//     })
//     return stabilizedThis.map((el) => el[0])
//   }
    
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'likes',
      numeric: true,
      disablePadding: false,
      label: 'Likes',
    },
  ]
    
  function EnhancedTableHead(props) {
    const {
      order,
      orderBy,
      onRequestSort,
    } = props
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property)
    }
    
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="center"
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }
    
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  }
    
  const EnhancedTableToolbar = (props) => {
    
    return <Toolbar></Toolbar>
  }
    
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  }



export default function PMain2() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    //table sort label
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [selected, setSelected] = React.useState([])

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            )
        }

        setSelected(newSelected)
    }

    const isSelected = (name) => selected.indexOf(name) !== -1

    return (
        <div className='price-main2'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                sx={{
                    mt: 10,
                    width: { xs: '300px', md: '600px', lg: '930px' },
                    fontSize: '35px',
                    fontWeight: '500',
                    textAlign: 'center',
                    background: 'linear-gradient(97.17deg, #276384 6.18%, #3ECF8E 107.6%)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                Today's Cryptocurrency Prices
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
            <Box
                className='prices-main2-tab'
                sx={{
                    bgcolor: '#031016',
                    width: { xs: '300px', sm: '500px', md: '700px', lg: '900px', xl: '1100px' },
                    marginTop: '110px'
                }}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        
                    >
                        <Tab label="All assets" {...a11yProps(0)} >asdfasfasfasd</Tab>
                        <Tab label="Tradable" {...a11yProps(1)} />
                        <Tab label="Gainers" {...a11yProps(2)} />
                        <Tab label="Losers" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
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
                                        <StyledTableCell align="left">Digital Asset</StyledTableCell>
                                        <StyledTableCell align="center">PRICE</StyledTableCell>
                                        <StyledTableCell align="center">24H EXCHANGE</StyledTableCell>
                                        <StyledTableCell align="center">24H TREND</StyledTableCell>
                                        <StyledTableCell align="center">24H VOLUME</StyledTableCell>
                                        <StyledTableCell align="center">MARKET CAP</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.index}>
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
                                                {row.price}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <p style={{ color: row.alert }}>{row.exchange}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <img src={`${PMain2TrendImage}`} alt='trendimage'></img>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.volume}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.market}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
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
                                        <StyledTableCell align="left">Digital Asset</StyledTableCell>
                                        <StyledTableCell align="center">PRICE</StyledTableCell>
                                        <StyledTableCell align="center">24H EXCHANGE</StyledTableCell>
                                        <StyledTableCell align="center">24H TREND</StyledTableCell>
                                        <StyledTableCell align="center">24H VOLUME</StyledTableCell>
                                        <StyledTableCell align="center">MARKET CAP</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.index}>
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
                                                {row.price}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <p style={{ color: row.alert }}>{row.exchange}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <img src={`${PMain2TrendImage}`} alt='trendimage'></img>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.volume}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.market}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
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
                                        <StyledTableCell align="left">Digital Asset</StyledTableCell>
                                        <StyledTableCell align="center">PRICE</StyledTableCell>
                                        <StyledTableCell align="center">24H EXCHANGE</StyledTableCell>
                                        <StyledTableCell align="center">24H TREND</StyledTableCell>
                                        <StyledTableCell align="center">24H VOLUME</StyledTableCell>
                                        <StyledTableCell align="center">MARKET CAP</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.index}>
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
                                                {row.price}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <p style={{ color: row.alert }}>{row.exchange}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <img src={`${PMain2TrendImage}`} alt='trendimage'></img>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.volume}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.market}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
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
                                        <StyledTableCell align="left">Digital Asset</StyledTableCell>
                                        <StyledTableCell align="center">PRICE</StyledTableCell>
                                        <StyledTableCell align="center">24H EXCHANGE</StyledTableCell>
                                        <StyledTableCell align="center">24H TREND</StyledTableCell>
                                        <StyledTableCell align="center">24H VOLUME</StyledTableCell>
                                        <StyledTableCell align="center">MARKET CAP</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.index}>
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
                                                {row.price}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <p style={{ color: row.alert }}>{row.exchange}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <img src={`${PMain2TrendImage}`} alt='trendimage'></img>
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.volume}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.market}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </SwipeableViews>
                <BitButton2 content="See More" marginY="10" />
            </Box>
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