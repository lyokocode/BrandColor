import React from 'react'
import Search from './Search'
import { Navbar } from './'

export default function Header() {
    return (
        <header className="w-full h-14 border-b-[1px] border-[#ccc] flex sticky top-0 right-0 z-20 bg-[#fff]">
            <Search />
            <Navbar />
        </header>
    )
}
