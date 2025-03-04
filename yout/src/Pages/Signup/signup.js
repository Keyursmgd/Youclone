import React, {useState} from "react";
import './signup.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () =>{
    const [uploadedImageUrl,SetUploadedImageUrl] = useState("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADcQAAICAQEGAQkIAQUAAAAAAAABAgMRBAUSITFBUXEGEyIyUmGBkbEUI0JicqHB0TMVJDREU//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6gAAAAAAAAAAAAAAxnONa3pyjFc+LwIWK2CnXJOL5MDIHDtPaMdC4xjFTnLjjOMI5qtvUt4tpnD3p5AlwaqNRTqI71M1LuuxtAAAAAAAAAAAAAAAAAAAAAAAAAEbtPacdInVTiVz78omnaW11VKVWlw5rhKb5LwIKcnJuUm5Sby89QM77rb5uVtjk33JR7bjXp66tPS8xilmXJEOAMrbJ3TdlsnKbfFtmIAGdNtlFinVJxkuqLJsvaUdZHdmlG6K4rpLwKwerK9KOU0+DAuvuwCu6DbNlUtzVZsr9rqv7LBCcbIqUJJprKaAyAAAAAAAAAAAAAAAAAAAjttax6bT7tbxZPKz2RIlX23d53aNizlVpQX8/uBwgHZs3Z9mtsyswrXrT/hAcaWWkllvojdDSamfq0WP4Fr0uj0+lhu01RT9p8W/ib/gBUVs3WP8A68zL/S9b/wCEi2ACs0bE1VkvvMVx75yzPbOlr0dGnqqXtNyfOTLGQ/lLDOnqn7MmvmBX+HHgS+wNZKFn2WfGEuMfcyIMq7HVOM484vKAugMYS34RkuqyZAAAAAAAAAAAAAAAAAOxTdW97V3S72S+pcuqKdrFu6y+L6WSX7gY0VSvuhVD1pPBcNNTDT0QqrWIxX79yA8na1PXSnj1IZXiyyAAAAAAA5dp0fadDbWvWxmPijqAFH8fl2PGSm3NC9Pe7q191Y8v8rItgXDZ8t7Q6eT61x+hvNGhjuaOiPauP0N4AAAAAAAAAAAAAAAAArG3KtzaVjxwmlJfR/Qs6IXylq/wXdOMWA8mY8NRNd4r6k4Q3kzw01/619CZAAAAAAAAA0a6EZ6O5SWVuMp8I78ow6yaRcdZ/wAS79DKvsqrzuvoXZ5fwAtcI7sVHssHoYAAAAAAAAAAAAAAAAAI49tVee2dZwTcPSR2IWRVkHXLlJNcgIvybjjR2PvZ/CJY59FpYaPTxpre8s5b7s6AAAAAAAAANWrX+0u/RIhfJujessvlyit1E81lNNJprDTNOj01ekpVdbeG2+PvA3S5o8DAAAAAAAAAAAAAAAAAA9XI8AGQHJJ9GAAAAAAAAAB7hYeea6HnLiYttsAAAAAAAAAAAAAAAAAAAAAA9TzwfJHpiZfUAAAAAAADxA8Z4GAAAAAAAAAAAAAAAAAAAAAD+QHThxMZNtZrxvQ58f2Inam1fNuVGlac8YnPovcjf5PNy0Um223Y8t9QO+u2FnBP0uzNhouo3vTr4T6mham2DxLjjowO4HH9sfsL5nktXN8Ird94HXKahFuTwjklqFO2H4YJ8cmmUpSeZNtmq/8Aw2fpYEtFqXGOGnyaeQVbZ20bNH6LzOl+tHqvAs1VsLq42VPejLlgDMBgAAAAAAAAAAAAAAA0X6zTadZutjF9s5fyIy/bsVn7PU32c/6AmsZInbO0fMp0US+9frNfhRF27U1lvO3dX5OBxt5bbbbfVgPHiWPydedDJrpYyuHTodbbo7N6tpp+tF8mBbzCyuNixJfE59DtCjWJbklGeOMJczq58+QHJPSS51yTXZ8GapU2x51yJEARvmrH+CXyMdRTNaa2UlupQeXLgd+q1FOlr37pqK7dX4Irm1Npz1ma4xcKVxx1YEeuGDt2brpaO1J5dMn6ce3vOIAXSEozrjOElKLXBrqZFPo1eopW7TbKK7Lid9G3L48LoRmu64MCwg4dNtbSX4i5OuXaax+52qSksx4rugPQAAAAAHlk4wi5TajFLLbK7tHbE78w0+YV+11YEtq9p6bSNxcnOfsx4kLq9r6q9tRl5qD/AAw5v4nA8Z4IAHxfV+LyAAAAADIAHqbUlJPDXJ5JnZe15Jxp1Um4t4jN9PEhQBeH3yiP2ptGOjj5utb10lwTfJd2atl6+P8Apsp2v0qFuv8AMun9fAr91srrZ2TeZSeWAuusvsdlsnKb55MAAAAAAAAb9Nq79K15m2UV1TeUzQAJ/SbdrniOqhuP2o8U/wCiVhOFkFKuSlF9U8lL8TfpNZdpLE6pYXWL5MC3g5dBr6tbXmvKnH1oPmjqAru3NbK296eEvuq3iXvZFnsm5TlKTy28t92eAAAAAAAAAAAAAAGyFrhTbUuU8GsAAAAAAAAAAAAAAA2ae+emtjbW8ST+a7Ft010NTRC2vlJcfcynE/sC3GjnFyWI2NLj0wgP/9k=");
    const [signUpField,setSignUpField] =useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl}) // eslint-disable-next-line
    
    const handleInputField = (event,name)=>{
        setSignUpField({
            ...signUpField,[name]:event.target.value 
        })  
    }
    console.log(signUpField)
    
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file',files[0]);
        // youtube-clone
        data.append('upload_preset','youtube-clone');
        try{
            //cloudName = dstm8hbb5
            const response = await axios.post("https://api.cloudinary.com/v1_1/dstm8hbb5/image/upload",data)
            const imageUrl= response.data.url;
            SetUploadedImageUrl(imageUrl);
            setSignUpField({
                ...signUpField,"profilePic":imageUrl 
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="signup">
            <div className="signup_card">
                <div className="signup_title">
                    <YouTubeIcon sx={{fontSize: "54px", color:"blue"}} className="youImage"/>
                    SignUp
                </div>

                <div className="signUp_inputs">
                    <input type="text" className="signup_inp" value={signUpField.channelName} onChange={(e)=>handleInputField(e,"channelName")} placeholder="Channel Name"/>
                    <input type="text" className="signup_inp" value={signUpField.userName} onChange={(e)=>handleInputField(e,"userName")} placeholder="User Name"/>
                    <input type="password" className="signup_inp" value={signUpField.password} onChange={(e)=>handleInputField(e,"password")} placeholder="Password"/>
                    <input type="text" className="signup_inp" value={signUpField.about} onChange={(e)=>handleInputField(e,"about")} placeholder="About your channel"/>
                    <div className="image_upload">
                        <input type="file" onChange={(e)=>uploadImage(e)}/>
                        <div className="img_div">
                            <img src={uploadedImageUrl} alt="" className="img_default" />
                        </div>
                    </div>

                    <div className="signUpbtns">
                        <div className="signBtn">SignUp</div>
                        <Link to ={'/'} className="signBtn">Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;