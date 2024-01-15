import React from "react";
import {toast} from 'react-toastify'
import {
    AiFillHome ,
    AiTwotoneInfoCircle,
    AiFillCalendar
} from "react-icons/ai";


import 'react-tooltip/dist/react-tooltip.css';
import '../SCSS/navbar.scss';
import { useNavigate } from "react-router-dom";

export default function Topbar(){

    let navigate = useNavigate();
    
    const book = async () => {
        toast.success("Fill the form!");
        await navigate("/formpage");
    }

    const homep = async () => {
        await navigate("/homepage");
    }
    
        return (

        <div className="topbar-main">
            <div className='react-icons'>
                <img className="image" src="https://static.thenounproject.com/png/85867-200.png" alt="YOGIC" />
                <div>
                <AiFillHome
                    size={30}
                    className="react-icon"
                    onClick={homep}
                />
                </div>
                <div>
                <AiFillCalendar 
                    size={30}
                    className="react-icon"
                    onClick={book}
                />
                </div>

                <div>
                <AiTwotoneInfoCircle
                    size={30}
                    className="react-icon"
                    // onClick={() => goToRoute("/aboutUs")}
                    />
                </div>
            </div>
        </div>
    );
}