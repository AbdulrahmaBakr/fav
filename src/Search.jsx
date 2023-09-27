import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react'

export default function Search() {

    let [productsList, setProductsList] = useState([]);

    let [searchVal, setsearchVal] = useState("");
    
    let handleChange = (e) => {
        setsearchVal(e.target.value);
    }


    useEffect(() => {
        getApi()

    }, [searchVal]);

    async function getApi() {


        let response = await Axios.get(`https://dummyjson.com/products/search?q=${searchVal}`)


        setProductsList(response.data.products)

    }


    return (

        <>
            <div>
                <input type="text" onChange={handleChange} />
            </div>


            <div className='container'>
            <div className="row">

                {productsList.map((product) =>

                    <div key={product.id} className="product col-lg-4  ">
                        <div className="item mx-5 p-3">
                            
                                <img src={product.thumbnail} alt="" className='w-100' />
                                <h3>{product.title}</h3>
                             
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
