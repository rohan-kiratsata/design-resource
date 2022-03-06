import React, { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

// Icons
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
// JSON Data
import { SideBarData } from './SidebarData';

var nav = document.getElementById('nav');

window.onscroll = () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav-active');
    }
    else {
        nav.classList.remove('nav-active');
    }
};

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);



    return (
        <>
            <div className="h-auto flex justify-start items-center py-4 sm:sticky sm:top-0 bg-white transition-all duration-800 shadow-lg" id="">

                {/* Shadow for above Header shadow-lg */}
                {/* Hamburger Menu Icon Link*/}
                <Link to="#" className="menu-bars text-3xl">
                    <GiHamburgerMenu onClick={showSidebar} />
                </Link>

                {/* Top Header  */}
                <div className="container mx-6 flex flex-col md:flex-row sm:items-center">
                    {/*  */}
                    <Link to="/" className="text-2xl md:text-3xl font-bold">
                        <span>Resource Ocean</span>
                    </Link>

                    {/* Buttons */}
                    <div className="sm:ml-auto flex flex-wrap my-2 sm:mx-3">
                        <button className="btn-primary">
                            Newsletter
                        </button>
                        <button className="btn-primary">
                            Suggest Resource
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <div className="navbar-toggle px-4 -mt-4" onClick={showSidebar}>
                        <Link to="#" className="menu-bars">
                            <AiOutlineClose />
                        </Link>
                    </div>
                    {/* Categories Heading */}
                    {/* <div className="mt-4 p-2 text-xl border-t-2 text-center text-blue-100">
                        <p>Categories</p>
                    </div> */}
                    {SideBarData.map((ele) => {
                        return (
                            <div className="w-full hover:bg-blue-400 rounded my-1 duration-100" key={ele.id}>
                                <li className={ele.clsName}>
                                    <Link to={ele.path} className="" onClick={showSidebar}>
                                        <span className="nav-icon">{ele.icon}</span>
                                        <span className="nav-title">{ele.title}</span>
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

