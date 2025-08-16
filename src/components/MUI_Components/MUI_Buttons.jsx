import * as React from 'react';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import CompostIcon from '@mui/icons-material/Compost';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import NoteIcon from '@mui/icons-material/Note';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import CountertopsIcon from '@mui/icons-material/Countertops';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    IconButton,
    Menu,
    MenuItem,
    ToggleButtonGroup,
    ToggleButton,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const CustomBtn = styled(IconButton)(({ }) => ({
    border: "none",
    borderRadius: "0px",
    width: "48px",
    height: "48px",
    marginTop: "12px",
    color: "white",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.125)"
    },
}));

const CustomLink = styled(Link)(({ }) => ({
    textDecoration: "none",
}));

const CustomToggleBtn = styled(ToggleButton)(({ }) => ({
    justifyContent: "flex-start",
    WebkitJustifyContent: "flex-start",
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "rgb(40, 148, 250)",
        backgroundColor: "black",
    }
}));

const DetailsBtn = styled(Button)(({ }) => ({
    border: "2.5px solid grey",
    borderRadius: "25px",
    marginLeft: "25px",
    marginBottom: "25px",
    color: "grey",
    width: "300px",
    "&:hover": {
        backgroundColor: "rgba(40, 148, 250, 0.25)",
        color: "black"
    }
}));

const CountBtn = styled(Button)(({ }) => ({
    width: "50px",
    minWidth: "50px",
    height: "50px",
    padding: "0px",
    borderRadius: "32px",
    backgroundColor: "rgb(245, 245, 245)",
    fontSize: "2.5rem",
    color: "black",
    "&:hover": {
        backgroundColor: "rgba(40, 148, 250, 0.25)",
    }
}));


function HeaderMenuBtn() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <CustomBtn
                id="header_menu-button"
                aria-controls={open ? "header_menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MenuRoundedIcon />
            </CustomBtn>

            <Menu
                id="header_menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{ list: { "aria-labelledby": "header_menu-button" } }}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <CustomLink to="/"><MenuItem onClick={handleClose}>Home</MenuItem></CustomLink>
                <CustomLink to="/productList"><MenuItem onClick={handleClose}>List</MenuItem></CustomLink>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}

function ShoppingBtn() {
    return (
        <CustomBtn>
            <ShoppingBagIcon />
        </CustomBtn>
    )
}

function SearchBtn() {
    return (
        <CustomBtn>
            <SearchIcon />
        </CustomBtn>
    )
}

function AccountBtn() {
    return (
        <CustomBtn>
            <AccountCircleIcon />
        </CustomBtn>
    )
}

function HomeloftBtnGroup() {
    const [view, setView] = React.useState('list');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <CustomToggleBtn value="popular" aria-label="Popular" children={<><StarIcon /><h2>Popular</h2></>} />
            <CustomToggleBtn value="collectiom" aria-label="Collection" children={<><FavoriteIcon /><h2>Collection</h2></>} />
            <CustomToggleBtn value="custom" aria-label="Custom" children={<><AutoFixNormalIcon /><h2>Custom</h2></>} />
        </ToggleButtonGroup>
    )
}

function MaterialBtnGroup() {
    const [view, setView] = React.useState('list');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <CustomToggleBtn value="wood" aria-label="Wood" children={<><CompostIcon /><h2>Wood</h2></>} />
            <CustomToggleBtn value="glass" aria-label="Glass" children={<><FilterNoneIcon /><h2>Glass</h2></>} />
            <CustomToggleBtn value="fabric" aria-label="Fabric" children={<><NoteIcon /><h2>Fabric</h2></>} />
        </ToggleButtonGroup>
    )
}

function PackageBtnGroup() {
    const [view, setView] = React.useState('list');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <CustomToggleBtn value="brand" aria-label="Brand" children={<><BakeryDiningIcon /><h2>Brand</h2></>} />
            <CustomToggleBtn value="bedroom" aria-label="Bedroom" children={<><BedIcon /><h2>Bedroom</h2></>} />
            <CustomToggleBtn value="bathroom" aria-label="Bathroom" children={<><ShowerIcon /><h2>Bathroom</h2></>} />
            <CustomToggleBtn value="kitchen" aria-label="Kitchen" children={<><CountertopsIcon /><h2>Kitchen</h2></>} />
        </ToggleButtonGroup>

    )
}

function ContactBtnGroup() {
    const [view, setView] = React.useState('list');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <CustomToggleBtn value="facebook" aria-label="Facebook" children={<><FacebookIcon /><h2>Facebook</h2></>} />
            <CustomToggleBtn value="instagram" aria-label="Instagram" children={<><InstagramIcon /><h2>Instagram</h2></>} />
            <CustomToggleBtn value="email" aria-label="Email" children={<><EmailIcon /><h2>Email</h2></>} />
        </ToggleButtonGroup>
    )
}

const CustomAccordion = styled(Accordion)(({ }) => ({
    width: "940.86px",
    maxWidth: "940.86px",
    boxShadow: "none",
    marginLeft: "50px",
    marginBottom: "25px",
    "&.Mui-expanded": {
        marginLeft: "50px",
        marginBottom: "25px",
    },
}));

function ProductDetailsAccordion(params) {
    return (
        <CustomAccordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ padding: "0px" }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontFamily: "roboto",
                        fontWeight: "bold",
                        fontSize: "1.25rem"
                    }}
                >
                    DESCRIPTION
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0px" }}>
                <Typography sx={{ color: "grey" }}>
                    {params.description}
                </Typography>
            </AccordionDetails>
        </CustomAccordion>
    )
}

export {
    HeaderMenuBtn,
    ShoppingBtn,
    SearchBtn,
    AccountBtn,
    CustomLink,
    HomeloftBtnGroup,
    MaterialBtnGroup,
    PackageBtnGroup,
    ContactBtnGroup,
    DetailsBtn,
    ProductDetailsAccordion,
    CountBtn,
}
