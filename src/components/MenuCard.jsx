import React, { useState } from 'react';
import '../index.css'
import { useNavigate } from 'react-router-dom'


function MenuCard(props) {
  const navigate = useNavigate();

  return (
    <div className='card-container' >
      <img src={props.img} onClick={() => navigate(`${props.id}/details`)} />
      <div class='card-body'>
        <h5 class='card-title'>{props.title}</h5>
        <h5 class='card-title'>$ {props.price}</h5>
        <button className='tertiarry-btn' onClick={() => navigate(`/${props.id}/details`)}>Details</button>
      </div>
    </div>
  )
}

export default MenuCard