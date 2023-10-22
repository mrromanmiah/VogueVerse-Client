/* eslint-disable react/prop-types */

import { Link } from "react-router-dom/dist";


const Brand = ({brand}) => {
    const {id, brandImage, brandTitle} = brand || {}
   
    return (
        <div>
<Link to={`/products/${id}`}>
<div className="card border-2 p-10 rounded-lg hover:shadow-xl bg-[url(https://i.ibb.co/BjH9PMg/blurred-green-palm-leaves-off-white-1.jpg)] bg-cover bg-center bg-no-repeat">
  <figure className="lg:h-60 md:h-52 h-36 p-10"><img src={brandImage} alt="brandImage"/></figure>
  <div className="card-body">
    <h2 className=" flex card-title justify-center lg:text-3xl md:text-xl text-lg">{brandTitle}</h2>
  </div>
</div>
            </Link>
        </div>
    );
};

export default Brand;