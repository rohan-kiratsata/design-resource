import React from 'react';

// Imported Icons
import * as FontAwesome from 'react-icons/fa';
import { IoColorPalette, IoNewspaper, IoFileTrayStacked } from "react-icons/io5";
import { } from 'react-icons/cg';
import { BiSticker } from 'react-icons/bi';
import { GiInspiration } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { BsBoundingBox, BsGrid1X2Fill } from 'react-icons/bs';



export const SideBarData = [

    {
        id: 1,
        title: 'All',
        path: '/all',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaStar />
    },
    {
        id: 2,
        title: 'Blogs and News',
        path: '/blogs',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <IoNewspaper />
    },
    {
        id: 3,
        title: 'Color Tools',
        path: '/colorTools',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <IoColorPalette />
    },
    {
        id: 4,
        title: 'Design Systems',
        path: '/designSys',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <BsGrid1X2Fill />
    },
    {
        id: 5,
        title: 'Design Tools',
        path: '/designTools',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaPencilRuler />
    },
    {
        id: 6,
        title: 'Developer Tools',
        path: '/devTools',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaCode />
    },
    {
        id: 7,
        title: 'Icons',
        path: '/icons',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <BiSticker />
    },
    {
        id: 8,
        title: 'Illustrations',
        path: '/illustrations',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaPenNib />
    },
    {
        id: 9,
        title: 'Inspiration',
        path: '/inspiration',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <GiInspiration />
    },
    {
        id: 10,
        title: 'Learn Designing',
        path: '/learnDesigning',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaGraduationCap />
    },
    {
        id: 11,
        title: 'Stock Photos and Videos',
        path: '/stockMedia',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <IoFileTrayStacked />
    },
    {
        id: 12,
        title: 'Typography',
        path: '/typography',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <TiSortAlphabetically />
    },
    {
        id: 13,
        title: 'Wireframing Tools',
        path: '/wireframing',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <BsBoundingBox />
    },
    {
        id: 14,
        title: 'YouTube Channels',
        path: '/ytChannel',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaYoutube />
    },
]
