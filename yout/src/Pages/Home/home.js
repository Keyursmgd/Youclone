import React from "react";
import SideNavbar from "../../Component/sideNavbar/sideNavbar";
import './home.css';
import HomePage from "../../Component/HomePage/HomePage";

const Home = ({ sideNavbar }) => {
    return (
        <div className="home">
            <SideNavbar sideNavbar={sideNavbar} />
            <HomePage sideNavbar={sideNavbar}/>
        </div>
    )
}

export default Home;