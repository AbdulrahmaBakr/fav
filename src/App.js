 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import  Navbar  from './Navbar';
import Products from './Products';
import NotFound from './NotFound';
import Search from './Search';
import { Provider } from 'react-redux';
 
import { store } from './store/store';
import Favou from './Favou';
 

function App() {
  return (
   <>
   <Provider store={store}>
   <Navbar/>
   <Routes>
    <Route path='home' element={<Home/>}/>
    <Route path='detail/:id' element={<Detail/>}/>
    
    <Route path='products' element={<Products/>}/>
    <Route path='search' element={<Search/>}/>
    <Route path='fav' element={<Favou/>}/>
    <Route path='*' element={<NotFound/>}/>
    
    
   </Routes>
   </Provider>
   </>
  );
}

export default App;
