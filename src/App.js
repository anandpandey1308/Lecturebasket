import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Login from './auth/Login';
import Register from './auth/Register';
import Foundation from './pages/Foundation/Foundation';
import Intermediate from './pages/Intermediate/Intermediate';
import Final from './pages/Final/Final';
import Details from './Buy/Details';
import Cart from './component/cart/Cart';
import AboutUs from './RemainingPage/AboutUs';
import Footer from './RemainingPage/Footer';

function App() {


  function SearchWrapper() {
    const location = useLocation();
    const searchStr = location.pathname.substring(1); // Extract the search string from the pathname
  
    return <Search searchStr={searchStr} />;
  }



  const isLoginOrRegister =
  window.location.pathname === '/login' ||
  window.location.pathname === '/register';
  return (
    <div className="App">
      <BrowserRouter>
      <div className='manager'>
      <Navbar />
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/foundationaccounting' element={<Search  searchStr="foundationaccounting" />}/>
         <Route path='/foundationbussiness' element={<Search  searchStr="foundationbussiness"/>}/>
         <Route path='/foundationMathematics' element={<Search  searchStr="foundationMathematics"/>}/>
         <Route path='/foundationeconomics' element={<Search  searchStr="foundationeconomic"/>}/>
        
         <Route path='/intermediateaccounting' element={<Search  searchStr="intermediateaccounting"/>}/>
         <Route path='/intermediatecorporate' element={<Search  searchStr="intermediatecorporate"/>}/>
         <Route path='/intermediatecosting' element={<Search  searchStr="intermediatecosting"/>}/>
         <Route path='/intermediatetaxation' element={<Search  searchStr="intermediatetaxation"/>}/>
         <Route path='/intermediateadv' element={<Search  searchStr="intermediateadv"/>}/>
         <Route path='/intermediateauditing' element={<Search  searchStr="intermediateauditing"/>}/>
         <Route path='/intermediateei' element={<Search  searchStr="intermediateei"/>}/>
         <Route path='/intermediatefm' element={<Search  searchStr="intermediatefm"/>}/>
         
         <Route path='/finalfr' element={<Search  searchStr="finalfr"/>}/>
         <Route path='/finalsfm' element={<Search  searchStr="finalsfm"/>}/>
         <Route path='/finalaud' element={<Search  searchStr="finalaud"/>}/>
         <Route path='/finallaw' element={<Search  searchStr="finallaw"/>}/>
         <Route path='/finalscmpe' element={<Search  searchStr="finalscmpe"/>}/>
         <Route path='/finalelective' element={<Search  searchStr="finalelective"/>}/>
         <Route path='/finaldt' element={<Search  searchStr="finaldt"/>}/>
         <Route path='/finalidt' element={<Search  searchStr="finalidt"/>}/>
         <Route path='/details' element={<Details/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/*' element={<SearchWrapper />} />
        </Routes>
        </div>
        {!isLoginOrRegister && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
