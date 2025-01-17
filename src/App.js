// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';  
import Login from './Components/Login';  
import Signup from './Components/Signup'; 
import Layout from './Components/Layout'; 
import Contact from './Components/Contact'; 

import Waterbottle from './Components/waterbottle';
import Waterbottle1 from './Components/waterbottle/Product1';
import Waterbottle2 from './Components/waterbottle/Product2';
import Waterbottle3 from './Components/waterbottle/Product3';
import Waterbottle4 from './Components/waterbottle/Product4';
import Waterbottle5 from './Components/waterbottle/Product5';
import Waterbottle6 from './Components/waterbottle/Product6';
import Waterbottle7 from './Components/waterbottle/Product7';
import Waterbottle8 from './Components/waterbottle/Product8';


import KidsToy from './Components/Kidstoy';
import KidsToy1 from './Components/Kidstoy/Product1';
import KidsToy2 from './Components/Kidstoy/Product2';
import KidsToy3 from './Components/Kidstoy/Product3';
import KidsToy4 from './Components/Kidstoy/Product4';
import KidsToy5 from './Components/Kidstoy/Product5';
import KidsToy6 from './Components/Kidstoy/Product6';
import KidsToy7 from './Components/Kidstoy/Product7';
import KidsToy8 from './Components/Kidstoy/Product8';


import KidsWear from './Components/Kidswear';
import KidsWear1 from './Components/Kidswear/Product1';
import KidsWear2 from './Components/Kidswear/Product2';
import KidsWear3 from './Components/Kidswear/Product3';
import KidsWear4 from './Components/Kidswear/Product4';
import KidsWear5 from './Components/Kidswear/Product5';
import KidsWear6 from './Components/Kidswear/Product6';
import KidsWear7 from './Components/Kidswear/Product7';
import KidsWear8 from './Components/Kidswear/Product8';


import Jewels from './Components/Jewels';
import Jewels1 from './Components/Jewels/Product1';
import Jewels2 from './Components/Jewels/Product2';
import Jewels3 from './Components/Jewels/Product3';
import Jewels4 from './Components/Jewels/Product4';
import Jewels5 from './Components/Jewels/Product5';
import Jewels6 from './Components/Jewels/Product6';
import Jewels7 from './Components/Jewels/Product7';
import Jewels8 from './Components/Jewels/Product8';


import Menswear from './Components/Menswear';
import Menswear1 from './Components/Menswear/Product1';
import Menswear2 from './Components/Menswear/Product2';
import Menswear3 from './Components/Menswear/Product3';
import Menswear4 from './Components/Menswear/Product4';
import Menswear5 from './Components/Menswear/Product5';
import Menswear6 from './Components/Menswear/Product6';
import Menswear7 from './Components/Menswear/Product7';
import Menswear8 from './Components/Menswear/Product8';


import Lights from './Components/Lights';
import Lights1 from './Components/Lights/Product1';
import Lights2 from './Components/Lights/Product2';
import Lights3 from './Components/Lights/Product3';
import Lights4 from './Components/Lights/Product4';
import Lights5 from './Components/Lights/Product5';
import Lights6 from './Components/Lights/Product6';
import Lights7 from './Components/Lights/Product7';
import Lights8 from './Components/Lights/Product8';


import TraditionalWears from './Components/TraditionalWears';
import TraditionalWears1 from './Components/TraditionalWears/Product1';
import TraditionalWears2 from './Components/TraditionalWears/Product2';
import TraditionalWears3 from './Components/TraditionalWears/Product3';
import TraditionalWears4 from './Components/TraditionalWears/Product4';
import TraditionalWears5 from './Components/TraditionalWears/Product5';
import TraditionalWears6 from './Components/TraditionalWears/Product6';
import TraditionalWears7 from './Components/TraditionalWears/Product7';
import TraditionalWears8 from './Components/TraditionalWears/Product8';


