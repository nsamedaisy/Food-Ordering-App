import chicken from '../assets/chicken.avif';
import italianpasta from '../assets/italianpasta.jpg';
import porkhock from '../assets/porkhock.avif';
import frenchfries from '../assets/frenchfries.avif';
import pizza from '../assets/pizza.avif';
import thaifish from '../assets/thaifish.avif';
import rice from '../assets/rice.avif';
import { useContext, useEffect } from 'react';
import { FoodContext } from '../context/FoodContext';

const data = [
  {
    id: 1,
    img: chicken,
    title: 'Baked whole chicken with oranges and cranberries',
    desc: 'Cranberry Orange Chicken is the perfect one pan, a seasonal meal made with juicy, tart cranberries and fresh orange juice and zest. I can say that this Cranberry Orange Chicken is simply the best you can have! ',
    price: 100,
  },

  {
    id: 2,
    img: italianpasta,
    title: 'Italian pasta with seafood',
    desc: ' The perfect combination of your favourite seafood mix, a few fresh grape or cherry tomatoes and spices tossed with spaghetti. Quick and easy, Italian never tasted so good!  We can serve with shrimp, mussels, scallops, lobster or crab to name a few. 2 oz - 211kcal, 1 lb - 1683kcal,',
    price: 50,
  },

  {
    id: 3,
    img: porkhock,
    title: 'German pork hock with sauces',
    desc: 'This slow roasted Crispy German Pork Hock is tender inside and wrapped in crispy crackling skin.',
    price: 110,
  },

  {
    id: 4,
    img: frenchfries,
    title: 'French fries and nuggets meal',
    desc: 'Look forward to meal time with our delectably dip-able Chicken Nuggets and Fries Meal complete with tender and juicy nuggets and deliciously crispy fries .',
    price: 30,
  },

  {
    id: 5,
    img: pizza,
    title: 'Pepperoni pizza',
    desc: 'Pepperoni denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.',
    price: 46,
  },

  {
    id: 6,
    img: thaifish,
    title: 'Thai grilled fish spicy garden hot pot',
    desc: 'In my opinion, one of the best Thai dishes is roasted snakehead fish. The insides are removed and replaced with lemongrass and a number of other fragrant herbs.',
    price: 40,
  },

  {
    id: 7,
    img: rice,
    title: 'Rice gastronomy',
    desc: 'This African Fried Rice is incredibly flavorful and a complete meal on its own.',
    price: 25,
  }
]


export function ExportData() {
  const { productionData, setProductionData } = useContext(FoodContext)

  useEffect(async () => {
    await setProductionData(data);
    console.log(productionData);
  }, [])
}



export default data;