import React, { useState,useEffect } from "react";
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link,useNavigate } from "react-router-dom";
import Login from "../Login/login";
import axios from "axios";

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {   // eslint-disable-next-line
    const [userPic, setUserPic] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg");
    const [navModel, setNavModel] = useState(false);
    const [login,setLogin] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const navigate=useNavigate();

    const handleClickModal = () => {
        setNavModel(prev => !prev);
    }

    const toggleSideNavbar = () => {
        setSideNavbarFunc(!sideNavbar);
    }

    const handleProfile = () => {
        let userId = localStorage.getItem("userId")
        navigate(`/user/${userId}`);
        setNavModel(false);
    }
    const setLoginModel = () =>{
        setLogin(false);
    }

    const conclickOfPopUpOption = (button) =>{
        setNavModel(false)
        if(button==="login"){
            setLogin(true)
        }else{
            localStorage.clear();
            getLogOutFun()
            setTimeout(() => {
                navigate('/')
                window.location.reload();
            }, 2000);
        }
    }

    const getLogOutFun = async () => {
        axios.post("http://localhost:4000/auth/logout",{},{withCredentials:true}).then((res)=>{
            console.log("Logout")
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() =>{
        let userProfiePic = localStorage.getItem("userProfiePic")
        setIsLoggedIn(localStorage.getItem("userId")!==null?true:false);
        if (userProfiePic !==null){
            setUserPic(userProfiePic)
        }
    },[])

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbarHamburger" onClick={toggleSideNavbar}>
                    <MenuIcon sx={{ color: "white" }} />
                </div>
                <Link to={'/'} className="navbar_youtubeImg">
                    <YouTubeIcon sx={{ fontSize: "34px" }} className="navbar_youtubeImage" />
                    <div className="navbar_utube">Clonery</div>
                </Link>
            </div>

            <div className="navbar-middle">
                <div className="navbar_searchBox">
                    <input type="text" placeholder="Search" className="navbar_searchBoxInput" />
                    <div className="navbar_searchIconBox"><SearchIcon sx={{ fontSize: "28px", color: "white" }} /></div>
                </div>

                <div className="navbar_mike">
                    <KeyboardVoiceIcon sx={{ color: "white" }} />
                </div>
            </div>

            <div className="navbar-right">
                <Link to = {'/43434/upload'}>
                    <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                </Link>
                
                <NotificationsActiveIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                <img onClick={handleClickModal} src={userPic} className="nav-righ-logo" alt="logo" />

                {
                    navModel &&
                    <div className="nav-model">
                        {isLoggedIn && <div className="nav-mod-option" onClick={handleProfile}>Profile</div>}
                        
                        {isLoggedIn && <div className="nav-mod-option" onClick={()=>conclickOfPopUpOption("logout")}>Logout</div>}
                        {!isLoggedIn && <div className="nav-mod-option" onClick={()=>conclickOfPopUpOption("login")}>Login</div>}
                    </div>
                }
            </div>

            {
                login && <Login setLoginModel={setLoginModel}/>
            }
        </div>
    )
}

export default Navbar;