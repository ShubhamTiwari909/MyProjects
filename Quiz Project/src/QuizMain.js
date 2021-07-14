import React, { useState } from 'react';
import './App.css'
import App from './App'

function QuizMain()
{
    return(
        <div>
        <ul class="nav justify-content-center mb-3 mt-3" id="navId">
            <li class="nav-item">
                <a href="#tab1Id" class="nav-link active text-light">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Quizzes</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#tab2Id">Action</a>
                    <a class="dropdown-item" href="#tab3Id">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#tab4Id">Action</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="#tab5Id" class="nav-link text-light">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-light">Contact</a>
            </li>
        </ul>
        
       
        <h1 className="text-light mb-5 text-center display-4">Quiz Created in React JS</h1>
        <App />
        </div>
        
    );
}
export default QuizMain;