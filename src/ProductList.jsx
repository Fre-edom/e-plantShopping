import React, { useState, useMemo } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const totalItems = useSelector(
    (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  // Keep prices numeric; format when rendering
  const plantsArray = useMemo(() => [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving air quality.', price: 15 },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', price: 12 },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and purifies the air.', price: 18 },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity to the air and removes toxins.', price: 20 },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg', description: 'Easy to care for and effective at removing toxins.', price: 17 },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'Purifies the air and has healing properties for skin.', price: 14 }
      ]
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2020/09/10/16/31/basil-5560874_1280.jpg', description: 'Culinary herb used worldwide; native to tropical regions from Central Africa to Southeast Asia.', price: 6 },
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3', description: 'Fragrant perennial from the Mediterranean region.', price: 20 },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3', description: 'Shrubs/vines prized for their scented flowers.', price: 18 },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2015/12/13/00/11/rosemary-1090419_1280.jpg', description: 'Woody perennial herb with needle-like leaves.', price: 20 },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2011/05/25/12/45/mint-7517_1280.jpg', description: 'Highly hybridizing genus with many cultivars.', price: 16 },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'Lemon-scented perennial in the mint family.', price: 8 },
        { name: 'Starflower', image: 'https://cdn.pixabay.com/photo/2018/04/09/22/44/spring-star-3305810_1280.jpg', description: 'Woodland perennial blooming May–June.', price: 7 },
        { name: 'Sage', image: 'https://cdn.pixabay.com/photo/2013/06/01/03/09/real-sage-115351_1280.jpg', description: 'Evergreen subshrub with gray-green leaves.', price: 15 }
      ]
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Oregano', image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg', description: 'Woody perennial in the mint family.', price: 9 },
        { name: 'Melissa', image: 'https://cdn.pixabay.com/photo/2018/05/27/01/59/melissa-3432655_1280.jpg', description: 'Genus name from Greek for “honeybee”.', price: 8 },
        { name: 'Garlic', image: 'https://cdn.pixabay.com/photo/2019/09/08/18/03/garlic-4461533_1280.jpg', description: 'Bulbous plant in the Allium genus.', price: 20 },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2020/09/10/16/31/basil-5560874_1280.jpg', description: 'Culinary herb also used as companion plant.', price: 6 },
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3', description: 'Aromatic perennial often used to deter pests.', price: 20 },
        { name: 'Lilac', image: 'https://cdn.pixabay.com/photo/2013/06/19/19/54/flowers-140200_1280.jpg', description: 'Flowering woody plants in the olive family.', price: 12 }
      ]
    },
    {
      category: 'Medicinal Plants',
      plants: [
        { name: 'Nettle', image: 'https://cdn.pixabay.com/photo/2015/05/26/20/30/stinging-nettle-785292_1280.jpg', description: 'Urtica genus; many species have stinging hairs.', price: 6 },
        { name: 'Ginger', image: 'https://cdn.pixabay.com/photo/2016/10/04/12/28/ginger-1714196_1280.jpg', description: 'Rhizome widely used as spice and folk medicine.', price: 16 },
        { name: 'Geranium', image: 'https://cdn.pixabay.com/photo/2019/06/20/12/33/geranium-4287012_1280.jpg', description: 'Large genus of annuals, biennials, perennials.', price: 13 },
        { name: 'Coltsfoot', image: 'https://cdn.pixabay.com/photo/2025/03/24/20/21/coltsfoot-9491300_1280.jpg', description: 'Tussilago farfara; name derives from Latin for cough.', price: 8 },
        { name: 'Hemp', image: 'https://cdn.pixabay.com/photo/2021/10/24/21/17/leaf-6739312_1280.jpg', description: 'Industrial Cannabis sativa cultivars.', price: 52 },
        { name: 'Poppies', image: 'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg', description: 'Papaver genus; temperate regions.', price: 12 }
      ]
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        { name: 'Begonia', image: 'https://cdn.pixabay.com/photo/2023/03/25/13/34/begonia-7875959_1280.jpg', description: 'Over 2,000 species; popular houseplants.', price: 32 },
        { name: 'Fittonia', image: 'https://cdn.pixabay.com/photo/2016/06/15/11/43/fittonia-1458810_1280.jpg', description: 'Evergreen perennials native to South America.', price: 10 },
        { name: 'Peperomia', image: 'https://cdn.pixabay.com/photo/2016/07/27/20/17/peperomia-1546175_1280.jpg', description: 'Large genus in Piperaceae family.', price: 15 },
        { name: 'Pothos', image: 'https://cdn.pixabay.com/photo/2023/09/02/21/59/plant-8229629_1280.jpg', description: 'Common houseplant Epipremnum aureum.', price: 8 },
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2023/07/09/14/26/sanseviera-8116265_1280.jpg', description: 'Dracaena trifasciata; hardy and forgiving.', price: 18 },
        { name: 'Monstera', image: 'https://cdn.pixabay.com/photo/2022/10/14/02/35/monstera-7520305_1280.jpg', description: 'Monstera deliciosa, aka Swiss cheese plant.', price: 35 },
        { name: 'Cactus', image: 'https://cdn.pixabay.com/photo/2018/06/07/17/11/succulents-3460497_1280.jpg', description: 'Succulents adapted to arid climates; very low care.', price: 35 }
      ]
    }
  ], []);

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // fixed
    fontSize: '20px'
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px'
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none'
  };

  const handleCartClick = () => setShowCart(true);
  const handlePlantsClick = () => setShowCart(false);
  const handleContinueShopping = () => setShowCart(false);

  const handleAddToCart = (plant) => {
    // prevent re-adding if already added (per session)
    if (addedToCart[plant.name]) return;
    dispatch(addItem({
      id: plant.name,            // ensure your reducer expects these fields
      name: plant.name,
      price: plant.price,
      image: plant.image,
    }));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const formatPrice = (n) => `$${n.toFixed(2).replace(/\.00$/, '')}`;

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery logo" />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={styleObjUl}>
          <button onClick={handlePlantsClick} style={{ ...styleA, background: 'transparent', border: 0, cursor: 'pointer' }}>
            Plants
          </button>
          <button onClick={handleCartClick} style={{ ...styleA, background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }} aria-label="Open cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="40" width="40" aria-hidden="true">
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span style={{ marginLeft: 8, fontSize: 20 }}>({totalItems})</span>
          </button>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <div key={category.category}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const key = `${category.category}-${plant.name}`;
                  return (
                    <div className="product-card" key={key}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-cost">{formatPrice(plant.price)}</div>
                      <button
                        className="product-button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={!!addedToCart[plant.name]}
                        aria-disabled={!!addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
