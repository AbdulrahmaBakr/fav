import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';





export default function Products() {


    let [showProducts, setProducts] = useState([])
    useEffect(() => {
        getApi()

    }, []);

    async function getApi() {


        let { data } = await Axios.get('https://dummyjson.com/products')
        let { products } = data;

        setProducts(products)

    }
const dispatch = useDispatch();
const handleAddToFavou = (e,product) =>{
dispatch({type:'ADD_TO_FAVOURITES',payload:product})
}

    return (
        <>
       
        <div className='container'>
            <div className="row">

                {showProducts.map((product) =>

                    <div key={product.id} className="product col-lg-4  ">
                        <div className="item m-5 p-2 bg-danger">
                            <Link className='text-decoration-none text-danger' to={`/Detail/${product.id}`}>
                                <div className=''>
                                <img src={product.thumbnail} alt="" className='w-100  ' />
                                </div>

                                <h3>{product.title}</h3>
                            </Link>
                            <i class="fa-solid fa-heart-circle-plus" onClick={(e)=>handleAddToFavou(e,product)}></i>

                            <h2>{`${product.price} $`}</h2>

                            <p>{product.description}</p>

                        </div>
                    </div>
                )}

            </div>

        </div>
        </>
    )
}
