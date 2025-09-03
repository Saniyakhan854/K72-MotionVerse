import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756836993~exp=1756840593~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=f6f883cd5a68d62dba27c8f4872a521001e5551dfdfb89b408aa1e3fa9d71d25&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video