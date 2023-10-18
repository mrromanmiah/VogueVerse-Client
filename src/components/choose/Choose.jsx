

const Choose = () => {
    return (
        <div className="flex items-center justify-evenly">
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/d7MjP4q/delivery.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">Worldwide Delivery</h3>
            </div>
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/zhTgmrZ/gift-card.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">Gift Vouchers</h3>
            </div>
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/JrxY1HB/support.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">24*7 Support</h3>
            </div>
            <div className="flex flex-col items-center my-16">
                <img className="w-20" src={"https://i.ibb.co/PWzCy43/save-money.png"} alt="" />
                <h3 className="text-xl font-semibold mt-2 hover:text-[#52796f]">Great Savings</h3>
            </div>
        </div>
    );
};

export default Choose;