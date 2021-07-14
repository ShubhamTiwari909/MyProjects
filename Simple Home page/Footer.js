import React from 'react'

function Footer() {
    return (
        <section id="footer_section">
        <div className="Footer">
            

                <div className="left-side">
                   
                        <h2 className="footer-left-heading text-center">Contact</h2>

                        <h5 className="footer-address text-center">2b-2925 , kamal colony , Jv jain road Saharanpur, UttarPradesh, India</h5>
                        <h5 className="footer-phone text-center">Phone: +91 9627253516</h5>


                   <div className="mt-5">
                      
                    <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"3rem",color:"white",fontSize:"3rem"}}>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin"></i>
                    </div>

                   </div>
                   <h5 className="mt-5">@2021 created by waaduheck</h5>

                </div>

                <div className="right-side">
                    <form className="form w-75">
                        <label>Name</label>
                        <input type="text" className="form-control contact-input"/>

                        <label>Email</label>
                        <input type="text" className="form-control contact-input"/>

                        <label>Subject</label>
                        <input type="text" className="form-control contact-input"/>

                        <label>Message</label>
                        <textarea type="text" value="" class="form-control contact-input" placeholder="Message" aria-describedby="helpId" />

                        <button className="btn book-now">Submit</button>
                    </form>
                </div>
            </div>
            </section>
       
    )
}

export default Footer
