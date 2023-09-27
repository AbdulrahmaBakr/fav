import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import { useEffect, useState } from 'react'

export default function Detail() {

  let param = useParams();
  let [showDetails, setDrtails] = useState([])
  let [showDetail, setDrtail] = useState([])
  useEffect(() => {
    getApi()

  }, []);

  async function getApi() {


    let { data } = await Axios.get(`https://dummyjson.com/products/${param.id}`)

    // console.log(data)

    setDrtails(data.images)

    setDrtail(data)


  }



  // console.log(param.id)

  return (
    <>

      {showDetail ?
        <div className='container w-100 '>

          <div className=' d-flex justify-content-center  '>
            {/* <img src={showDetail[0]} alt="img1" className='  w-25 ' /> */}
          </div>
          <div className='m-4 d-flex justify-content-around    '>
             
            <img src={showDetails[1]} alt="img2" className='w-25 h-25' />
            <img src={showDetails[2]} alt="img3" className='w-25 h-25' />
            <img src={showDetails[3]} alt="img4" className='w-25 h-25' />
            
          </div>
          <h3>{` title : ${showDetail.title}`}</h3>
          <h3>{` description : ${showDetail.description}`}</h3>
          <h3>{` title : ${showDetail.price} $`}</h3>

        </div> 
        : <h1>Loading....</h1>}
    </>
  )
}
