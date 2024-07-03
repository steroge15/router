import React from "react";
import NavBar from "./NavBar";
import errorimage from '../assets/errorimage.jpeg'

const ErrorPage = () => {
    // Logic goes here

    return (
        <>
        <NavBar/>
        <div>
            <img src={errorimage} alt="" />
            <h1>WEWE GEN Z WACHA FUJO! Click Router.com URUDI NYUMBANI</h1>
        </div>
        </>
    )
}

export default ErrorPage