import BirthdayGifts from './Components/BirthdayGifts';
import BirthdayGifts1 from './Components/BirthdayGifts/Product1';
import BirthdayGifts2 from './Components/BirthdayGifts/Product2';
import BirthdayGifts3 from './Components/BirthdayGifts/Product3';
import BirthdayGifts4 from './Components/BirthdayGifts/Product4';
import BirthdayGifts5 from './Components/BirthdayGifts/Product5';
import BirthdayGifts6 from './Components/BirthdayGifts/Product6';
import BirthdayGifts7 from './Components/BirthdayGifts/Product7';
import BirthdayGifts8 from './Components/BirthdayGifts/Product8';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />


        <Route path="/water bottle" element={<Layout><Waterbottle /></Layout>} />
        <Route path="/water bottle/1" element={<Layout><Waterbottle1 /></Layout>} />
        <Route path="/water bottle/2" element={<Layout><Waterbottle2 /></Layout>} />
        <Route path="/water bottle/3" element={<Layout><Waterbottle3 /></Layout>} />
        <Route path="/water bottle/4" element={<Layout><Waterbottle4 /></Layout>} />
        <Route path="/water bottle/5" element={<Layout><Waterbottle5 /></Layout>} />
        <Route path="/water bottle/6" element={<Layout><Waterbottle6 /></Layout>} />
        <Route path="/water bottle/7" element={<Layout><Waterbottle7 /></Layout>} />
        <Route path="/water bottle/8" element={<Layout><Waterbottle8 /></Layout>} />


        <Route path="/Kids Toy" element={<Layout><KidsToy /></Layout>} />
        <Route path="/Kids Toy/1" element={<Layout><KidsToy1 /></Layout>} />
        <Route path="/Kids Toy/2" element={<Layout><KidsToy2 /></Layout>} />
        <Route path="/Kids Toy/3" element={<Layout><KidsToy3 /></Layout>} />
        <Route path="/Kids Toy/4" element={<Layout><KidsToy4 /></Layout>} />
        <Route path="/Kids Toy/5" element={<Layout><KidsToy5 /></Layout>} />
        <Route path="/Kids Toy/6" element={<Layout><KidsToy6 /></Layout>} />
        <Route path="/Kids Toy/7" element={<Layout><KidsToy7 /></Layout>} />
        <Route path="/Kids Toy/8" element={<Layout><KidsToy8 /></Layout>} />


        <Route path="/Kids Wear" element={<Layout><KidsWear /></Layout>} />
        <Route path="/Kids Wear/1" element={<Layout><KidsWear1 /></Layout>} />
        <Route path="/Kids Wear/2" element={<Layout><KidsWear2 /></Layout>} />
        <Route path="/Kids Wear/3" element={<Layout><KidsWear3 /></Layout>} />
        <Route path="/Kids Wear/4" element={<Layout><KidsWear4 /></Layout>} />
        <Route path="/Kids Wear/5" element={<Layout><KidsWear5 /></Layout>} />
        <Route path="/Kids Wear/6" element={<Layout><KidsWear6 /></Layout>} />
        <Route path="/Kids Wear/7" element={<Layout><KidsWear7 /></Layout>} />
        <Route path="/Kids Wear/8" element={<Layout><KidsWear8 /></Layout>} />
        

        <Route path="Jewels" element={<Layout><Jewels /></Layout>} />
        <Route path="/Jewels/1" element={<Layout><Jewels1 /></Layout>} />
        <Route path="/Jewels/2" element={<Layout><Jewels2 /></Layout>} />
        <Route path="/Jewels/3" element={<Layout><Jewels3 /></Layout>} />
        <Route path="/Jewels/4" element={<Layout><Jewels4 /></Layout>} />
        <Route path="/Jewels/5" element={<Layout><Jewels5 /></Layout>} />
        <Route path="/Jewels/6" element={<Layout><Jewels6 /></Layout>} />
        <Route path="/Jewels/7" element={<Layout><Jewels7 /></Layout>} />
        <Route path="/Jewels/8" element={<Layout><Jewels8 /></Layout>} />

 
        <Route path="Mens Wear" element={<Layout><Menswear /></Layout>} />
        <Route path="/Mens Wear/1" element={<Layout><Menswear1 /></Layout>} />
        <Route path="/Mens Wear/2" element={<Layout><Menswear2 /></Layout>} />
        <Route path="/Mens Wear/3" element={<Layout><Menswear3 /></Layout>} />
        <Route path="/Mens Wear/4" element={<Layout><Menswear4 /></Layout>} />
        <Route path="/Mens Wear/5" element={<Layout><Menswear5 /></Layout>} />
        <Route path="/Mens Wear/6" element={<Layout><Menswear6 /></Layout>} />
        <Route path="/Mens Wear/7" element={<Layout><Menswear7 /></Layout>} />
        <Route path="/Mens Wear/8" element={<Layout><Menswear8 /></Layout>} />


       <Route path="Decoration Lights" element={<Layout><Lights /></Layout>} />
        <Route path="/Decoration Lights/1" element={<Layout><Lights1 /></Layout>} />
        <Route path="/Decoration Lights/2" element={<Layout><Lights2 /></Layout>} />
        <Route path="/Decoration Lights/3" element={<Layout><Lights3 /></Layout>} />
        <Route path="/Decoration Lights/4" element={<Layout><Lights4 /></Layout>} />
        <Route path="/Decoration Lights/5" element={<Layout><Lights5 /></Layout>} />
        <Route path="/Decoration Lights/6" element={<Layout><Lights6 /></Layout>} />
        <Route path="/Decoration Lights/7" element={<Layout><Lights7 /></Layout>} />
        <Route path="/Decoration Lights/8" element={<Layout><Lights8 /></Layout>} />


         <Route path="Traditional Wears" element={<Layout><TraditionalWears /></Layout>} />
        <Route path="/Traditional Wears/1" element={<Layout><TraditionalWears1 /></Layout>} />
        <Route path="/Traditional Wears/2" element={<Layout><TraditionalWears2 /></Layout>} />
        <Route path="/Traditional Wears/3" element={<Layout><TraditionalWears3 /></Layout>} />
        <Route path="/Traditional Wears/4" element={<Layout><TraditionalWears4 /></Layout>} />
        <Route path="/Traditional Wears/5" element={<Layout><TraditionalWears5 /></Layout>} />
        <Route path="/Traditional Wears/6" element={<Layout><TraditionalWears6 /></Layout>} />
        <Route path="/Traditional Wears/7" element={<Layout><TraditionalWears7 /></Layout>} />
        <Route path="/Traditional Wears/8" element={<Layout><TraditionalWears8 /></Layout>} />


        <Route path="Birthday Gifts" element={<Layout><BirthdayGifts /></Layout>} />
        <Route path="/Birthday Gifts/1" element={<Layout><BirthdayGifts1 /></Layout>} />
        <Route path="/Birthday Gifts/2" element={<Layout><BirthdayGifts2 /></Layout>} />
        <Route path="/Birthday Gifts/3" element={<Layout><BirthdayGifts3 /></Layout>} />
        <Route path="/Birthday Gifts/4" element={<Layout><BirthdayGifts4 /></Layout>} />
        <Route path="/Birthday Gifts5" element={<Layout><BirthdayGifts5 /></Layout>} />
        <Route path="/Birthday Gifts/6" element={<Layout><BirthdayGifts6 /></Layout>} />
        <Route path="/Birthday Gifts/7" element={<Layout><BirthdayGifts7 /></Layout>} />
        <Route path="/Birthday Gifts/8" element={<Layout><BirthdayGifts8 /></Layout>} /> 
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
