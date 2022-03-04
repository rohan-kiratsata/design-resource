import React from 'react';
// import resources from './.../resourcesData.js'
// import resources from 'src/components/resourcesData.js'
import { resources } from './resourcesData';

export default function Blogs() {
    return (
        <>
            <div className="bg-blue-400 flex flex-wrap">
                {/* Everything working fine : 03-02-22 
                    [ ] Create CSS Cards
                    [ ] Add More Tools to *Resources.js


                */}
                <div>
                    {
                        resources.map((ele) => {
                            return (
                                <p>{ele.productId}</p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
