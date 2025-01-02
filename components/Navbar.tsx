import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Wydad_Athletic_Club_logo.svg'
import { navbar } from '@/data'
const Navbar = () => {
    return (
        <header className='top-0 z-50 sticky bg-wacred flex items-center justify-between px-20 py-4'>
            <a href='/' className='flex items-center gap-3 '>
                <Image src={logo} width={40}  alt='logo'/>
                <h1 className='cursor-pointer text-3xl font-semibold text-wacwhite '>WYDAD </h1>
            </a>
            <nav>
                <ul className='flex items-center gap-6'>
                    {navbar.map((nav,key) => (
                        <li key={key} className='text-wacwhite hover:text-wac text-lg font-medium transition-all duration-300  rounded-md hover:bg-waclight'><a href={nav.url}>{nav.title}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
