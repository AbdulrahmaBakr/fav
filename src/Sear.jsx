import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect, useState } from 'react';
import Items from './reuasblecomponents/items/Items';
import axios from "axios";
import { instanceAxios } from './Axios';
import { BrowserRouter, Routes } from "react-router-dom";
import  "../src/Pages/Details/Details.css";


function Home() {

  let [searchVal, setsearchVal] = useState("");
  let handleChange = (e) => {
    setsearchVal(e.target.value);
  }
  let [productsList, setProductsList] = useState([]);


  useEffect(() => {
    instanceAxios.get(`/products/search?q=${searchVal}`).then((response) =>
     { 
      
      setProductsList(response.data.products)
      // console.log(response.data.products[0].thumbnail)
    },
     ).catch((err) => { console.log(err) });
  }, [searchVal])




  return (
    <> 
    
    <div className="App bg-dark ">
          <label htmlFor="search" className="form-label text-center d-block text-light h1">Search Now </label>
         <input type="text"  className="form-control bg-secondary w-50 mx-auto mb-2 " name="search" id="search" 
         aria-describedby="search" placeholder="What are you looking for !" onChange={handleChange} />

          <header className=" container-fluid  ">
            
        <div className="row ">
          { productsList.map((product,i) => <Items key={i}  text={product.description} title={product.title} img={product.thumbnail}/>)}
        </div>
      </header>
      
      {/* <h1 className='bg-warning'>{productsList[0].title}</h1> */}
    </div>

    </>
  );
}

export default Home;