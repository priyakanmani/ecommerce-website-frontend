


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
    window.location.href = `/${productName}`; // Replace with your product detail route
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
            name: 'Water Bottle',
            price: '₹99.99',
            image: 'https://homafy.com/wp-content/uploads/2023/03/school-water-bottle.jpeg',
            rating: 4.2,
          },
          {
            id: 2,
            name: 'Kids Toy',
            price: '₹199.99',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/DO/FG/RR/133964037/h60689cd082fd44cf9511c1a08b1974016.jpg',
            rating: 3.8,
          },
          {
            id: 3,
            name: 'Kids Wear',
            price: '₹999.99',
            image: 'https://www.seasonbazaar.com/wp-content/uploads/2018/07/63a7fbf0-a69c-4b3b-8f5a-550a66e6d6dc.jpg',
            rating: 4.5,
          },
          {
            id: 4,
            name: 'Jewels',
            price: '₹299.99',
            image: 'https://jewelemarket.com/cdn/shop/files/10513384GL.jpg?v=1694667492',
            rating: 4.0,
          },
          {
            id: 5,
            name: 'Mens Wear',
            price: '₹499.99',
            image: 'https://successmenswear.com/cdn/shop/files/FW_550x.jpg?v=1702723086',
            rating: 4.2,
          },
          {
            id: 6,
            name: 'Decoration Lights',
            price: '₹150.00',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51qVqa1DbwL._AC_SL1500_.jpg',
            rating: 3.8,
          },
          {
            id: 7,
            name: 'Traditional Wears',
            price: '₹799.99',
            image: 'https://resources.indianclothstore.com/resources/productimages/Grey-Silk-Saree-With-Blouse-757122012024.jpg',
            rating: 4.9,
          },
          {
            id: 8,
            name: 'Birthday Gifts',
            price: '₹299.99',
            image: 'https://images-cdn.ubuy.co.in/64e5ab54005409267f5ae106-happy-birthday-gift-box-birthday-cake.jpg',
            rating: 4.5,
          },
          {
          id: 1,
          name: 'Water Bottle',
          price: '₹99.99',
          image: 'https://homafy.com/wp-content/uploads/2023/03/school-water-bottle.jpeg',
          rating: 4.2,
        },
        {
          id: 2,
          name: 'Water Bottle',
          price: '₹199.99',
          image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20371610/2022/10/12/398a6265-ed4c-4ecc-acb5-7a19107330551665565301005WaterBottle1.jpg',
          rating: 3.8,
        },
        {
          id: 3,
          name: 'Water Bottle',
          price: '₹249.99',
          image: 'https://market99.com/cdn/shop/files/kids-water-bottle-830ml-water-bottles-1.jpg?v=1697017155',
          rating: 4.5,
        },
        {
          id: 4,
          name: 'Water Bottle',
          price: '₹299.99',
          image: 'https://www.milton.in/cdn/shop/files/gps_generated_415e19f5-21c2-4fa0-8599-e82e7862bf78.png?v=1736934089',
          rating: 4.0,
        },
        {
          id: 5,
          name: 'Water Bottle',
          price: '₹200.00',
          image: 'https://www.dillerbottle.com/wp-content/uploads/2024/09/p202407111118336da6b.jpg',
          rating: 4.2,
        },
        {
          id: 6,
          name: 'Water Bottle',
          price: '₹150.00',
          image: 'https://assets.ajio.com/medias/sys_master/root/20240422/xVOE/66256c0a05ac7d77bb1afd32/-473Wx593H-467266350-silver-MODEL7.jpg',
          rating: 3.8,
        },
        {
          id: 7,
          name: 'Water Bottle',
          price: '₹329.99',
          image: 'https://m.media-amazon.com/images/I/41IEcqA6QoL._AC_.jpg',
          rating: 4.9,
        },
        {
          id: 8,
          name: 'Water Bottle',
          price: '₹299.99',
          image: 'https://m.media-amazon.com/images/I/71b78lqWPVL.jpg',
          rating: 4.5,
        },
        {
        id: 1,
        name: 'Traditional Wears',
        price: '₹1099.99',
        image: 'https://resources.indianclothstore.com/resources/productimages/Grey-Silk-Saree-With-Blouse-757122012024.jpg',
        rating: 4.2,
      },
      {
        id: 2,
        name: 'Traditional Wears',
        price: '₹1199.99',
        image: 'https://i.etsystatic.com/42187756/r/il/014760/6241602352/il_570xN.6241602352_l28g.jpg',
        rating: 3.8,
      },
      {
        id: 3,
        name: 'Traditional Wears',
        price: '₹1249.99',
        image: 'https://i0.wp.com/www.reshmafattepurkar.com/wp-content/uploads/2021/04/south-indian-look-for-wedding.jpg?ssl=1',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Traditional Wears',
        price: '₹1299.99',
        image: 'https://lh7-us.googleusercontent.com/duIyz-On_X4piT-6JGdny0gM-LZn8SnDjaQyKmTg_QSJuOP_sPD6NuSfeyXHU-_-27JPAXLW2TRKZCIVVOR9GQvSAnzz9Ythyv6AfoFk4KZ8vr3anFN9EjKfdSrLlZkNQdmfSGXLBauqwMTFk8Txbtw',
        rating: 4.0,
      },
      {
        id: 5,
        name: 'Traditional Wears',
        price: '₹1200.00',
        image: 'https://images.meesho.com/images/products/389875880/cquen_512.webp',
        rating: 4.2,
      },
      {
        id: 6,
        name: 'Traditional Wears',
        price: '₹1150.00',
        image: 'https://lh7-us.googleusercontent.com/iPWfJvypDLiA1K9LjNALMJRJAwtRgwTYF49OwTwbL4vPXfsKRNOJ53HLbFYJceeIh7z4SotbyQG3uTK1JiQg5reO060kkgTlzXHZ8OKf1dIMks1pyuw0Fhsju4Qe-JG0ytY_EMLkPYEpz_y5gLtRej0',
        rating: 3.8,
      },
      {
        id: 7,
        name: 'Traditional Wears',
        price: '₹1329.99',
        image: 'https://i.etsystatic.com/26009472/r/il/07b340/3155685541/il_570xN.3155685541_i4xy.jpg',
        rating: 4.9,
      },
      {
        id: 8,
        name: 'Traditional Wears',
        price: '₹1299.99',
        image: 'https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781230937/SS22S1-1.jpg',
        rating: 4.5,
      },
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
      {
        id: 1,
        name: 'Kids Toy',
        price: '₹99.99',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/DO/FG/RR/133964037/h60689cd082fd44cf9511c1a08b1974016-500x500.jpg',
        rating: 4.2,
      },
      {
        id: 2,
        name: 'Kids Toy',
        price: '₹199.99',
        image: 'https://m.media-amazon.com/images/I/81yzVgxDxwL.jpg',
        rating: 3.8,
      },
      {
        id: 3,
        name: 'Kids Toy',
        price: '₹249.99',
        image: 'https://s.alicdn.com/@sc04/kf/H4b15c9064f6d42348be129ec6382217bZ.jpg_720x720q50.jpg',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Kids Toy',
        price: '₹299.99',
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/stuffed-toy/v/8/7/baby-elephant-for-kids-soft-stuff-toy-cute-lovely-huggable-pink-original-imaggx23yneygt9r.jpeg?q=20&crop=false',
        rating: 4.0,
      },
      {
        id: 5,
        name: 'Kids Toy',
        price: '₹200.00',
        image: 'https://previews.123rf.com/images/jumprost/jumprost1107/jumprost110700006/10105690-yellow-rubber-toy-duck-swimming-in-water.jpg',
        rating: 4.2,
      },
      {
        id: 6,
        name: 'Kids Toy',
        price: '₹150.00',
        image: 'https://m.media-amazon.com/images/I/61dsci7GKbL.jpg',
        rating: 3.8,
      },
      {
        id: 7,
        name: 'Kids Toy',
        price: '₹329.99',
        image: 'https://img1.exportersindia.com/product_images/bc-full/dir_159/4757310/barbie-doll-toy-1511772044-3480491.jpeg',
        rating: 4.9,
      },
      {
        id: 8,
        name: 'Kids Toy',
        price: '₹299.99',
        image: 'https://image.made-in-china.com/226f3j00aNiQjKEGYLqB/Lamborghini-Licensed-Ride-on-Car-Kids-Electric-Car-Toy-Car.webp',
        rating: 4.5,
      },
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
      {
        id: 1,
        name: 'Kids Wear',
        price: '₹99.99',
        image: 'https://www.seasonbazaar.com/wp-content/uploads/2018/07/63a7fbf0-a69c-4b3b-8f5a-550a66e6d6dc.jpg',
        rating: 4.2,
      },
      {
        id: 2,
        name: 'Kids Wear',
        price: '₹199.99',
        image: 'https://www.mumkins.in/cdn/shop/files/gown-for-girls-gs186005-pink-model-image.jpg?v=1687158669&width=1080',
        rating: 3.8,
      },
      {
        id: 3,
        name: 'Kids Wear',
        price: '₹249.99',
        image: 'https://www.fayonkids.com/cdn/shop/files/manufactured-by-fayon-kids-noida-u-p-lilac-neoprene-dress-for-girls-40946014781696.jpg?v=1715940305&width=533',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Kids Wear',
        price: '₹299.99',
        image: 'https://www.okboss.co.in/assets/img/home/boys%20birthday%20wear/three%20peace%20casual%20wear.jpg',
        rating: 4.0,
      },
      {
        id: 5,
        name: 'Kids Wear',
        price: '₹200.00',
        image: 'https://www.anantexports.in/cdn/shop/files/rn-image_picker_lib_temp_27d1f21f-aad2-4f32-8a0f-caed9c1441a0_990x.jpg?v=1696539991',
        rating: 4.2,
      },
      {
        id: 6,
        name: 'Kids Wear',
        price: '₹150.00',
        image: 'https://www.pinkblueindia.com/wp-content/uploads/2024/01/twinsbabysatinnightsuit.jpg',
        rating: 3.8,
      },
      {
        id: 7,
        name: 'Kids Wear',
        price: '₹329.99',
        image: 'https://doux.in/cdn/shop/products/OE_O__20220426185518_1200x1200.jpg?v=1654237992',
        rating: 4.9,
      },
      {
        id: 8,
        name: 'Kids Wear',
        price: '₹299.99',
        image: 'https://www.rajeshkidswear.com/VendorAssets/1031/StoreImages/extralarge/117501180MAROON.jpg',
        rating: 4.5,
      },
      {
        id: 1,
        name: 'Decoration Lights',
        price: '₹99.99',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51qVqa1DbwL._AC_SL1500_.jpg',
        rating: 4.2,
      },
      {
        id: 2,
        name: 'Decoration Lights',
        price: '₹199.99',
        image: 'https://images-cdn.ubuy.co.in/635831859fa42c4ffe327695-outdoor-string-lights-28ft-led-bulbs-g40.jpg',
        rating: 3.8,
      },
      {
        id: 3,
        name: 'Decoration Lights',
        price: '₹249.99',
        image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2024/8/hanging-lights_0_1200.jpg',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Decoration Lights',
        price: '₹299.99',
        image: 'https://www.kuberindustries.co.in/uploads/kuberindustries/products/kuber-industries-lantern-shape-string-lightsgolden-metal-home-decoration-lightstring-fairy-lights-fo-4519624345400309_l.jpg',
        rating: 4.0,
      },
      {
        id: 5,
        name: 'Decoration Lights',
        price: '₹200.00',
        image: 'https://ikiru.in/cdn/shop/products/buy-hanging-lights-golden-brass-and-glass-round-ceiling-hanging-lights-or-pendant-lamp-for-indoor-and-outdoor-home-decoration-by-fos-lighting-on-ikiru-online-store-1_700x700.jpg?v=1724847726',
        rating: 4.2,
      },
      {
        id: 6,
        name: 'Decoration Lights',
        price: '₹150.00',
        image: 'https://i.pinimg.com/736x/3a/3e/84/3a3e84cb0ddfbde60835cb0bb5aba563.jpg',
        rating: 3.8,
      },
      {
        id: 7,
        name: 'Decoration Lights',
        price: '₹329.99',
        image: 'https://images-cdn.ubuy.co.in/651491e2eb2673525249650d-jhy-design-birdcage-bulb-decorative-lamp.jpg',
        rating: 4.9,
      },
      {
        id: 8,
        name: 'Decoration Lights',
        price: '₹299.99',
        image: 'https://homelyarts.in/cdn/shop/products/61u28Xap_nL._SL1240.jpg?v=1645085141',
        rating: 4.5,
      },
      {
        id: 1,
        name: 'Birthday Gifts',
        price: '₹99.99',
        image: 'https://img.fruugo.com/product/7/95/447698957_max.jpg',
        rating: 4.2,
      },
      {
        id: 2,
        name: 'Birthday Gifts',
        price: '₹199.99',
        image: 'https://i.etsystatic.com/10846622/r/il/c00ee7/6345885923/il_570xN.6345885923_32dv.jpg',
        rating: 3.8,
      },
      {
        id: 3,
        name: 'Birthday Gifts',
        price: '₹249.99',
        image: 'https://img.drz.lazcdn.com/static/pk/p/283453834348498c39b6140b29c6815f.jpg_720x720q80.jpg',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Birthday Gifts',
        price: '₹299.99',
        image: 'https://happiclap.com/wp-content/uploads/2019/06/Jar-de-Memories-M.jpg',
        rating: 4.0,
      },
      {
        id: 5,
        name: 'Birthday Gifts',
        price: '₹200.00',
        image: 'https://m.media-amazon.com/images/I/71JfIZjmgQL.jpg',
        rating: 4.2,
      },
      {
        id: 6,
        name: 'Birthday Gifts',
        price: '₹150.00',
        image: 'https://cdn-lilhp.nitrocdn.com/nFYsDudGUmrLNwjZAEytodEVDXZuvubF/assets/images/optimized/rev-93ac054/welno.in/wp-content/uploads/2023/10/Boat-Couple.jpg',
        rating: 3.8,
      },
      {
        id: 7,
        name: 'Birthday Gifts',
        price: '₹329.99',
        image: 'https://i.pinimg.com/736x/fb/2b/ff/fb2bffa2c8bbb97878a566b7d9f38278.jpg',
        rating: 4.9,
      },
      {
        id: 8,
        name: 'Birthday Gifts',
        price: '₹299.99',
        image: 'https://i.ebayimg.com/images/g/nasAAOSwqjVheBVq/s-l1600.jpg',
        rating: 4.5,
      },


  ];

  return (
    <>
      <style>{styles.css}</style>
      <div>
        {/* <nav className="top-navbar">
          <h1 className="logo">ShopEase</h1>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav> */}

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


