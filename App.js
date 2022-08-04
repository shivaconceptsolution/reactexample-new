
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Edit from "./Edit";
import Layout from "./Layout";
import RestDemo from "./RestDemo";
function App() {
 
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route  index element={<RestDemo />} /> 
        
        <Route  path="home" element={<Home />} />
        <Route  path="edit" element={<Edit />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
         </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
