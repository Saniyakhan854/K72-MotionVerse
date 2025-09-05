import React from 'react'
import Video from './Video'

function HomeHeroText() {
  return (
     <div className=' text-white pt-5 text-center'>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>
          The spark for
        </div>
        <div className='text-[9.5vw] flex items-starts justify-center uppercase leading-[8vw]'>
          all 
          <div className=' h-[8vw] w-[10vw] rounded-full -mt-2 overflow-hidden '>
                <Video />
            </div>
          things
          </div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText