import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../EDuce/EduceCardStyle.css'
import { BsArrowRightCircle } from "react-icons/bs";
import EduceCardDetail from '../../CardSection/EduceCardDetail';
import { MdSchool,MdOutlineDiversity3 } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";


const EduceCard=()=>{

    return(
        <div className="ContentCard">
            <div className="row d-flex Navcard">
                <EduceCardDetail icon={<GiSchoolBag/>} head='School' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <EduceCardDetail icon={<MdSchool/>} head='College' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <EduceCardDetail icon={<MdOutlineDiversity3/>} head='HR Training' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                
            </div>
        </div>
    )
}
export default EduceCard;