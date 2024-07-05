import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({user, index}) => {
    // Logic goes here

    return (
        <>
            <div className="col-md-3 card" style={{ width: '18rem', margin: '5px' }} key={index}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.age}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{user.profession}</h6>
                    <Link to="/userprofile" state={user} className="card-link">View More</Link>
                    <a href="#" className="card-link">Contact link</a>
                </div>
            </div>



        </>
    )
}
export default UserCard