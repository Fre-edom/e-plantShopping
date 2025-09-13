import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Import the addItem action
import './ProductList.css';

function ProductList() {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  // Example of your plants array. Replace this with your actual plant data.
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        },
      ]
    }
  ];

  // Handle adding the plant to the cart
  const handleAddToCart = (plant) => {
    // Dispatch the addItem action to add the plant to the cart
    dispatch(addItem(plant));

    // Update local state to reflect that the plant has been added
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant, idx) => (
              <div key={idx} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3 className="product-title">{plant.name}</h3>
                <p>{plant.description}</p>
                <p className="product-price">{plant.cost}</p>
                <button
                  className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]} // Disable button if already added
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
