import React, { useState } from 'react';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [productImage] = useState('https://balajiemporium.com/wp-content/uploads/2024/06/Untitled-6-2.png');

    const updateQuantity = (change) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const buyNow = () => {
        alert(`Proceeding to checkout:\nQuantity: ${quantity}`);
    };

    const addToCart = () => {
        alert(`Added to cart:\nQuantity: ${quantity}`);
    };

    return (
        <div className="product-wrapper">
            <div className="product-container">
                <div className="image-container">
                    <img id="product-image" src={productImage} alt="Water Bottle" className="product-image" />
                </div>
                <div className="product-details">
                    <h1 className="product-title">Birthday Dress</h1>
                    <div className="product-price">₹299.99</div>

                    <div>
                        <h3>Quantity:</h3>
                        <div className="quantity-selector">
                            <button className="quantity-btn" onClick={() => updateQuantity(-1)}>-</button>
                            <span className="quantity-display" id="quantity">{quantity}</span>
                            <button className="quantity-btn" onClick={() => updateQuantity(1)}>+</button>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="action-btn buy-now" onClick={buyNow}>Buy Now</button>
                        <button className="action-btn add-to-cart" onClick={addToCart}>Add to Cart</button>
                    </div>

                    <div>
                        <h3>Description:</h3>
                        <p className="product-description">
                            Dresses are garments designed to provide comfort, style, and versatility, suitable for various occasions. They enhance personal expression, complement individuality, and often reflect cultural or fashion trends, blending functionality with aesthetic appeal.
                        </p>
                    </div>

                    <div>
                        <h3>Features:</h3>
                        <ul className="features-list">
                            <li><i className="fas fa-check"></i> Comfortable and breathable fabric</li>
                            <li><i className="fas fa-check"></i> Elegant and versatile design</li>
                            <li><i className="fas fa-check"></i> Perfect fit with tailored stitching</li>
                            <li><i className="fas fa-check"></i> Available in multiple sizes</li>
                            <li><i className="fas fa-check"></i> Easy to wash and maintain</li>
                        </ul>

                    </div>
                </div>
            </div>

            <style>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                    }

                    .product-wrapper {
                        padding-top: 100px; /* Padding to avoid overlap with the fixed navbar */
                    }

                    .product-container {
                        max-width: 1200px;
                        margin: 2rem auto;
                        padding: 0 2rem;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 3rem;
                    }

                    .product-image {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        border-radius: 12px;
                        max-width: 600px; /* Fixed image size */
                        max-height: 700px; /* Fixed image size */
                    }

                    .product-details {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                    }

                    .product-title {
                        color: #333;
                    }

                    .product-price {
                        font-size: 1.5rem;
                        color: #2c5282;
                        font-weight: bold;
                    }

                    .quantity-selector {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                    }

                    .quantity-btn {
                        width: 30px;
                        height: 30px;
                        border: none;
                        background-color: #e2e8f0;
                        border-radius: 50%;
                        cursor: pointer;
                    }

                    .quantity-display {
                        font-size: 1.2rem;
                        font-weight: bold;
                    }

                    .action-buttons {
                        display: flex;
                        gap: 1rem;
                        margin-top: 1rem;
                    }

                    .action-btn {
                        flex: 1;
                        padding: 1rem;
                        border: none;
                        border-radius: 8px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: opacity 0.2s;
                    }

                    .buy-now {
                        background-color: #2c5282;
                        color: white;
                    }

                    .add-to-cart {
                        background-color: #e2e8f0;
                        color: #2c5282;
                    }

                    .action-btn:hover {
                        opacity: 0.9;
                    }

                    .product-description {
                        line-height: 1.8;
                        color: #4a5568;
                    }

                    .features-list {
                        list-style-type: none;
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .features-list li {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }

                    .features-list i {
                        color: #2c5282;
                    }
                `}
            </style>
        </div>
    );
};

export default ProductDetails;
