import React from 'react'
import {FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble}from 'react-icons/fi' 
export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center bg-black'>
            <h1 className="text-4xl  text-white m-2">Contact Us</h1>
            <span className="text-md text-white">Please fill out the form below to contact me</span>
            <form className="flex flex-col justify-center items-center w-[90vw] min-w-[50vw] m-2">
                <input type="text" className="rounded-md text-2xl p-2 m-2 w-full border-stone-900 max-w-[40rem]" placeholder='Your Name' name='your_name' />
                <input type="email" className="rounded-md text-2xl p-2 m-2 w-full border-stone-900 max-w-[40rem]" placeholder='Your Email' name='your_email' /> <FiMail className='mail-icon' />
                <textarea name="message" className="rounded-md text-2xl p-2 m-2 w-full border-stone-900 max-w-[40rem]" rows='5' placeholder='Your Message'></textarea>
                <button type='submit' className='px-3 py-2 my-3 rounded-xl bg-white bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)] ' ><b>Submit</b> </button>
                <div className="flex justify-center items-center mt-3">
                            <FiInstagram  size={40} className='social-icon text-white md:mx-4 sm:mx-3' />
                            <FiFacebook size={40} className='social-icon text-white md:mx-4 sm:mx-3' />
                            <FiLinkedin size={40} className='social-icon text-white md:mx-4 sm:mx-3' />
                            <FiDribbble size={40} className='social-icon text-white md:mx-4 sm:mx-3' />
                            <FiGithub size={40} className='social-icon text-white md:mx-4 sm:mx-3' />
                </div>
            </form>
                       
                        
    </div>
  )
}
