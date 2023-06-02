// import React, { useContext } from 'react';
// import { useCart } from 'react-use-cart';
import Data from './data'
import { useParams } from 'react-router-dom'


export default function Details() {
  let { id } = useParams();
  console.log(Data)
  const props = Data.find((ele) => ele.id == id);

  return (
    <>
      <div className='detail-container'>
        <div className='detail-title'><h4 class='card-title'>{props.title}</h4></div>
        <img className='detail-img' src={props.img} />
        <div className='detail-infos'>
          <p className='detail-desc' class='card-text'>{props.desc}</p>
          <h5 className='detail-head' class='card-title'> Price: $ {props.price}</h5>
          <button className='detail-btn' >Purchase</button>
        </div>
      </div>

    </>
  )
}
