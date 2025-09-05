import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
   <div className='font-[font2] flex items-center justify-center gap-2 '>
<div className='border-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50]  rounded-full h-44 flex items-center px-14 uppercase  transition-colors duration-300'>
      <Link className='text-white text-[6vw] mt-6' to='/projects'>Projects</Link>
</div>
<div className='border-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50]  rounded-full h-44 flex items-center px-14 uppercase'>
        <Link className='text-white text-[6vw] mt-6' to='/agency'>Agence</Link>
</div>

   </div>
  )
}

export default HomeBottomText