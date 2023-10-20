import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/productsCard/ProductCard";

const Products = () => {
    // State to store the current brandName filter
    const [brandNameFilter, setBrandNameFilter] = useState("");

    // Fetch all products
    const allProducts = useLoaderData();

    // Filter products based on brandName
    const filteredProducts = brandNameFilter
        ? allProducts.filter(product => product.brandName === brandNameFilter)
        : allProducts;

    return (
        <div>
            <h1>{brandNameFilter ? `${brandNameFilter} Products` : "All Products"}</h1>

            {/* Input for dynamically setting brandName filter */}
            <input
                type="text"
                placeholder="Filter by brandName"
                value={brandNameFilter}
                onChange={(e) => setBrandNameFilter(e.target.value)}
            />

            <div>
                {filteredProducts.map(product => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Products;
