import React from "react";
import './FooderStyle.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { RiFocus2Fill } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { GoNote } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";
import FooderImage from '../../Image/Fooder/Students.jpg'
import Foodersports from '../../Image/Fooder/sports.jpg'

const Fooder=()=>{

    return(
        <div className="Fooder">
        <div className="row FooderBody">
        <div className="col-12 col-sm-6 col-mx-6 col-lg-3 col-xl-3 FooderContent">
        <h3 className="col-12 d-flex"><RiFocus2Fill className="mx-1 p-2"/>About</h3>
        <div className="col-12 d-flex">
        <FaLocationDot className="col-3"/><p className="col-9">No.1,Palani Road, Dindigul,Tamilnadu, India. Pincode: 624001</p>
        </div>
       <div className="d-flex"><IoIosCall className="col-3"/><p className="col-9 Mobile">+91 908 0664 382</p></div> 
       <div className="d-flex"><FaTelegramPlane className="col-3"/><p className="col-9 Mail">bevolve@gmail.com</p></div>
       <div className="d-flex"><input className="col-9" type="text" placeholder="Enter Email Address"/><FaTelegramPlane className="col-3 Input"/></div>
       </div>
       <div className="col-12 col-sm-6 col-mx-6 col-lg-3 col-xl-3 FooderContent">
       <h3 className="col-12 d-flex"><FaRegNewspaper className="mx-1 p-2"/>Latest News</h3>
        <div className="d-flex">
        <img className="col-6 mx-2" src={FooderImage} alt=""/>
        <div className="col-6 img">
        <h5>Exam Result</h5>
        <p>Update Later..</p>
        </div>
        </div>
        <div className="d-flex mt-4">
        <img className="col-6 mx-2 " src={Foodersports} alt=""/>
        <div className="col-6 img">
        <h5>Sports Day</h5>
        <p>Comeing Soon...</p>
        </div>
        </div>
       </div>
       <div className="col-12 col-sm-6 col-mx-6 col-lg-3 col-xl-3 FooderContent">
       <h3 className="col-12 d-flex"><GoNote className="mx-1 p-2"/>Information</h3>
        <h5 className="mx-5"><a href="#about">About</a></h5>
        <h5 className="mx-5"><a href="#humanology">Humanology</a></h5>
        <h5 className="mx-5"><a href="#school">School</a></h5>
        <h5 className="mx-5"><a href="#college">College</a></h5>
        <h5 className="mx-5"><a href="#corporate">Corporate</a></h5>
       </div>
       <div className="col-12 col-sm-6 col-mx-6 col-lg-3 col-xl-3 FooderContent">
       <h3 className="col-12 d-flex"><BsInstagram className="mx-1 p-2"/>Instagram</h3>
       <div className="col-12 d-flex">
        <img className="col-4 mx-1" src="https://visualsstock.com/details_watermark.php?filename=58812" alt="one"/>
        <img className="col-4 mx-1" src="https://www.eschoolnews.com/files/2015/11/shutterstock_71162872.jpg" alt="two"/>
        <img className="col-4 mx-1" src="https://visualsstock.com/details_watermark.php?filename=58826" alt="three"/>
        </div>
        <div className="col-12 d-flex">
        <img className="col-4 mx-1 mt-2" src="https://i.pinimg.com/originals/00/64/d0/0064d006bf38ec07c2f61bbf48fe585a.jpg" alt="one"/>
        <img className="col-4 mx-1 mt-2" src="https://sanctamaria.co.in/wp-content/uploads/2022/09/smisf-08-980x306.jpg" alt="two"/>
        <img className="col-4 mx-1 mt-2" src="https://www.visualsstock.com/details_watermark.php?filename=58803" alt="three"/>
        </div>
        <div className="col-12 d-flex">
        <img className="col-4 mx-1 mt-2" src="https://www.visualsstock.com/details_watermark.php?filename=27686" alt="one"/>
        <img className="col-4 mx-1 mt-2" src="https://www.visualsstock.com/details_watermark.php?filename=48954" alt="two"/>
        <img className="col-4 mx-1 mt-2" src="https://www.visualsstock.com/details_watermark.php?filename=27728" alt="three"/>
        </div>
       </div>
        </div>
        <div className="col-12 copyright">
            <hr className="harizandal"/>
            <p>Copyright @ 2023 | B-Evolve </p>
            <p>Website Designed by <a href="https://www.linkedin.com/in/bharathithangaraj/">Bharathi Thangaraj</a></p>
        </div>
        </div>
    )
}
export default Fooder;