import React, { useState } from "react";
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Login = ({ setLoginModel }) => {
    const [loginField, setLoginField] = useState({ "userName": "", "password": "" });
    const [loader, setLoader] = useState(false)

    console.log(loginField)

    const handleOnChangeInput = (event, name) => {
        setLoginField({
            ...loginField, [name]: event.target.value
        })
    }

    const handleLoginFun = async () => {
        setLoader(true)
        axios.post("http://localhost:4000/auth/login", loginField,{withCredentials:true}).then((resp => {
            setLoader(false)
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("userId", resp.data.user.id)
            localStorage.setItem("userProfiePic", resp.data.user.profilePic)
            window.location.reload()
        })).catch(err => {
            toast.error("Invalid credentials")
            console.log(err)
            setLoader(false)
        })
    }

    return (
        <div className="login">
            <div className="login_card">
                <div className="title_login">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "blue" }} className="login_image" />
                    Login
                </div>

                <div className="LoginCredentials">
                    <div className="userNameLogin">
                        <input type="text" value={loginField.userName} onChange={(e) => handleOnChangeInput(e, "userName")} placeholder="UserName" className="userLogin" />
                    </div>
                    <div className="userNameLogin">
                        <input type="password" value={loginField.password} onChange={(e) => handleOnChangeInput(e, "password")} placeholder="Password" className="userLogin" />
                    </div>
                </div>

                <div className="login_buttns">
                    <div className="login_btn" onClick={handleLoginFun}>Login</div>
                    <Link to={'/signup'} className="login_btn" onClick={() => setLoginModel()}>SignUp</Link>
                    <div className="login_btn" onClick={() => setLoginModel()}>Cancel</div>
                </div>

                {
                    loader && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                }
            </div>

            <ToastContainer />
        </div>
    )
}
export default Login