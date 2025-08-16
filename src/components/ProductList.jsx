import * as React from 'react';
import '../style/ProductList.css';
import '../style/General.css';
import '@fontsource/roboto/400.css';
import {
    HeaderMenuBtn,
    ShoppingBtn,
    SearchBtn,
    AccountBtn,
    CustomLink,
    HomeloftBtnGroup,
    MaterialBtnGroup,
    PackageBtnGroup,
    ContactBtnGroup,
    DetailsBtn
} from './MUI_Components/MUI_Buttons.jsx'
import SearchBar from './MUI_Components/MUI_SearchBar.jsx'
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GridViewIcon from '@mui/icons-material/GridView';
import PaddingIcon from '@mui/icons-material/Padding';
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonGroup } from '@mui/material';
import axios from 'axios';

function ProductList() {
    const [list, setList] = React.useState([]);
    const [originalList, setOriginalList] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setList(response.data)
            setOriginalList(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    React.useEffect(() => {
        fetchData();
    }, [])

    React.useEffect(() => {
        if (search === "") {
            setList(originalList)
        } else {
            const searchedProducts = originalList.filter(
                (e) =>
                    e.title.toLowerCase().includes(search.toLowerCase()) ||
                    e.category.toLowerCase().includes(search.toLowerCase())
            );
            setList(searchedProducts);
        }
    }, [search, originalList])

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <CircularProgress />
            </div>
        );
    };

    return (
        <>
            <div className="pl">
                <section className="pl__header">
                    <HeaderMenuBtn />

                    <div className="pl__header-title">
                        PRODUCT LIST
                    </div>

                    <ButtonGroup
                        variant="text"
                        aria-label="home button group"
                        className="pl__header-buttons"
                    >
                        <ShoppingBtn />
                        <SearchBtn />
                        <AccountBtn />
                    </ButtonGroup>
                </section>

                <section className="pl__body">
                    <p className="pl__body-title">Popular Products</p>
                    <p className="pl__body-description">
                        Join the countless others who have fallen in love with these
                        products. Each item has been a top performer
                    </p>
                </section>

                <section className="pl__display">
                    <div className="pl__display-nav">
                        <div className="pl__display-nav-icons -flexRow">
                            <InsertChartIcon />
                            <GridViewIcon />
                        </div>
                        <SearchBar
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="pl__display-nav-icons -flexRow">
                            <p>Ajust By</p>
                            <PaddingIcon />
                        </div>
                    </div>
                </section>

                <section className="pl__list -flexRow">
                    <div className="pl__list-sidebar -flexColumn">
                        <p className="pl__list-sidebar-title">HOMELOFT</p>
                        <HomeloftBtnGroup />
                        <p className="pl__list-sidebar-title">MATERIAL</p>
                        <MaterialBtnGroup />
                        <p className="pl__list-sidebar-title">PACKAGE</p>
                        <PackageBtnGroup />
                        <p className="pl__list-sidebar-title">CONTACT</p>
                        <ContactBtnGroup />
                    </div>

                    <div className="pl__list-display">
                        {list.map((p) => (
                            <div className="pl__list-display-product" key={p.id}>
                                <img src={p.image} alt={p.title} />
                                <div className="pl__list-product-header -flexRow">
                                    <h5 className="pl__product-name">{p.title}</h5>
                                    <h5 className="pl__product-price">${p.price}</h5>
                                </div>
                                <CustomLink to={`/productDetail/${p.id}`}>
                                    <DetailsBtn variant="outlined">
                                        Product details
                                    </DetailsBtn>
                                </CustomLink>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProductList