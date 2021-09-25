import React from 'react';
import './Food.css';

const Food = (props) => {
    
    const {strMealThumb, strMeal, strCategory} = props.meal;
    return (
        <div className="single-food">
            <div className="food-img">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="food-details">
                <h3>{strMeal}</h3>
                <p>Category: {strCategory}</p>
                <button className="cart-btn" onClick={() => props.handleAddToCart(props.meal)}>
                    <i className="fas fa-shopping-cart cart-icon"></i> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Food;