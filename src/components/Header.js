import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
    return (
        <header className="text-black border-b-2">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center ">
                
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="http://github.com/">
                    <span className="ml-3 text-3xl">Resource Ocean</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <button className="items-center py-2 px-3 border-2 rounded text-sm border-blue-600 font-semibold hover:bg-blue-600 duration-300 mx-2 hover:text-white">
                        Newsletter
                    </button>
                    <button className="items-center py-2 px-3 border-2 rounded text-sm border-blue-600 font-semibold hover:bg-blue-600 duration-300 mx-2 hover:text-white">
                        Suggest a tool
                    </button>
                    <span className="p-1.5 md:m-3 text-2xl border-2 rounded border-blue-600 hover:bg-blue-600 duration-300 mx-2 hover:text-white"><GiHamburgerMenu/></span>
                    {/*---------Sidebar--------*/}
                    
                </nav>
            </div>
        </header>
    )
}
