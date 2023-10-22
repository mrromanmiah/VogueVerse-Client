import { Link, useLoaderData, useParams} from "react-router-dom";
import ProductCard from "../components/productsCard/ProductCard";


const Products = () => {
    
    const products = useLoaderData();
    const {brandName}= useParams()


    const formattedBrandName =
        brandName.charAt(0).toUpperCase() + brandName.slice(1);
    return (
        <div className="bg-gray-200 pt-10">
            <h1 className="text-4xl text-[#2f3e46] font-extrabold text-center">{formattedBrandName}</h1>
            <div className="px-20 py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard key={product._id} product={product}></ProductCard>
                    ))
                ) : (
                    <div className="flex justify-around items-center mx-auto py-24 col-span-3">
                    <h1 className="text-3xl font-extrabold text-[#2f3e46]">No Product Found</h1>
                    <img className="w-1/3" src="https://i.ibb.co/YZrMQS8/Asset-1.png" alt="" />
                </div>
                )}
            </div>
        </div>
    );
};

export default Products;
