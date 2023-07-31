import React from "react";
import AboutImage from '../../Image/About/computer-user.jpg'
import './AboutStyle.css'

const About=()=>{

    return(
        <div className="About">
            <div className="AboutContainer">
            <div className="row">
                <div className="col-12 col-sm-12 col-mx-12 col-lg-12 col-xl-6 AboutImage">
                    <img src={AboutImage} alt=""/>
                </div>
                <div className="col-12 col-sm-12 col-mx-12 col-lg-12 col-xl-6 AboutText">
                    <h2></h2>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default About;