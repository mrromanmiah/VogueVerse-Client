import Brands from "../components/Brands/Brands";
import Choose from "../components/choose/Choose";
import Banner from "../components/header/Banner";
import { useLoaderData } from "react-router-dom";
import Offer from "../components/offers/Offer";
import Instagram from "../components/instagram/Instagram";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Choose></Choose>
            <Brands brands={brands}></Brands>
            <Offer></Offer>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;