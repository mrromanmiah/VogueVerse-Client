/* eslint-disable react/prop-types */

import { Link } from "react-router-dom/dist";


const Brand = ({brand}) => {
    const {id, brandImage, brandTitle} = brand || {}
   
    return (
        <div>
<Link to={`/products/${id}`}>
<div className="h-96 border-2 p-10 rounded-lg hover:shadow-xl">
  <img className="h-52 p-10" src={brandImage} alt="brandImage"/>
  <div className="card-body">
    <h2 className=" flex card-title justify-center lg:text-3xl md:text-xl text-lg">{brandTitle}</h2>
  </div>
</div>
            </Link>
        </div>
    );
};

export default Brand;