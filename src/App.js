import './App.css';
import './css/Navbar.css';
import './css/Login_Form.css';
import './css/Create_Headshots.css';
import './css/Create_Headshots2.css';
import './css/Create_Headshots3.css';
import './css/Create_Headshots4.css';
import './css/Create_Headshots5.css';
import './css/Create_Headshots6.css';
import './css/Requirements.css';
import './css/Affiliate.css';
import './css/AI_Couple_Photoshoot.css';
import './css/Free_AI_Headshot_Generator.css';
import Navbar from './components/Navbar.js';
import Login_Form from './components/Login_Form.js';
import Create_Headshots1 from './components/Create_Headshots1.js';
// import Home from './components/Home.js';
import { Routes, Route } from "react-router-dom";
import Create_Headshots2 from './components/Create_Headshots2.js';
import Create_Headshots3 from './components/Create_Headshots3.js';
import Create_Headshots3_2 from './components/Create_Headshots3_2.js';
import Create_Headshots4 from './components/Create_Headshots4.js';
import Create_Headshots5 from './components/Create_Headshots5.js';
import Create_Headshots6 from './components/Create_Headshots6.js';
import Requirements from './components/Requirements.js';
import Affiliate from './components/Affiliate.js';
import AI_Couple_Photoshoot from './components/AI_Couple_Photoshoot.js';
import Free_AI_Headshot_Generator from './components/Free_AI_Headshot_Generator.js';
// import Demo from "./components/Demo.js"


function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Navbar />} />
       <Route path="/login" element={<Login_Form />} />
       <Route path="/Affiliate" element={<Affiliate />} />
       <Route path="/AI_Couple_Photoshoot" element={<AI_Couple_Photoshoot />} />
       <Route path="/Free_AI_Headshot_Generator" element={<Free_AI_Headshot_Generator />} />
       <Route path="/create-headshots1" element={<Create_Headshots1 />} />
       <Route path="/create-headshots2" element={<Create_Headshots2 />} />
       <Route path="/create-headshots3" element={<Create_Headshots3 />} />
       <Route path="/create-headshots3_2" element={<Create_Headshots3_2 />} />
       <Route path="/create-headshots4" element={<Create_Headshots4 />} />
       <Route path="/create-headshots5" element={<Create_Headshots5 />} />
       <Route path="/create-headshots6" element={<Create_Headshots6 />} />
       <Route path="/Requirements" element={<Requirements />} />
     </Routes>
     {/* <Create_Headshots2 /> */}
    </>
  );
}

export default App;