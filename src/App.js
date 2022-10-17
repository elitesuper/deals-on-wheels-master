
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import {Routes , Route} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import BrandsPage from "./pages/BrandsPage";
import BrowsCars from "./pages/BrowsCars";
import CarDetails from "./pages/CarDetails";
import NftPage from "./pages/NftPage";
import NftDetails from "./pages/NftDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Carousel from "./components/Carousel/Carousel";

function App() {
 
  return (
    <div className="App">

      <Routes>
       <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/brands" element={<BrandsPage/>}/>
        <Route path="/browscars" element={<BrowsCars/>}/>
        <Route path="/browscars/:id" element={<CarDetails/>}/>
        <Route path="/nft" element={<NftPage/>}/>
        <Route path="/nft/:id" element={<NftDetails/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<BlogDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
