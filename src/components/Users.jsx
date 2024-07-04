import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Users = () => {
    // Logic goes here
    const users = [
        {
            name:'Dan',
            age:56,
            profession:'Driver',
            country:'Kenya'
        },
        {
            name:'Alvin',
            age:40,
            profession:'Software Engineer',
            country:'Uganda'
        },
        {
            name:'Sam',
            age:34,
            profession:'Lawyer',
            country:'TZ'
        },
        {
            name:'Caro',
            age:38,
            profession:'Economist',
            country:'Egypt'
        },
        {
            name:'Erica',
            age:28,
            profession:'Yoga Instructor',
            country:'Italy'
        }
    ]

    return (
        <>
        <NavBar/>
        <h1>USERS</h1>
        <div className="row justify-content-around">
        {
            users.map((user, index)=>{
                return(
                    <div className="col-md-3 card" style={{width: '18rem', margin:'5px'}} key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{user.age}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{user.profession}</h6>
                            <Link to="/userprofile" state={user} className="card-link">View More</Link>
                            <a href="#" className="card-link">Contact link</a>
                        </div>
                    </div>

                )
            })
        }


        </div>
        
        </>
    )
}

export default Users