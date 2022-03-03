import React, { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

// Icons
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
// JSON Data
import { SideBarData } from './SidebarData';

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="h-auto flex justify-start items-center py-4">

                {/* Hamburger Menu Icon Link*/}
                <Link to="#" className="menu-bars text-3xl">
                    <GiHamburgerMenu onClick={showSidebar} />
                </Link>

                {/* Top Header  */}
                <div className="container mx-6 flex flex-col md:flex-row sm:items-center">
                    {/*  */}
                    <Link to="#" className="text-2xl md:text-3xl font-bold">
                        <span>Resource Ocean</span>
                    </Link>

                    {/* Buttons */}
                    <div className="md:ml-auto flex flex-wrap my-2">
                        <button className="btn-primary">
                            Newsletter
                        </button>
                        <button className="btn-primary">
                            Suggest A Tool
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle px-4 -mt-4 mb-4">
                        <Link to="#" className="menu-bars">
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarData.map((ele, index) => {
                        return (
                            <div className="w-full hover:bg-blue-400 rounded my-1 duration-100">
                                <li key={index} className={ele.clsName}>
                                    <Link to={ele.path} className="">
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

