

const Offer = () => {
    return (
        <div>
            <div className="px-20 text-center mt-20">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold">Offer</h1>
                <p className="text-[#84a98c] mb-10">Elevate your style with savings that speak to your unique flair.</p>
            </div>
            <div className="lg:grid grid-cols-4 gap-4 lg:space-y-0 md:space-y-6 space-y-6 lg:px-20 md:px-10 px-10">
                <div className="relative bg-[url(https://i.ibb.co/xYDr3Dq/offer1.jpg)] bg-cover bg-center bg-no-repeat px-10 py-20 col-span-2 row-span-2 flex flex-col justify-center items-start rounded-lg">
                    <h1 className="text-white text-2xl font-bold">T-Shirt Adidas</h1>
                    <p className="text-[#354f52] text-lg font-bold pb-3">Discount-20%</p>
                    <button className="bg-[#2f3e46] text-white font-bold rounded-md px-6 py-3 hover:bg-[#52796f] ">Shop Now</button>
                </div>
                <div className="relative bg-[url(https://i.ibb.co/FHM6bkR/offer2.jpg)] bg-cover bg-center bg-no-repeat px-10 pb-36 pt-5 col-span-2 flex flex-col items-start rounded-lg">
                    <h1 className="text-[#2f3e46] text-2xl font-bold">T-Shirt Prada</h1>
                    <p className="text-[#354f52] text-lg font-bold pb-3">Discount-20%</p>
                    <button className="bg-[#2f3e46] text-white font-bold rounded-md px-6 py-3 hover:bg-[#52796f] ">Shop Now</button>
                </div>
                <div className="bg-[url(https://i.ibb.co/xFYSn0y/offer3.jpg)] bg-cover bg-center bg-no-repeat p-10 rounded-lg">
                <div className="bg-black opacity-80 rounded-lg text-center p-5 hover:bg-[#354f52]">
                    <h1 className="text-white text-lg font-bold">T-Shirt Gucci</h1>
                    <p className="text-white text-sm font-bold pb-3">Discount-15%</p>
                    <button className="bg-[#2f3e46] text-white font-bold rounded-md px-3 py-2 text-xs hover:bg-[#52796f] ">Shop Now</button>
                    </div>
                </div>
                <div className="bg-[url(https://i.ibb.co/cbqyXJN/offer4.jpg)] bg-cover bg-center bg-no-repeat p-10 rounded-lg">
                    <div className="bg-black opacity-80 rounded-lg text-center p-5 hover:bg-[#354f52]">
                    <h1 className="text-white text-lg font-bold">T-Shirt Nike</h1>
                    <p className="text-white text-sm font-bold pb-3">Discount-15%</p>
                    <button className="bg-[#2f3e46] text-white font-bold rounded-md px-3 py-2 text-xs hover:bg-[#52796f] ">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;