import React from 'react';
import MenuCard from './MenuCard';
import data from './data';


function Menu() {
  return (
    <div>
      <div className='card-wrap'>
        {data.map((item, index) => {
          return (
            <div>
              <MenuCard
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                id={item.id}
                key={index}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu