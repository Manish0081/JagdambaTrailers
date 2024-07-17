import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallary from "./Pages/Gallery";
import Media from "./Pages/Meadia";
import Contact from "./Pages/Contact";


function App() {

  return (
        <>
		
		  <BrowserRouter>
			<Nav />
	     
				
			<Routes>
			 <Route index path="/" element={<Home/>} />
				  <Route path="/Home" element={<Home/>} />
				 
				  <Route path="/About" element={<About/>} />
				  <Route path="/Gallary" element={<Gallary/>} />
				  <Route path="/Media" element={<Media/>}/>
				  <Route path="/contact" element={<Contact/>} />
				  
				
			</Routes>
		</BrowserRouter>
		  
		</>
  );
}

export default App;
