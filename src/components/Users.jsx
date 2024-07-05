import React from "react";
import NavBar from "./NavBar";
import UserCard from "./UserCard";

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
        <h1>USERS</h1><div className="row justify-content-around">
        {
            users.map((user, index)=>{
                return(
                    <UserCard user={user} index={index}/>
                )
            })
        }


        </div>
        
        
        </>
    )
}

export default Users