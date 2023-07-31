import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardStyle.css'
import { BsArrowRightCircle } from "react-icons/bs";
import { GiClawHammer } from "react-icons/gi";
import ContentCardDetail from "../../CardSection/ContentCardDetail";
import { MdManageAccounts,MdSchool,MdOutlineCorporateFare } from "react-icons/md";
import { FaComputer,FaTowerCell } from "react-icons/fa6";
import { VscGraphLine,VscLaw } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiCurrencyInrBold } from "react-icons/pi";
import { FcSupport } from "react-icons/fc";

const ContentCard=()=>{

    return(
        <div className="ContentCard">
            <div className="row d-flex Navcard">
                <ContentCardDetail icon={<FaComputer/>} head='Digital Marketing' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <ContentCardDetail icon={<MdManageAccounts/>} head='HR System Support' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <ContentCardDetail icon={<VscGraphLine/>} head='ERP`S' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <ContentCardDetail icon={<PiCurrencyInrBold/>} head='Financial Intelligence' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <ContentCardDetail icon={<VscLaw/>} head='Legal Assistance' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                <ContentCardDetail icon={<FcSupport/>} head='Quality Management Support-ISO,IST.,' phar='Lorem ipsum dolor sit mattis amet consectetur adipiscing' foodericon={<BsArrowRightCircle/>} />
                
            </div>
        </div>
    )
}
export default ContentCard;