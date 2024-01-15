import React from 'react';
import NavBar from '../components/navbar';
import HomeContent from '../components/home';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function HomePage(){
    return (
        <div>
            <NavBar/>
            <div>
                <HomeContent/>
            </div>
        </div>
    );
}


