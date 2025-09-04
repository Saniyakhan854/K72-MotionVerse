import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover rounded-lg' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757002172~exp=1757005772~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=026ca07244f4e3fcc79ac2ed83f5a76b2a1f9ef341f229c63bbfd2c0b54505d8&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video