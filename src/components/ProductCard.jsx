import React from 'react'

const ProductCard = ({prd}) => {
  
  return ( 
    <div className='hover:border-red-700 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-2 space-y-3'>
        <img onClick={()=>window.location=`detail/ ${prd.id}`} className='h-32 object-cover' src={prd?.image} alt="" />
        <div className='font-bold h-16 tex-center opacity-100 text-sm mt-5'>{(prd?.title).substring(0,40)} </div>
        <div >{(prd?.description).substring(0,45)}...</div>
        <div className='font-bold text-lg'>{prd?.price} TL</div>
        <button className='bg-red-600 w-full p-2 rounded-lg text-white'>Sepete Ekle</button>
    </div>
  )
}

export default ProductCard