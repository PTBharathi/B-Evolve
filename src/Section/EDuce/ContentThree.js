import React from "react";
import './ContentThreeStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstImage from '../../Image/EDuce/background.jpg'
const ContentThree = () => {

    return (
        <div className="ContentThree">
            <div className="row  mx-5 p-0 mr-0">
                <div className=" col-12 col-sm-12 col-mx-12 col-lg-12 col-xl-6 ContentTxt texttwo mx-0">
                    <h1>EDuce</h1>
                    <img className="SecondImage" src={FirstImage} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-mx-12 col-lg-12 col-xl-6 ContentTxt textthree mx-0">
                    <h1>Welcome to EDuce</h1>
                    <p>B-Evolve is an organisation that primarily works in the space of childcare, focusing on healing, restoring and transforming human relationships. We focus on building the inner strength, enhance self – awareness, promote emotional regulation and strengthen human connections.</p>
                    <p>Our approach is a holistic one, where all aspects of the individual’s social - emotional health are equally considered. We provide structured & customised intervention programmes, opportunities, and consultancy, thereby creating conditions of happiness, heartful-ness and interconnectedness.</p>
                </div>
            </div>
        </div>
    )
}
export default ContentThree;