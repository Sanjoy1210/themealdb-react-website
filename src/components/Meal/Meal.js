import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchFood, setSearchFood] = useState('a');

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood || 'a'}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [searchFood]);

    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);
    }

    const handleFoodSearch = event => {
        const searchFoodText = event.target.value;
        setSearchFood(searchFoodText);
    }

    return (
        <div>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="search food" 
                    onChange={handleFoodSearch}
                />
                <button className="search-btn"><i className="fa fa-search search-icon"></i></button>
            </div>
            <div className="meals-container">
                <div className="foods-container">
                    {
                        meals.map(meal => <Food 
                            key={meal.idMeal}
                            meal={meal} 
                            handleAddToCart={handleAddToCart}
                        ></Food>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Order Summary <i className="fab fa-shopify"></i></h3>
                    {
                        cart.map(meal => <li key={meal.idMeal}>{meal.strMeal}</li>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Meal;