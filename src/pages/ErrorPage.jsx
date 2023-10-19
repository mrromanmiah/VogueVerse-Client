import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="h-screen w-screen bg-gray-200 flex items-center">
    <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div className="w-full lg:w-1/2 mx-20">
                <div className="text-7xl text-[#354f52] font-dark font-extrabold mb-8"> 404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                Sorry we could not find the page you are looking for
            </p>
            
            <Link to="/"><a href="#" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-[#84a98c] active:bg-red-600 hover:bg-red-700">Homepage</a></Link>
    </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-20 my-12">
            <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" alt="Page not found" />
        </div>
    
    </div>
</div>
        </div>
    );
};

export default ErrorPage;