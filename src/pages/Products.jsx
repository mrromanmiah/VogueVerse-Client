import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../components/productsCard/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/styles.css';
import { Parallax, Pagination, Navigation } from 'swiper/modules';


const Products = () => {

    const products = useLoaderData();
    const { brandName } = useParams()


    const formattedBrandName =
        brandName.charAt(0).toUpperCase() + brandName.slice(1);
    return (
        <div className="bg-gray-200 pt-10">
            <h1 className="text-4xl text-[#2f3e46] font-extrabold text-center">{formattedBrandName}</h1>
            <div className="mt-10">
            <Swiper
    style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }}
    speed={600}
    parallax={true}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
>
    <div
        slot="container-start"
        className="parallax-bg"
        style={{
            'background-image':
                'url(https://i.ibb.co/6494z27/pexels-mnz-1670770.jpg)',
        }}
        data-swiper-parallax="-23%"
    ></div>

    <SwiperSlide>
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20">
            <div className="space-y-2 text-center lg:text-left lg:w-1/2">
                <div className="text-4xl font-bold" data-swiper-parallax="-300">
                    Elegance Redefined
                </div>
                <div className="text-lg font-medium" data-swiper-parallax="-200">
                    Discover Timeless Style at VogueVerse
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Discover sophistication at VogueVerse. From classic cuts to modern trends, our curated collection redefines elegance. Elevate your wardrobe with pieces that stand the test of time.
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex mx-auto justify-end">
                <img className="w-1/3 rounded-3xl border-8  border-white" src="https://i.ibb.co/NtgbH9m/beautiful-woman-with-long-blonde-hair-travelling.jpg" alt="" />
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20">
            <div className="space-y-2 text-center lg:text-left lg:w-1/2">
                <div className="text-4xl font-bold" data-swiper-parallax="-300">
                    Chic Comforts
                </div>
                <div className="text-lg font-medium" data-swiper-parallax="-200">
                    Style and Ease with VogueVerse
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Unwind in style with VogueVerse. Explore chic outfits designed for both fashion and comfort. From workdays to weekends, elevate your everyday style with the perfect blend of sophistication and ease.
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex mx-auto justify-end">
                <img className="w-1/3 rounded-3xl border-8  border-white" src="https://i.ibb.co/8j31hrH/conversation-nationality-work-male-business-classy.jpg" alt="" />
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20">
            <div className="space-y-2 text-center lg:text-left lg:w-1/2">
                <div className="text-4xl font-bold" data-swiper-parallax="-300">
                    Bold Expressions
                </div>
                <div className="text-lg font-medium" data-swiper-parallax="-200">
                    VogueVerse Couture: Make a Statement
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Dare to be bold with VogueVerse Couture. Vibrant prints, daring silhouettes—each piece crafted for self-expression. Redefine your style narrative and unleash your unique, statement-making fashion.
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex mx-auto justify-end">
                <img className="w-1/3 rounded-3xl border-8  border-white" src="https://i.ibb.co/QQSHS57/curly-girl-near-building.jpg" alt="" />
            </div>
        </div>
    </SwiperSlide>
</Swiper>
            </div>
            <div className="lg:px-20 md:px-10 px-10 py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
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
