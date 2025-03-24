import React, { useEffect, useState } from "react";
import './homePage.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const HomePage = ({ sideNavbar }) => { // eslint-disable-next-line
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/allVideo')
            .then(res => {
                console.log("Response Data:", res.data.videos);
                setData(res.data.videos)
            })
            .catch(err => {
                console.error("Axios Error:", err.message);
                if (err.response) {
                    console.error("Error Response Data:", err.response.data);
                    console.error("Error Status:", err.response.status);
                } else if (err.request) {
                    console.error("No response received from server.");
                } else {
                    console.error("Axios Request Error:", err.message);
                }
            });
    }, []); // eslint-disable-next-line
    const options = ["All", "Trending", "IPL", "India\'s got latent", "Music", "live", "movies", "Sports", "News", "Infotainment", "BeerBiceps", "Gaming", "Comedy"]
    return (
        <div className={sideNavbar ? 'homePage' : 'homePageHide'}>
            <div className="homePage_Options">
                {
                    options.map((item, index) => {
                        return (
                            <div key={index} className="homePage_option">
                                {item}
                            </div>
                        );
                    })
                }
            </div>

            <div className={sideNavbar ? "home_mainPage" : "home_mainPagewithoutlink"}>

                {
                    data?.map((item, index) => {
                        return (
                            <Link to={`/watch/${item.id}`} className="youtubeVideo">
                                <div className="thumbnailBox">
                                    <img src={item.thumbnail} alt="cooking" className="thumbpic" />
                                    <div className="you_thumbnail">28:05</div>
                                </div>

                                <div className="youtitlebio">
                                    <div className="youprofile">
                                        <img src={item?.User?.profilePic} alt="madd" className="you_thumb_profile" />
                                    </div>

                                    <div className="youtittitle">
                                        <div className="youvidtit">{item?.title}</div>
                                        <div className="youchantit">{item?.User?.channelName}</div>
                                        <div className="youvidview">{item?.like} likes</div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }



            </div>
        </div>
    )
}

export default HomePage