import React from 'react'
import { useSelector } from 'react-redux';

export default function Favou() {
    const favList= useSelector((state)=>state.favourites) 
    console.log(favList)
    
  return (
    
    <>
       
    <div className='container'>
        <div className="row">

            {favList.map((product) =>

                <div key={product.id} className="product col-lg-4  ">
                    <div className="item m-5 p-2 bg-danger">
                             <div className=''>
                            <img src={product.thumbnail} alt="" className='w-100  ' />
                            </div>

                            <h3>{product.title}</h3>
                      
                        <i class="fa-solid fa-heart-circle-plus"  ></i>

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
