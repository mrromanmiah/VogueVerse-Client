import Choose from "../components/choose/Choose";
import Banner from "../components/header/Banner";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Choose></Choose>
        </div>
    );
};

export default Home;