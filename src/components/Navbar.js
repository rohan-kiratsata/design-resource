import React, {useState} from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

// Icons
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
// JSON Data
import { SideBarData } from './SidebarData';

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
            <div className="bg-red-500 ">
                <Link to="#" className="menu-bars">
                    <GiHamburgerMenu onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle px-4 -mt-4 mb-4">
                        <Link to="#" className="menu-bars">
                        <AiOutlineClose/>
                        </Link>
                    </li>
                    {SideBarData.map((ele,index) => {
                        return(
                            <li key={index} className={ele.clsName}>
                                <Link to={ele.path} className={ele.HoverClsName}>
                                    <span className="nav-icon">{ele.icon}</span>
                                    <span className="nav-title">{ele.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
