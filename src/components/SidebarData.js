import React from 'react';
// import JsonData from './data/resources.json';

// categoriesData = JsonData.map((item) => {
//     return [item.category];
// })
import * as FontAwesome from 'react-icons/fa';
import { IoColorPalette } from "react-icons/io5";



export const SideBarData = [

    {
        title: 'All',
        path: '/all',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaStar />
    },
    {
        title: 'Blogs and News',
        path: '/blogs',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaRegNewspaper />
    },
    {
        title: 'Color Tools',
        path: '/colorTools',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <IoColorPalette />
    },
    {
        title: 'Design Systems',
        path: '/designSys',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaRegNewspaper />
    },
    {
        title: 'Design Tools',
        path: '/designTools',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaPencilRuler />
    },
    {
        title: 'Developer Tools',
        path: '/devTools',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaCode />
    },
    {
        title: 'Icons',
        path: '/icons',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
    {
        title: 'Illustrations',
        path: '/illustrations',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
    {
        title: 'Inspiration',
        path: '/inspiration',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
    {
        title: 'Learn Designing',
        path: '/learnDesigning',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
    {
        title: 'Stock Photos and Videos',
        path: '/stockMedia',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: <FontAwesome.FaRegNewspaper />
    },
    {
        title: 'Typography',
        path: '/typography',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
    {
        title: 'Wireframing Tools',
        path: '/wireframing',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
    {
        title: 'YouTube Channels',
        path: '/ytChannel',
        clsName: 'nav-text',
        HoverClsName: 'hover:text-yellow-500',
        icon: ''
    },
]
