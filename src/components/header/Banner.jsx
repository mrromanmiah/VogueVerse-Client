

const Banner = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/vs3DtkQ/tuxpi-com-1697624179.jpg)] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-end lg:px-40 md:px-20 px-20 ">
            <div className="lg:text-right md:text-right text-center lg:w-1/2 md:w-1/2 lg:space-y-3 md:space-y-3 space-y-3">
                <h1 className="text-white lg:text-4xl md:text-2xl text-xl font-extrabold lg:text-right md:text-right text-center">A Symphony of Uncommon Style</h1>
                <p className=" text-white lg:text-base md:text-sm text-xs font-medium lg:text-right md:text-right text-center pb-4">Dive into a fantasy realm where fashion meets individuality, redefining the ordinary with our whimsical collection.</p>
                <button className=" bg-[#52796f] text-white font-bold rounded-md px-6 py-3 hover:bg-[#cad2c5] hover:text-[#2f3e46]">Explore</button>
            </div>
        </div>


    );
};

export default Banner;