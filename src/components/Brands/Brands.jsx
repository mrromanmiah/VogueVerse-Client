/* eslint-disable react/prop-types */
import Brand from "./Brand";


const Brands = ({ brands }) => {
    return (
        <div>
            <div className="px-20 text-center mt-5">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold dark:text-white">Brands</h1>
                <p className="text-[#84a98c]">Discover a curated collection of premium brands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 lg:px-20 md:px-10 px-10">
                {
                    brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;