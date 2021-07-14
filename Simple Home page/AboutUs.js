import React from 'react'
import Aboutme from './images/About me.png'
import RubberBand from 'react-reveal/RubberBand';

function AboutUs() {
    return (
        <RubberBand>
        <section id="AboutUs">
            <div className="text-center" style={{margin:"4rem",padding:"5rem 0"}}>
                <img src={Aboutme} className="AboutUs-image" alt="About me"/>
            </div>
        </section>
        </RubberBand>
    )
}

export default AboutUs
