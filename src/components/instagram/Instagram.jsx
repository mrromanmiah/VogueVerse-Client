import { BsInstagram } from "react-icons/bs";


const Instagram = () => {
    return (
        <div className="p-20">
            <div className="px-20 text-center">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold">Instagram</h1>
                <p className="text-[#84a98c] mb-10">Explore the art of fashion through our lens.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/qWztbTd/insta1.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg p-10">
                        <span className="text-center text-white font-semibold text-7xl"><BsInstagram></BsInstagram></span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/gZ6LrWS/insta2.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg p-10">
                        <span className="text-center text-white font-semibold text-7xl"><BsInstagram></BsInstagram></span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/g9z0FGc/insta3.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg p-10">
                        <span className="text-center text-white font-semibold text-7xl"><BsInstagram></BsInstagram></span>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src={"https://i.ibb.co/RbqCVJ2/insta4.jpg"}
                        alt="Photo"
                        className="w-full h-full opacity-100 group-hover:opacity-50 cursor-pointer rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg p-10">
                        <span className="text-center text-white font-semibold text-7xl"><BsInstagram></BsInstagram></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;