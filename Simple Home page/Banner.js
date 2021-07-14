import React from 'react'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'

function Banner() {
    return (

<div id="carouselId" class="carousel slide" data-ride="carousel" style={{zIndex:-1}}> 
<ol class="carousel-indicators">
    <li data-target="#carouselId" data-slide-to="0" class="active"></li>
    <li data-target="#carouselId" data-slide-to="1"></li>
    <li data-target="#carouselId" data-slide-to="2"></li>
</ol>
<div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
        <img src={image1} className="banner" alt="First slide" className="Banner-image" />
    </div>
    <div class="carousel-item">
        <img src={image2} className="banner" alt="Second slide" className="Banner-image" />
    </div>
    <div class="carousel-item">
        <img src={image3} className="banner" alt="Third slide" className="Banner-image" />
    </div>
</div>
<a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>
</div>
    )
}


export default Banner
