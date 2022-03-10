import React from 'react';
import WebPNG from '../../assets/images/Web_SVG.png';

import { Resources } from '../data/ResourcesData';
import { FaLink } from 'react-icons/fa';
import { Provider, LikeButton } from "@lyket/react";
import images from '../data/ResourcesData';
// CSS 
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="flex flex-wrap justify-evenly items-center flex-col md:flex-row h-screen bg-gradient-to-b from-blue-100 to-white">
                <div className="m-5 sm:w-1/2">
                    <p className="text-gray-800 font-FiraSans leading-none text-4xl md:text-6xl font-black">Get the best designing resources from the <br /> belly of internet.</p>
                    <p className="text-xl md:text-2xl my-2 font-FiraSans">A collection of 100+ designing resources, and growing.<br />Get new designing resources every week.</p>
                </div>
                <div className="flex items-center justify-center ">
                    <img src={WebPNG} alt="" className="w-3/4 sm:w-auto" />
                    {/* <Image1 width={100} height={100} /> */}

                </div>
            </div>

            {/* Title */}
            <div className="p-5 text-center">
                <p className="text-xl md:text-2xl font-md font-FiraSans text-gray-500">RECENTLY ADDED</p>
            </div>
            {/* Recentyl Added */}
            <div className="flex flex-wrap justify-evenly w-11/12 m-auto">
                {/* [ ] Change .slice(..) to .slice(arr.len - 6) -> Display 6 Resources*/}

                {Resources.slice(Resources.length - 3).map((ele) => {
                    return (
                        <div className="card" key={ele.productId}>
                            <div className="card-heading">
                                <a className="card-title" href={ele.productLink} target="_blank" rel="noopener noreferrer">{ele.productName} <FaLink className="inline text-2xl" /></a>
                                <img src={ele.productIcon} alt="" className="card-icon" />
                            </div>
                            <div className="card-category">
                                <p>{ele.category}</p>
                            </div>
                            <div className="card-description">
                                <p className="font-medium">{ele.productDescription}</p>
                            </div>
                            <div className="card-footer">
                                <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                                    <LikeButton
                                        namespace="my-blog-post"
                                        id="how-to-beat-me-at-chess"
                                        component={LikeButton.templates.Twitter}
                                    />
                                </Provider>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
