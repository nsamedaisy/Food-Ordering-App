import React from 'react';
import Data from './data';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()
  let { id } = useParams();
  console.log(Data)
  const props = Data.find((ele) => ele.id == id);

  return (
    <div>
      <div className='home-container'>
        <div className='home-banner-container' >
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              Hundreds of flavors under one roof where every flavor tells a story.
              Healthy switcher chefs do all the prep work, like peeding, chopping
              & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button" onClick={() => navigate(`/menu`)}>
              Order Now
            </button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home