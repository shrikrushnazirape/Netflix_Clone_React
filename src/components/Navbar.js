import React, { useEffect, useState } from 'react'
import './nav.css'



function Navbar() {
    const [show, handleShow]=useState(false);
    
    useEffect(()=>{

        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
},[]);
    

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" className="nav_logo"/>

            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="" className="nav_avatar"/>

        </div>
    )
}

export default Navbar
