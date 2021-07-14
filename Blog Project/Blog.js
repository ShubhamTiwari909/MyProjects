import React from 'react'

import Navbar from './navbar';
import AboutMe from './AboutMe';
import Help from './Help';
import Footer from './Footer';
import Fashion from './Fashion';
import Food from './Food';
import Music from './Music';
import Travel from './Travel';
import Sports from './Sports';
import Fitness from './Fitness';

import {
    BrowserRouter as Router,Switch,Route,Link,NavLink
  } from "react-router-dom";

import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

function Blog() {
    return (
        <div>
            <Router>
             <nav class="navbar navbar-expand-lg navbar-light bg-light pl-5 font-weight-bold text-dark fixed-top">
                <a class="navbar-brand">WaaduBlogs</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <li class="nav-link"><NavLink to="/home" activeStyle={{color:'magenta'}} target="blank">Home <span class="sr-only">(current)</span></NavLink></li>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Categories
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        
                     
                        <li class="dropdown-item"><NavLink to="/fashion" activeStyle={{color:'magenta'}} target="blank">Fashion</NavLink></li>
                        <li class="dropdown-item"><NavLink to="/food" activeStyle={{color:'magenta'}} target="blank">Food</NavLink></li>
                        <li class="dropdown-item"><NavLink to="/music" activeStyle={{color:'magenta'}} target="blank">Music</NavLink></li>
                        <li class="dropdown-item"><NavLink to="/travel" activeStyle={{color:'magenta'}} target="blank">Travel</NavLink></li>
                        <li class="dropdown-item"><NavLink to="/sports" activeStyle={{color:'magenta'}} target="blank">Sports</NavLink></li>
                        <li class="dropdown-item"><NavLink to="/fitness" activeStyle={{color:'magenta'}} target="blank">Fitness</NavLink></li>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#about-section">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#footer_section ">Contact</a>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                      <li className="nav-link"><NavLink to="/signup" activeStyle={{color:'magenta'}} target="blank">Signup</NavLink></li> 
                      <li className="nav-link"><NavLink to="/login" activeStyle={{color:'magenta'}} target="blank">Login</NavLink></li>
                    </form>
                </div>
        </nav>
        </Router>

        <Router>
        <Switch>
            <Route path="/home">
                <Navbar />
                <AboutMe />
                <Help />
            </Route>
        
            <Route path="/fashion">
            <Fashion />
            </Route>

            <Route path="/food">
            <Food />
            </Route>

            <Route path="/music">
            <Music />
            </Route>

            <Route path="/travel">
            <Travel />
            </Route>

            <Route path="/sports">
            <Sports />
            </Route>

            <Route path="/fitness">
            <Fitness />
            </Route>

            <Route path="/signup">
            <SignUpPage />
            </Route>

            <Route path="/login">
            <LoginPage />
            </Route>
        </Switch>

        </Router>
        <Footer />
        </div>
    )
}

export default Blog