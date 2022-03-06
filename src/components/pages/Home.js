import React from 'react';
import WebPNG from '../../assets/images/Web_SVG.png';
import dummy from '../../assets/images/fff.png';
import EmailPng from '../../assets/images/Email_PNG.png';
import { Resources } from './resourcesData';
import './Home.css';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';


export default function Home() {
    return (
        <>
            <div className="flex flex-wrap justify-evenly items-center flex-col md:flex-row h-screen bg-gradient-to-b from-blue-300 to-white">
                <div className="m-5 sm:w-1/2">
                    <p className="text-gray-800 font-FiraSans leading-none text-4xl md:text-6xl font-black">Find the best designing resources from the <br /> belly of internet.</p>
                    <p className="text-xl md:text-2xl my-2 font-FiraSans">A collection of 100+ designing resources, updating consistently.<br />New Resources every week.</p>
                </div>
                <div className="flex items-center justify-center ">
                    <img src={WebPNG} alt="" className="w-3/4 sm:w-auto" />
                </div>
            </div>

            {/* Title */}
            <div className="text-center p-5">
                <p className="text-3xl md:text-4xl font-semibold font-FiraSans">Recently Added</p>
            </div>
            {/* Recentyl Added */}
            <div className="flex flex-wrap justify-center">
                {Resources.map((ele) => {
                    return (
                        <div className="card">
                            <div className="card-heading">
                                <p className="card-title">Figma</p>
                                <img src={dummy} alt="" width="50px" className="card-icon" />
                            </div>
                            <div className="card-category">
                                <p>Dev Tools</p>
                            </div>
                            <div className="card-description">
                                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quaerat..</p>
                            </div>
                            <div className="card-footer">
                                <button className="like-btn">
                                    <AiFillHeart className="mr-3" /> 123
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="p-1 text-center bg-gray-200 w-fit m-auto rounded-lg">
                <p>Click on that little hamburger button to view all the resources</p>
            </div>
            <div className="flex flex-wrap my-20 flex-col bg-red-400 justify-center m-auto w-5/6 px-4">
                <div className="    ">
                    <p className="font-FiraSans text-2xl md:text-3xl font-bold">
                        Get new and fresh Design Resources straight into you inbox.
                    </p>
                    <p className="text-2xl">Subscribe to our newsletter.</p>
                </div>
            </div>

        </>
    )
}
