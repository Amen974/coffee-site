import React from 'react'
import { coffeeList } from '../constent'
import MenuCard from '../component/MenuCard'
const Menu = () => {
  return (
    <section className='flex flex-wrap justify-evenly gap-4 p-6 bg-black text-white'>
      {coffeeList.map(coffee=>(
        <MenuCard 
          key={coffee.id}
          img={coffee.img}
          name={coffee.name}
          price={coffee.price}
        />
      ))}
    </section>
  )
}

export default Menu