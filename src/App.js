import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import iphone_banner from './Components/Assets/iphone_banner.jpg';
import samsung_banner from './Components/Assets/samsung_banner.jpg';
import laptop_banner from './Components/Assets/Laptop_banner.jpg';
import accessories_banner from './Components/Assets/accessories_banner.jpg';
import others_banner from './Components/Assets/others_banner.png';
import all_product from './Components/Assets/all_product';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />                
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Iphones' element={<ShopCategory banner={iphone_banner} category="Iphone" />} />
        <Route path='/Samsungs' element={<ShopCategory banner={samsung_banner} category="Samsung" />} />
        <Route path='/Laptops' element={<ShopCategory banner={laptop_banner} category="Laptop" />} />
        <Route path='/Accessories' element={<ShopCategory banner={accessories_banner} category="Accessories" />} />
        <Route path='/Others' element={<ShopCategory banner={others_banner} category="Others" />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
       
    </div>   
  );
}

export default App;
