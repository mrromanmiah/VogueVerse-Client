

const Choose = () => {
    return (
        <div className="lg:flex md:flex items-center justify-evenly">
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/8gRHwz8/rocket.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">Worldwide Delivery</h3>
            </div>
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/WxB59dG/gift-card.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">Gift Vouchers</h3>
            </div>
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/jMXV2M5/24-hour.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">24*7 Support</h3>
            </div>
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/bHMG5F4/purse.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">Great Savings</h3>
            </div>
        </div>
    );
};

export default Choose;