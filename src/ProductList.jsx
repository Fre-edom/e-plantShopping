import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(true); // Set to true to initially show plants
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const totalItems = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));


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
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2020/09/10/16/31/basil-5560874_1280.jpg",
                    description: "Basil, also called great basil, is a culinary herb of the family Lamiaceae. It is a tender plant, and is used in cuisines worldwide. In Western cuisine, the generic term basil refers to the variety also known as Genovese basil or sweet basil. Basil is native to tropical regions from Central Africa to Southeast Asia.",
                    cost: "$6"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Lavandula is a genus of 47 known species of perennial flowering plants in the sage family, Lamiaceae. It is native to the Old World, primarily found across the drier, warmer regions of the Mediterranean, with an affinity for maritime breezes.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Jasmine is a genus of shrubs and vines in the olive family of Oleaceae. It contains around 200 species native to tropical and warm temperate regions of Eurasia, Africa, and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2015/12/13/00/11/rosemary-1090419_1280.jpg",
                    description: "Salvia rosmarinus, commonly known as rosemary, is a shrub with fragrant, evergreen, needle-like leaves and purple or sometimes white, pink, or blue flowers. It is a member of the sage family, Lamiaceae. The species is native to the Mediterranean region, as well as Portugal and Spain.",
                    cost: "$20"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2011/05/25/12/45/mint-7517_1280.jpg",
                    description: "Mentha, also known as mint, is a genus of flowering plants in the mint family, Lamiaceae. It is estimated that 13 to 24 species exist, but the exact distinction between species is unclear. Hybridization occurs naturally where some species' ranges overlap. Many hybrids and cultivars are known.",
                    cost: "$16"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Lemon balm is a perennial herbaceous plant in the mint family. It has lemon-scented leaves, white or pale pink flowers, and contains essential oils and compounds like geranial and neral. It grows to a maximum height of 1 m.",
                    cost: "$8"
                },
                {
                    name: "Starflower",
                    image: "https://cdn.pixabay.com/photo/2018/04/09/22/44/spring-star-3305810_1280.jpg",
                    description: "Lysimachia borealis, the starflower, is a North American woodland perennial that blooms between May and June.",
                    cost: "$7"
                },
                {
                    name: "Sage",
                    image: "https://cdn.pixabay.com/photo/2013/06/01/03/09/real-sage-115351_1280.jpg",
                    description: "Salvia officinalis, common sage or sage, is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers. It is a member of the mint family and native to the Mediterranean region, though it has been naturalized in many places throughout the world.",
                    cost: "$15"
                }

            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "Oregano is a species of flowering plant in the mint family, Lamiaceae. It was native to the Mediterranean region, but widely naturalised elsewhere in the temperate Northern Hemisphere. Oregano is a woody perennial plant, growing to 90 cm tall, with opposite leaves 1–4 cm long.",
                    cost: "$9"
                },
                {
                    name: "Melissa",
                    image:"https://cdn.pixabay.com/photo/2018/05/27/01/59/melissa-3432655_1280.jpg",
                    description: "Melissa is a genus of perennial herbs in the family Lamiaceae. Its species are native to Europe and Asia but cultivated and naturalized in many other places. The name Melissa is derived from the Greek word μέλισσα meaning honeybee, owing to the abundance of nectar in the flowers.",
                    cost: "$8"
                },
                {
                    name: "Garlic",
                    image: "https://cdn.pixabay.com/photo/2019/09/08/18/03/garlic-4461533_1280.jpg",
                    description: "Garlic is a species of bulbous flowering plants in the genus Allium. Its close relatives include the onion, shallot, leek, chives, Welsh onion, and Chinese onion.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2020/09/10/16/31/basil-5560874_1280.jpg",
                    description: "Basil, also called great basil, is a culinary herb of the family Lamiaceae. It is a tender plant, and is used in cuisines worldwide. In Western cuisine, the generic term basil refers to the variety also known as Genovese basil or sweet basil. Basil is native to tropical regions from Central Africa to Southeast Asia.",
                    cost: "$6"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Lavandula is a genus of 47 known species of perennial flowering plants in the sage family, Lamiaceae. It is native to the Old World, primarily found across the drier, warmer regions of the Mediterranean, with an affinity for maritime breezes.",
                    cost: "$20"
                },
                {
                    name: "Lilac",
                    image: "https://cdn.pixabay.com/photo/2013/06/19/19/54/flowers-140200_1280.jpg",
                    description: "Syringa is a genus of 12 currently recognized species of flowering woody plants in the olive family or Oleaceae called lilacs. These lilacs are native to woodland and scrub from southeastern Europe to eastern Asia, and widely and commonly cultivated in temperate areas elsewhere.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Nettle",
                    image: "https://cdn.pixabay.com/photo/2015/05/26/20/30/stinging-nettle-785292_1280.jpg",
                    description: "Urtica is a genus of flowering plants in the family Urticaceae. Many species have stinging hairs and may be called nettles or stinging nettles. The generic name Urtica derives from the Latin for 'sting'. Due to the stinging hairs, Urtica are rarely eaten by herbivores, but provide shelter for insects.",
                    cost: "$6"
                },
                {
                    name: "Ginger",
                    image: "https://cdn.pixabay.com/photo/2016/10/04/12/28/ginger-1714196_1280.jpg",
                    description: "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine. It is an herbaceous perennial that grows annual pseudostems about one meter tall, bearing narrow leaf blades.",
                    cost: "$16"
                },
                {
                    name: "Geranium",
                    image: "https://cdn.pixabay.com/photo/2019/06/20/12/33/geranium-4287012_1280.jpg",
                    description: "Geranium is a genus of 422 species of annual, biennial, and perennial plants that are commonly known as geraniums or cranesbills. They are found throughout the temperate regions of the world and the mountains of the tropics, with the greatest diversity in the eastern part of the Mediterranean region.",
                    cost: "$13"
                },
                {
                    name: "Coltsfoot",
                    image: "https://cdn.pixabay.com/photo/2025/03/24/20/21/coltsfoot-9491300_1280.jpg",
                    description: "Tussilago farfara, commonly known as coltsfoot, is a plant in the tribe Senecioneae in the family Asteraceae, native to Europe and parts of western and central Asia. The name tussilago is derived from the Latin tussis, meaning cough, and ago, meaning to cast or to act on.",
                    cost: "$8"
                },
                {
                    name: "Hemp",
                    image: "https://cdn.pixabay.com/photo/2021/10/24/21/17/leaf-6739312_1280.jpg",
                    description: "Hemp, or industrial hemp, is a plant in the botanical class of Cannabis sativa cultivars grown specifically for industrial and consumable use. It can be used to make a wide range of products. Along with bamboo, hemp is among the fastest growing plants on Earth.",
                    cost: "$52"
                },
                {
                    name: "Poppies",
                    image: "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg",
                    description: "Papaver is a genus of 70–100 species of frost-tolerant annuals, biennials, and perennials native to temperate and cold regions of Eurasia, Africa and North America. It is the type genus of the poppy family, Papaveraceae.",
                    cost: "$12"
                }

            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "Begonia",
                    image: "https://cdn.pixabay.com/photo/2023/03/25/13/34/begonia-7875959_1280.jpg",
                    description: "Begonia is a genus of perennial flowering plants in the family Begoniaceae. The genus contains more than 2,000 different plant species. The Begonias are native to moist subtropical and tropical climates. Some species are commonly grown indoors as ornamental houseplants in cooler climates.",
                    cost: "$32"
                },
                {
                    name: "Fittonia",
                    image: "https://cdn.pixabay.com/photo/2016/06/15/11/43/fittonia-1458810_1280.jpg",
                    description: "Fittonia is a genus of evergreen perennial flowering plants in the acanthus family, Acanthaceae. The genus is native to tropical and subtropical forested areas in northern and western South America, mainly Perú. The most commonly cultivated species is F. albivenis and its range of cultivars.",
                    cost: "$10"
                },
                {
                    name: "Peperomia",
                    image: "https://cdn.pixabay.com/photo/2016/07/27/20/17/peperomia-1546175_1280.jpg",
                    description: "Peperomia is one of the two large genera of the family Piperaceae. It is estimated that there are at least over 1,000 species, occurring in all tropical and subtropical regions of the world.",
                    cost: "$15"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2023/09/02/21/59/plant-8229629_1280.jpg",
                    description: "Pothos is a genus of flowering plants in the family Araceae. It is native to China, the Indian Subcontinent, Australia, New Guinea, Southeast Asia, and various islands of the Pacific and Indian Oceans. The common houseplant Epipremnum aureum, also known as pothos, was once classified under the genus Pothos.",
                    cost: "$8"
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2023/07/09/14/26/sanseviera-8116265_1280.jpg",
                    description: "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names.",
                    cost: "$18"
                },
                {
                    name: "Monstera",
                    image: "https://cdn.pixabay.com/photo/2022/10/14/02/35/monstera-7520305_1280.jpg",
                    description: "Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant. The common name Swiss cheese plant is also used for the related species from the same genus, Monstera adansonii.",
                    cost: "$35"
                },
                {
                    name: "Cactus",
                    image: "https://cdn.pixabay.com/photo/2018/06/07/17/11/succulents-3460497_1280.jpg",
                    description: "Monstera deliciosa, the Swiss cheese p",
                    cost: "$35"
                }
            ]
        }
    ];
    const styleObj={
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
       }
       const styleObjUl={
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
       }
       const styleA={
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
       }
       const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };
    
       const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
      };
        return (
            <div>
                 <div className="navbar" style={styleObj}>
                <div className="tag">
                   <div className="luxury">
                   <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                   <a href="/" style={{textDecoration:'none'}}>
                            <div>
                        <h3 style={{color:'white'}}>Paradise Nursery</h3>
                        <i style={{color:'white'}}>Where Green Meets Serenity</i>
                        </div>
                        </a>
                    </div>
                  
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg><span style={{ marginLeft: '5px', color: 'white', fontSize: '20px' }}>({totalItems})</span></h1></a></div>
                </div>
            </div>
            {!showCart? (
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1><div>{category.category}</div></h1>
                    <div className="product-list">
                        {category.plants.map((plant, plantIndex) => (
                        <div className="product-card" key={plantIndex}>
                            <img className="product-image" src={plant.image} alt={plant.name} />
                            <div className="product-title">{plant.name}</div>
                            <div className="product-description">{plant.description}</div>
                            <div className="product-cost">{plant.cost}</div>
                    {/*Similarly like the above plant.name show other details like description and cost*/}
                    <button  className="product-button" onClick={() => handleAddToCart(plant)} disabled={addedToCart[plant.name]}>{addedToCart[plant.name] ? 'Added' : 'Add to Cart'}</button>
                </div>
                ))}
            </div> 
        </div>
        ))}
    
    
            </div>
     ) :  (
        <CartItem onContinueShopping={handleContinueShopping}/>
    )}
        </div>
        );
    }
    
    export default ProductList;