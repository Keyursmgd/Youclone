import React from "react";
import './homePage.css';
import { Link } from 'react-router-dom';

const HomePage = ({sideNavbar}) => { // eslint-disable-next-line
    const options=["All","Trending","IPL","India\'s got latent","Music","live","movies","Sports","News","Infotainment","BeerBiceps","Gaming","Comedy"]
    return (
        <div className={sideNavbar?'homePage':'homePageHide'}>
            <div className="homePage_Options">
                {
                    options.map((item,index) =>{
                        return(
                            <div key={index} className="homePage_option">
                                {item}
                            </div>
                        );
                    })
                }
            </div>

            <div className={sideNavbar?"home_mainPage":"home_mainPagewithoutlink"}>
                <Link to={'/watch/9453'} className="youtubeVideo">
                    <div className="thumbnailBox">
                        <img src="https://i.ytimg.com/vi/77vRyWNqZjM/sddefault.jpg" alt="cooking" className="thumbpic" />
                        <div className="you_thumbnail">28:05</div>
                    </div>

                    <div className="youtitlebio">
                        <div className="youprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve3bUTQ03CCNYhxT4jAl73wZm3yRDsNCMfQ&s" alt="madd" className="you_thumb_profile" />
                        </div>

                        <div className="youtittitle">
                            <div className="youvidtit">Chhaava Trailer</div>
                            <div className="youchantit">Maddock Films</div>
                            <div className="youvidview">6.9 crore views</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9453'} className="youtubeVideo">
                    <div className="thumbnailBox">
                        <img src="https://i.ytimg.com/vi/77vRyWNqZjM/sddefault.jpg" alt="cooking" className="thumbpic" />
                        <div className="you_thumbnail">28:05</div>
                    </div>

                    <div className="youtitlebio">
                        <div className="youprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve3bUTQ03CCNYhxT4jAl73wZm3yRDsNCMfQ&s" alt="madd" className="you_thumb_profile" />
                        </div>

                        <div className="youtittitle">
                            <div className="youvidtit">Chhaava Trailer</div>
                            <div className="youchantit">Maddock Films</div>
                            <div className="youvidview">6.9 crore views</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9453'} className="youtubeVideo">
                    <div className="thumbnailBox">
                        <img src="https://i.ytimg.com/vi/77vRyWNqZjM/sddefault.jpg" alt="cooking" className="thumbpic" />
                        <div className="you_thumbnail">28:05</div>
                    </div>

                    <div className="youtitlebio">
                        <div className="youprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve3bUTQ03CCNYhxT4jAl73wZm3yRDsNCMfQ&s" alt="madd" className="you_thumb_profile" />
                        </div>

                        <div className="youtittitle">
                            <div className="youvidtit">Chhaava Trailer</div>
                            <div className="youchantit">Maddock Films</div>
                            <div className="youvidview">6.9 crore views</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9453'} className="youtubeVideo">
                    <div className="thumbnailBox">
                        <img src="https://i.ytimg.com/vi/77vRyWNqZjM/sddefault.jpg" alt="cooking" className="thumbpic" />
                        <div className="you_thumbnail">28:05</div>
                    </div>

                    <div className="youtitlebio">
                        <div className="youprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve3bUTQ03CCNYhxT4jAl73wZm3yRDsNCMfQ&s" alt="madd" className="you_thumb_profile" />
                        </div>

                        <div className="youtittitle">
                            <div className="youvidtit">Chhaava Trailer</div>
                            <div className="youchantit">Maddock Films</div>
                            <div className="youvidview">6.9 crore views</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9453'} className="youtubeVideo">
                    <div className="thumbnailBox">
                        <img src="https://i.ytimg.com/vi/77vRyWNqZjM/sddefault.jpg" alt="cooking" className="thumbpic" />
                        <div className="you_thumbnail">28:05</div>
                    </div>

                    <div className="youtitlebio">
                        <div className="youprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve3bUTQ03CCNYhxT4jAl73wZm3yRDsNCMfQ&s" alt="madd" className="you_thumb_profile" />
                        </div>

                        <div className="youtittitle">
                            <div className="youvidtit">Chhaava Trailer</div>
                            <div className="youchantit">Maddock Films</div>
                            <div className="youvidview">6.9 crore views</div>
                        </div>
                    </div>
                </Link>

                <Link to={'/watch/9453'} className="youtubeVideo">
                    <div className="thumbnailBox">
                        <img src="https://i.ytimg.com/vi/77vRyWNqZjM/sddefault.jpg" alt="cooking" className="thumbpic" />
                        <div className="you_thumbnail">28:05</div>
                    </div>

                    <div className="youtitlebio">
                        <div className="youprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTve3bUTQ03CCNYhxT4jAl73wZm3yRDsNCMfQ&s" alt="madd" className="you_thumb_profile" />
                        </div>

                        <div className="youtittitle">
                            <div className="youvidtit">Chhaava Trailer</div>
                            <div className="youchantit">Maddock Films</div>
                            <div className="youvidview">6.9 crore views</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage