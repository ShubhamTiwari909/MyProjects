import React from 'react'
import Fade from 'react-reveal/Fade';


function CodingNavbar() {
    return (
        <Fade down>
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "darkslateblue",height:"auto"}}>
                <a class="navbar-brand" href="#" style={{color:"blanchedalmond",fontWeight:"bolder",fontSize:"1.5rem"}}>Coder<span style={{fontStyle:"italic",color:"burlywood"}}>Academy</span></a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#AboutUs">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Languages</a>
                            <div class="dropdown-menu" style={{ background: "#4568dc",
                                background: "-webkit-linear-gradient(to right, #4568dc, #b06ab3)",
                                background: "linear-gradient(to right, #4568dc, #b06ab3)" }} aria-labelledby="dropdownId">
                                <a class="dropdown-item text-light" href="#">HTML</a>
                                <a class="dropdown-item text-light" href="#">CSS</a>
                                <a class="dropdown-item text-light" href="#">JAVASCRIPT</a>
                                <a class="dropdown-item text-light" href="#">JQUERY</a>
                                <a class="dropdown-item text-light" href="#">BOOTSTRAP</a>
                                <a class="dropdown-item text-light" href="#">REACT JS</a>
                                <a className="dropdown-item text-light" href="#">ANGULAR JS</a>
                                <a className="dropdown-item text-light" href="#">VUE JS</a>
                                <a className="dropdown-item text-light" href="#">NODE JS</a>
                                <a className="dropdown-item text-light" href="#">EXPRESS JS</a>
                                <a className="dropdown-item text-light" href="#">MONGO DB</a>
                                <a className="dropdown-item text-light" href="#">MYSQL</a>
                                <a className="dropdown-item text-light" href="#">PHP</a>
                                <a className="dropdown-item text-light" href="#">PYTHON</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">References</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">CSS Creator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#footer_section">Contact</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-success my-2 mx-sm-2" type="submit">Sign up</button>
                        <button class="btn btn-primary my-2 my-sm-0" type="submit">Sign in</button>
                    </form>
                </div>
           
            </nav>
        </div>
        </Fade>
    )
}

export default CodingNavbar
