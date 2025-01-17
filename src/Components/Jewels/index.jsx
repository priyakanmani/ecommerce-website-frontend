


import React, { useState } from 'react';

const styles = {
  css: `
    /* Reset and base styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }


    /* Side Navbar Styles */
    .main-container {
      margin-top: 60px;
      display: flex;
      min-height: calc(100vh - 60px);
    }

    .side-navbar {
      position: fixed;
      left: 0;
      top: 60px;
      width: 250px;
      height: calc(100vh - 60px);
      background-color: white;
      padding: 2rem;
      box-shadow: 2px 0 4px rgba(0,0,0,0.1);
    }

    .side-navbar h2 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #4F46E5;
    }

    .side-navbar ul {
      list-style: none;
    }

    .side-navbar li {
      margin-bottom: 1rem;
    }

    .side-navbar a {
      color: #666;
      text-decoration: none;
      transition: color 0.3s ease;
      display: block;
      padding: 0.5rem;
      border-radius: 4px;
    }

    .side-navbar a:hover {
      color: #4F46E5;
      background-color: #f5f5f5;
    }

    /* Product Grid Styles */
    .product-cards {
      margin-left: 250px;
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      width: calc(100% - 250px);
    }

    .card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .card img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .card-content {
      padding: 1rem;
    }

    .card h3 {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .card .price {
      color:rgb(11, 5, 122);
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .rating {
      color: #ffd700;
      margin-bottom: 1rem;
    }

    .card-actions {
      display: flex;
      gap: 1rem;
    }

    .card-actions button {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .like-btn {
      background-color:rgb(215, 222, 244);
      color: #4F46E5;
    }

    .like-btn:hover {
      background-color: #E0E7FF;
    }

    .share-btn {
      background-color:rgb(245, 217, 217);
      color: #666;
    }

    .share-btn:hover {
      background-color: #ebebeb;
    }

    /* Pop-up Styles */
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 2rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      z-index: 2000;
      text-align: center;
    }

    .popup button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #4F46E5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .popup button:hover {
      background-color: #3B3AC5;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .side-navbar {
        display: none;
      }

      .product-cards {
        margin-left: 0;
        width: 100%;
      }

      
    }
  `,
};

const Home = () => {
  const [popupMessage, setPopupMessage] = useState('');

  const handleLike = () => {
    setPopupMessage('You liked this. Thank you for your support!');
  };

  const handleShare = () => {
    setPopupMessage('You shared this. Thank you!');
  };

  const handleClosePopup = () => {
    setPopupMessage('');
  };

  const handleImageClick = (productId,productName) => {
    window.location.href = `/${productName}/${productId}`; // Replace with your product detail route
  };

  const generateStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i}>⯨</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  const products = [
    {
            id: 1,
            name: 'Jewels',
            price: '₹99.99',
            image: 'https://jewelemarket.com/cdn/shop/files/10513384GL.jpg?v=1694667492',
            rating: 4.2,
          },
          {
            id: 2,
            name: 'Jewels',
            price: '₹199.99',
            image: 'https://blogapi.perrian.com/wp-content/uploads/2022/03/5-Must-Have-Diamond-Jewellery-Pieces-You-Cant-Ignore.jpg',
            rating: 3.8,
          },
          {
            id: 3,
            name: 'Jewels',
            price: '₹249.99',
            image: 'https://www.sasitrends.com/cdn/shop/files/2326A-traditional-matte-gold-temple-jewellery-lakshmi-ruby-green-jhumka-earrings-sasitrends-online-shopping.jpg?v=1731150815&width=1080',
            rating: 4.5,
          },
          {
            id: 4,
            name: 'Jewels',
            price: '₹299.99',
            image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/a/5/e/na-hh-004-white-gold-raj-jewellery-original-imagkuvcajzsv5gz.jpeg?q=90&crop=false',
            rating: 4.0,
          },
          {
            id: 5,
            name: 'Jewels',
            price: '₹200.00',
            image: 'https://image.made-in-china.com/2f0j00SczrKZgRfvks/White-Rhinestone-Gold-Plated-Flowers-Sunflower-Cute-Fresh-Girl-Student-Ring.webp',
            rating: 4.2,
          },
          {
            id: 6,
            name: 'Jewels',
            price: '₹150.00',
            image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=90&crop=false',
            rating: 3.8,
          },
          {
            id: 7,
            name: 'Jewels',
            price: '₹329.99',
            image: 'https://i.pinimg.com/736x/e7/19/d8/e719d82169d637f8529e57d35dc4e33b.jpg',
            rating: 4.9,
          },
          {
            id: 8,
            name: 'Jewels',
            price: '₹299.99',
            image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/24489128/2023/8/14/919687e0-1834-4d2b-9c31-2ae3f07301ec1692011804191SarafRSJewelleryGold-TonedClassicDropEarrings1.jpg',
            rating: 4.5,
          },
  ];

  return (
    <>
      <style>{styles.css}</style>
      <div>
        

        <div className="main-container">
          <aside className="side-navbar">
            <h2>Categories</h2>
            <ul>
              <li><a href="/Water Bottle">Water Bottle</a></li>
              <li><a href="/Kids Toy">Kids Toy</a></li>
              <li><a href="/Kids Wear">Kids Wear</a></li>
              <li><a href="/Jewels">Jewels</a></li>
              <li><a href="/Mens Wear">Mens Wear</a></li>
              <li><a href="/Decoration Lights">Decoration Lights</a></li>
              <li><a href="/Traditional Wears">Traditional Wears</a></li>
              <li><a href="/Birthday Gifts">Birthday Gifts</a></li>
            </ul>
          </aside>

          <section className="product-cards">
            {products.map((product) => (
              <div key={product.id} className="card">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => handleImageClick(product.id,product.name)}
                />
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <div className="rating">{generateStarRating(product.rating)}</div>
                  <div className="card-actions">
                    <button className="like-btn" onClick={handleLike}>
                       Like
                    </button>
                    <button className="share-btn" onClick={handleShare}>
                       Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {popupMessage && (
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;


