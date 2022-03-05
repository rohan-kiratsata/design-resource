import React from 'react';
import WebPNG from '../../assets/images/Web_SVG.png';
import dummy from '../../assets/images/fff.png';
import resources from './resourcesData';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="flex flex-wrap justify-evenly items-center flex-col md:flex-row h-screen bg-gradient-to-b from-blue-300 to-white">
                <div className="m-5 sm:w-1/2">
                    <p className="text-gray-800 font-FiraSans leading-none text-4xl md:text-6xl font-black">Find the best designing resources from the <br /> belly of internet.</p>
                    <p className="text-xl md:text-2xl my-2">A collection of 100+ designing resources,and increasing.<br /> New Resources every week.</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={WebPNG} alt="" className="w-3/4 md:w-auto" />
                </div>
            </div>
            <div className="bg-red-200 m-3 md:m-auto md:w-10/12">
                {/* Title */}
                <div className="">
                    <p className="text-2xl md:text-3xl font-semibold">Recently Added</p>
                </div>
                {/* F */}
                <div className="flex">
                    <div className="card">
                        <div className="card-heading">
                            <p className="card-title">Figma</p>
                            <img src={dummy} alt="" width="50px" className="card-icon" />
                        </div>
                        <div className="card-category">
                            <p>Dev Tools</p>
                        </div>
                        <div className="card-description"></div>
                        <div className="card-footer">
                            <div className="card-likeBtn">

                            </div>
                            <div className="card-favTag">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
