import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Dishes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterDishes = (dishes) => {
    if (!searchQuery) {
      return dishes;
    }
  
    const filteredDishes = dishes.filter((dish) =>
      dish.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredDishes;
  };
  const breakfastDishes = [
    {
      id: 1,
      image: './breakfast1.png',
      title: 'PAN SEARED SEA BASS',
      category: 'Breakfast',
    },
    {
      id: 2,
      image: './breakfast2.png',
      title: 'AVOCADO TOAST',
      category: 'Breakfast',
    },
    {
      id: 3,
      image: './breakfast3.png',
      title: 'FRENCH OMELETTE',
      category: 'Breakfast',
    },
    {
        id: 4,
        image: './breakfast4.png',
        title: 'BANANA PANCAKES',
        category: 'Breakfast',
      },
      {
        id: 5,
        image: './breakfast5.png',
        title: 'EGGS BENEDICT',
        category: 'Breakfast',
      },
      {
        id: 6,
        image: './breakfast6.png',
        title: 'BREAKFAST BURRITO',
        category: 'Breakfast',
      },
      {
        id: 7,
        image: './breakfast7.png',
        title: 'BELGIUM WAFFLES',
        category: 'Breakfast',
      },
      {
        id: 8,
        image: './breakfast8.png',
        title: 'GRANOLA PARFAIT',
        category: 'Breakfast',
      },
  ];

  const lunchDishes = [
    {
      id: 1,
      image: './lunch1.png',
      title: 'BEEF BURGER MEAL',
      category: 'Lunch',
    },
    {
      id: 2,
      image: './lunch2.png',
      title: 'CHICKEN CAESAR SALAD',
      category: 'Lunch',
    },
    {
      id: 3,
      image: './lunch3.png',
      title: 'PASTA PRIMAVERA',
      category: 'Lunch',
    },
    {
      id: 4,
      image: './lunch4.png',
      title: 'GRILLED CHICKEN SANDWICH',
      category: 'Lunch',
    },
    {
      id: 5,
      image: './lunch5.png',
      title: 'TUNA SALAD',
      category: 'Lunch',
    },
    {
      id: 6,
      image: './lunch6.png',
      title: 'VEGAN BURRITO BOWL',
      category: 'Lunch',
    },
    {
      id: 7,
      image: './lunch7.png',
      title: 'MARGHERITA PIZZA',
      category: 'Lunch',
    },
    {
      id: 8,
      image: './lunch8.png',
      title: 'STEAK FAJITAS',
      category: 'Lunch',
    },
    {
      id: 9,
      image: './lunch9.png',
      title: 'SHRIMP TACOS',
      category: 'Lunch',
    },
    {
      id: 10,
      image: './lunch10.png',
      title: 'MEDITERRANEAN GRAIN BOWL',
      category: 'Lunch',
    },
    {
        id: 11,
        image: './lunch11.png',
        title: 'SPAGHETTI AND MEATBALLS',
        category: 'Lunch',
      },
      {
        id: 12,
        image: './lunch12.png',
        title: 'CHICKEN KEBABS',
        category: 'Lunch',
      }
  ];


  const dinnerDishes = [
    {
      id: 1,
      image: './dinner1.jpeg',
      title: 'ROASTED LAMB RUMP',
      category: 'Dinner',
    },
    {
      id: 2,
      image: './dinner2.png',
      title: 'CITRUS CURED SALMON',
      category: 'Dinner',
    },
    {
      id: 3,
      image: './dinner3.png',
      title: 'VEGAN STUFFED PEPPERS',
      category: 'Dinner',
    },
    {
      id: 4,
      image: './dinner4.png',
      title: 'MUSSELS SOUP',
      category: 'Dinner',
    },
    {
      id: 5,
      image: './dinner5.png',
      title: 'ITALIAN SPAGHETTI',
      category: 'Dinner',
    },
    {
      id: 6,
      image: './dinner6.png',
      title: 'GRILLED FISH',
      category: 'Dinner',
    },
    {
      id: 7,
      image: './dinner7.png',
      title: 'BRAISED SHORT RIBS',
      category: 'Dinner',
    },
    {
      id: 8,
      image: './dinner8.png',
      title: 'VEGETABLE RISOTTO',
      category: 'Dinner',
    },
    {
      id: 9,
      image: './dinner9.png',
      title: 'CHICKEN MARSALA',
      category: 'Dinner',
    },
    {
      id: 10,
      image: './dinner10.png',
      title: 'SEARED SCALLOPS',
      category: 'Dinner',
    },
    {
        id: 11,
        image: './dinner11.png',
        title: 'BEEF WELLINGTON',
        category: 'Dinner',
      },
      {
        id: 12,
        image: './dinner12.png',
        title: 'LOBSTER TAIL',
        category: 'Dinner',
      },
];
const dessertDishes = [
    {
      id: 1,
      image: './dessert1.png',
      title: 'CHOCOLATE LAVA CAKE',
      category: 'Dessert',
    },
    {
      id: 2,
      image: './dessert2.png',
      title: 'STRAWBERRY CHEESECAKE',
      category: 'Dessert',
    },
    {
      id: 3,
      image: './dessert3.png',
      title: 'TIRAMISU',
      category: 'Dessert',
    },
    {
      id: 4,
      image: './dessert4.png',
      title: 'LEMON TART',
      category: 'Dessert',
    },
];


return (
  <>
    <section className='dishes' id='dishes'>
      <div className='container'>
        <div className='heading_section'>
          <h1 className='heading'>MENU</h1>
          <p>
          Welcome to the DineEase menu, where every dish is crafted to perfection. Explore our carefully curated selection of meals, designed to satisfy your culinary cravings. Whether you’re starting your day with a hearty breakfast, enjoying a flavorful lunch, or indulging in a delectable dinner, we have something for everyone. Discover the tastes and textures that make dining with us an exceptional experience.
          </p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
          <input
            type="text"
            placeholder="Search Items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Display filtered Breakfast dishes */}
        <div className='dishes_section'>
          <h2>Breakfast</h2>
          <div className='dishes_container'>
            {filterDishes(breakfastDishes).map((dish) => (
              <div className='card' key={dish.id}>
                <img src={dish.image} alt={dish.title} />
                <h3>{dish.title}</h3>
                <button>{dish.category}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Display filtered Lunch dishes */}
        <div className='dishes_section'>
          <h2>Lunch</h2>
          <div className='dishes_container'>
            {filterDishes(lunchDishes).map((dish) => (
              <div className='card' key={dish.id}>
                <img src={dish.image} alt={dish.title} />
                <h3>{dish.title}</h3>
                <button>{dish.category}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Display filtered Dinner dishes */}
        <div className='dishes_section'>
          <h2>Dinner</h2>
          <div className='dishes_container'>
            {filterDishes(dinnerDishes).map((dish) => (
              <div className='card' key={dish.id}>
                <img src={dish.image} alt={dish.title} />
                <h3>{dish.title}</h3>
                <button>{dish.category}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Display filtered Dessert dishes */}
        <div className='dishes_section'>
          <h2>Desserts</h2>
          <div className='dishes_container'>
            {filterDishes(dessertDishes).map((dish) => (
              <div className='card' key={dish.id}>
                <img src={dish.image} alt={dish.title} />
                <h3>{dish.title}</h3>
                <button>{dish.category}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);
};

export default Dishes;
