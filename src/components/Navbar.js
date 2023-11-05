import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu} from 'react-icons/ai'
export default function Navbar() {
    const [ShowMenu,setShowMenu]=useState(false)
    return (
        <div className='w-full h-[90px] bg-black'>
            <div className='max-width-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div className=''>
                    <h1 className='text-[var(--primary-blue)]'><Link to='/'>Defi</Link></h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white items-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dev'>Developers</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        <button><Link to='/contact'>Use Defi</Link></button>
                    </ul>
                </div>
            <AiOutlineMenu size={35} className='text-white block md:hidden' onClick={()=>setShowMenu(!ShowMenu)}/>
            <div className="absolute top-4 right-2 z-5 flex-col min-w-[15rem] text-center rounded-xl p-2 bg-gray-300" style={{display: ShowMenu? 'flex':'none'}}> 
            <Link activeClass='bg-black text-white' to='/'className="bg-white rounded-xl p-3 m-1 cursor-pointer" onClick={()=>setShowMenu(false)}>Platform</Link>
            <Link activeClass='bg-black text-white' to='/dev'className="bg-white rounded-xl p-3 m-1 rou cursor-pointer" onClick={()=>setShowMenu(false)}>Developers</Link>
            <Link activeClass='bg-black text-white' to='/about' className="bg-white rounded-xl p-3 m-1 cursor-pointer" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='bg-black text-white' to='/Contact' className="bg-white bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)] px-7  py-3 rounded-3xl mt-2  mb-2 first-letter:cursor-pointer" onClick={()=>setShowMenu(false)}>UseDefi</Link>
            </div>    
        </div>
        </div>
    )
}
