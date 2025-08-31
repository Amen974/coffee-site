import React from 'react'

const MenuCard = ({ img, name, price }) => {
  return (
    <div className='border-2 border-red-700 rounded-2xl p-4 h-[400px] flex-row cursor-pointer'>
      <div className=''>
      <img src={img} alt={name} height={200} width={200} className='rounded-2xl object-cover h-[200px]' />
    </div>
    <div>
      <h3 className='font-dancing text-red-700 text-4xl font-bold'>{name}</h3>
      <p>{price}</p>
    </div>
    </div>
    
  )
}

export default MenuCard