import React from 'react'
import Fade from 'react-reveal/Fade';

function NewsLetter() {
    return (
        <>
            <div className="NewsLetter text-center">
                <Fade down>
                    <h1 className="display-3 pb-2 NewsLetter-heading" style={{color:"rgb(255,255,255)",paddingTop:"5rem",wordSpacing:"1rem",textShadow: "1px 1px 1px black"}}>SUBSCRIBE FOR OUR LATEST UPDATES</h1>
                    <h3 className="text-light mt-4" style={{textShadow: "1px 1px 1px black"}}>Join our newsletter and get connect with us for more.</h3>
                 </Fade>
                
                 <Fade up>
                    <div style={{margin:"3rem auto",width:"40%"}}>
                        <form className="form">
                            <input type="text" placeholder="Enter your email"  className="form-control"/>
                            <button type="button" name="" id="" class="btn btn-primary mt-3">Subscribe</button>
                        </form>
                    </div>
                 </Fade> 
            </div>
        </>
    )
}

export default NewsLetter
