import React from 'react'
import { FaLinkedinIn, FaDiscord, FaGithub, FaStackOverflow, FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className='w-full h-full flex flex-col justify-center items-center bg-[#0a0416]'>
                <div className="md:w-[40%] flex items-center justify-center bg-[#0a0416]">
                    <h1 className="text-[#FFE1FF] bg-[#0a0416]">Designed and Developed by Vinoth Kumar</h1>
                </div>
                <div className="sm:w-[40%] flex items-center justify-center bg-[#0a0416]">
                    <h1 className="text-[#FFE1FF] flex bg-[#0a0416]">Copyrigth<FaCopyright className='text-[#FFE1FF] mx-3 mt-1' /> 2024</h1>
                </div>
                <div className="flex flex-row text-[#FFE1FF] bg-[#0a0416] mb-1">
                    <FaGithub href='https://github.com/Vinoth-Kumar-N' className="text-2xl mt-[1rem] mr-[1rem] transition-transform duration-300 hover:scale-110 hover:text-blue-500 hover:-translate-y-1 bg-[#0a0416]" />
                    <FaLinkedinIn href='https://www.linkedin.com/in/vinothkumar-nataraj-2285a8251/' className="text-2xl mt-[1rem] mr-[1rem] transition-transform duration-300 hover:scale-110 hover:text-blue-500 hover:-translate-y-1 bg-[#0a0416]" />
                    <FaDiscord href='https://discord.com/users/1156465498947600445' className="text-2xl mt-[1rem] mr-[1rem] transition-transform duration-300 hover:scale-110 hover:text-blue-500 hover:-translate-y-1 bg-[#0a0416]" />
                    <FaStackOverflow href='https://stackoverflow.com/users/22701348/stackvino' className="text-2xl mt-[1rem] mr-[1rem] transition-transform duration-300 hover:scale-110 hover:text-blue-500 hover:-translate-y-1 bg-[#0a0416]" />
                </div>
            </footer>
        </>
    )
}

export default Footer