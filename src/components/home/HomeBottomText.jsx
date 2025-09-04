import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
   <div className='font-[font2] flex items-center justify-center gap-2 '>
    <Link className='text-white text-[5.5vw] pb-4 leading-[6vw] border-4   border-white rounded-full px-10 uppercase'>Projects</Link>

    <Link className='text-white text-[5.5vw] pb-4 leading-[6vw] border-4 rounded-full border-white uppercase px-10'>Agence</Link>
   </div>
  )
}

export default HomeBottomText