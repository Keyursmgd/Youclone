import React,{useState} from "react";
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Login = ({setLoginModel}) =>{
    const [loginField,setLoginField] = useState({"userName":"","password":""});

    console.log(loginField)

    const handleOnChangeInput = (event,name)=>{
        setLoginField({
            ...loginField,[name]:event.target.value 
        })
    }
    return (
        <div className="login">
            <div className="login_card">
                <div className="title_login">
                    <YouTubeIcon sx ={{fontSize: "54px",color:"blue"}} className="login_image"/>
                    Login
                </div>

                <div className="LoginCredentials">
                    <div className="userNameLogin">
                        <input type="text" value={loginField.userName} onChange={(e) => handleOnChangeInput(e,"userName")} placeholder="UserName" className="userLogin" />
                    </div>
                    <div className="userNameLogin">
                        <input type="password" value={loginField.password} onChange={(e) => handleOnChangeInput(e,"password")} placeholder="Password" className="userLogin" />
                    </div>
                </div>

                <div className="login_buttns">
                    <div className="login_btn">Login</div>
                    <Link to={'/signup'} className="login_btn" onClick={() =>setLoginModel()}>SignUp</Link>
                    <div className="login_btn" onClick={() =>setLoginModel()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}
export default Login