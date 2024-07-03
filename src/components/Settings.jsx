import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const Settings = () => {
    // Logic goes here
    const params = useParams()

    return (
        <>
        <NavBar/>
        <h1 className="display-6">Settings Page {params.settingsId}</h1>
        </>
    )
}

export default Settings;