import React,{useState} from 'react';
import CodingNavbar from './CodingNavbar';
import Banner from './Banner';
import WhyAcademyWorks from './WhyAcademyWorks';
import LanguageTemplate from './LanguageTemplate';
import Services from './Services'
import AboutUs from './AboutUs'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import './coding.css'
function Coding() {


    return (
        <div>
            <CodingNavbar />
            <div>
            <Banner />
            </div>
       
                <div style={{display:"block",width:"90%",margin:"0 auto"}}>
                    <WhyAcademyWorks />
                    <LanguageTemplate />
                    <Services />
                    <AboutUs />
                </div>
        
            <NewsLetter />
            <Footer /> 
          
        </div>
    )
}

export default Coding;


