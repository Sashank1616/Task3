import React from 'react'
import vid from '../asserts/video.mp4'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <video className='object-cover h-full w-full absolute -z-10 ' src={vid} autoPlay loop muted></video>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Decentralized</h1>
        <h1 className='py-2'>
          <span className='text-[var(--primary-blue)]'>Trading</span> Protocol
        </h1>
        <p className='text-xl py-4'>
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className='m-2'><Link to='/contact'>Use Defi</Link></button>
          <button className='m-2'>FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42,104,783,662.47</p>
      </div>
    </div>
  )
}
