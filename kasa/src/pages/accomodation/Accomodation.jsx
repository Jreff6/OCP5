import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import AccomodationDetails from "../../components/accomodation/Accomodation";
import './accomodation.scss'

function Accomodation() {
    return(
        <div className="accoWrap">
            <div className="MainWrapper">
                <Banner />
                <AccomodationDetails />
                
            </div>
            <Footer />
        </div>
    )
}


export default Accomodation ;