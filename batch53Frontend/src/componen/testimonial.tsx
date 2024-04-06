import { Testi } from "../atom/cardTestimonial"

import CardTestimonial from "../atom/cardTestimonial"
import React, {useState} from 'react'
import { Itesti } from "../interface/testi"
import dammyData from '../mocks/testimoni.json'

const Testimonial = () => {
    const [testi, setTesti] = React.useState<Itesti[]>(dammyData)

    return (
        <>
        
                <div className="text-center mt-5">
                    <h1 className="text-5xl font-semibold text-blue-900 tracking-wide">See what others have to say</h1>
                </div>
            
                
                <div className="flex flex-row justify-center mt-2 gap-6">
                    {testi.map((data:Itesti) => {
                    const tamplate =
                        <div className=" justify-center mt-10 gap-6">
                            <CardTestimonial testi={data.testi} name={data.name} />
                        </div>
                     return tamplate
                    })}
        
                </div>
                
           
        </>
    )
}

export default Testimonial