import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import AccomodationDetails from "../../components/accomodation/Accomodation";
import './accomodation.scss'
import React from "react";

function Accomodation() {
    return(
        <React.Fragment>
            <div className="accoWrap">
            <div className="MainWrapper">
                <Banner />
                <AccomodationDetails />
                
            </div>
            
        </div>
        <Footer />

        
        </React.Fragment>
        
    )
}


export default Accomodation ;