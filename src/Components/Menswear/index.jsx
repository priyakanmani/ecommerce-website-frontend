


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
            name: 'Mens Wear',
            price: '₹99.99',
            image: 'https://successmenswear.com/cdn/shop/files/FW_550x.jpg?v=1702723086',
            rating: 4.2,
          },
          {
            id: 2,
            name: 'Mens Wear',
            price: '₹199.99',
            image: 'https://imageio.forbes.com/specials-images/imageserve/62e45a89672278e86b5398e8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
            rating: 3.8,
          },
          {
            id: 3,
            name: 'Mens Wear',
            price: '₹249.99',
            image: 'https://www.bonsoir.co.in/cdn/shop/products/Jacquard_Indo-western_Achkan_Set.jpg?crop=center&height=844&v=1730193044&width=650',
            rating: 4.5,
          },
          {
            id: 4,
            name: 'Mens Wear',
            price: '₹299.99',
            image: 'https://balajiemporium.com/wp-content/uploads/2024/06/Untitled-6-2.png',
            rating: 4.0,
          },
          {
            id: 5,
            name: 'Mens Wear',
            price: '₹200.00',
            image: 'https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/c/r/cream-dupion-silk-men-kurta-with-dhoti-mkpa0568-1_1.jpg',
            rating: 4.2,
          },
          {
            id: 6,
            name: 'Mens Wear',
            price: '₹150.00',
            image: 'https://images.meesho.com/images/products/459074943/vu0we_512.webp',
            rating: 3.8,
          },
          {
            id: 7,
            name: 'Mens Wear',
            price: '₹329.99',
            image: 'https://images.meesho.com/images/products/437110450/ofaxm_512.webp',
            rating: 4.9,
          },
          {
            id: 8,
            name: 'Mens Wear',
            price: '₹299.99',
            image: 'https://images.meesho.com/images/products/443097087/vkcrx_512.webp',
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


