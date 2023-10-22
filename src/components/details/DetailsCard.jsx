const DetailsCard = ({details}) => {
    
    const {productImage, productName, brandName, productType, price, rating, description }=details || {};
    return (
        <div>
            <h1>{productName}</h1>
            <img src={productImage} alt="Product" />
            
        </div>
    );
};

export default DetailsCard;
