import React, { useEffect, useState } from "react";
import './profile.css';
import SideNavbar from "../../Component/sideNavbar/sideNavbar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link,useParams } from "react-router-dom";
import axios from "axios";


const Profile = ({ sideNavbar }) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    

    const fetchProfileData = async () => {
        axios.get(`http://localhost:4000/api/${id}/channel`).then((response) => {
            console.log(response);
            setData(response.data.video);
            setUser(response.data.video[0]?.user);
        }).catch(err => {
            console.error("Axios Error:", err.message);
            if (err.response) {
                console.error("Error Response Data:", err.response.data);
                console.error("Error Status:", err.response.status);
            } else if (err.request) {
                console.error("No response received from server.");
            } else {
                console.error("Axios Request Error:", err.message);
            }
        }
    );
    console.log(id)
    }

    useEffect(() => {
        if(id){
            fetchProfileData();
        } 
    }, [])

    return (
        <div className="profile">
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar ? "profile_page" : "inactprofile"}>
                <div className="pro_section">
                    <div className="sect_profi">
                        <img src={user?.profilePic} alt="Madd" className="tumbnail" />
                    </div>
                    <div className="sect_about">
                        <div className="about_name">{user?.channelName}</div>
                        <div className="about_info">{user?.userName} . {data.length} videos</div>
                        <div className="about_info">{user?.about}</div>
                    </div>
                </div>

                <div className="profile_video">
                    <div className="pro_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="provideos">

                        {
                            data.map((item, key) => {
                                return (
                                    <Link to={`/watch/${item.id}`} className="provideo_block">
                                        <div className="vid_thumbnail">
                                            <img src={item?.thumbnail} alt="chhaava" className="provid_img" />

                                        </div>

                                        <div className="pro_detail">
                                            <div className="pro_det_name">{item?.title}</div>
                                            <div className="pro_det_about">Created at {item?.createdAt.slice(0,10)}</div>
                                        </div>
                                    </Link>
                                );
                            })
                        }




                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile