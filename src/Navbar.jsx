import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="detail">Detalis</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="search">Search</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="fav">fav</Link>
      </li>
    
      
    </ul>
     
  </div>
</nav>
  )
}
