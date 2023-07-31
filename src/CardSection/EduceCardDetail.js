import React from "react";
const EduceCardDetail=({icon,head,phar,foodericon})=>{
    return(
        <div className="col-12 col-sm-12 col-mx-6 col-lg-3 col-xl-3 onecard cardchange">
        <div className="col-12"><h1 className="cardheadicon">{icon  ?icon:'No Icon'}</h1></div>
        <div className="col-12 cardtext">
            <h3>{head}</h3>
            <p>{phar}</p>
            <h3><a href="#home" className="Cardicon">{foodericon}</a></h3>
        </div>
    </div>
    )
}
export default EduceCardDetail;