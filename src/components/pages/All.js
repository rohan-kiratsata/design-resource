import React from 'react';
import { Resources } from '../data/ResourcesData';
import { FaLink } from 'react-icons/fa';
import { Provider, LikeButton } from "@lyket/react";

export default function All() {
    return (
        <>
            <div className="p-5 text-center">
                <p className="text-xl md:text-2xl font-md font-FiraSans text-gray-500">ALL RESOURCES</p>
            </div>
            <div className="card-container">
                {Resources.sort((a, b) => (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0)).map((ele) => {
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
