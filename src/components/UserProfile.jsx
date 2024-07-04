import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
    const location = useLocation()
    const user = location.state
    console.log(user)
    // Logic goes here

    return (
        <>
        <NavBar/>
        <div className="card">
            <h1>{user.name}</h1>
            <h2>{user.profession}</h2>
            <h3>{user.age}</h3>
            <h2>{user.country}</h2>
        </div>
        </>
    )
}
export default UserProfile