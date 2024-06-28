import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import AccomodationDetails from "../../components/accomodation/Accomodation";


function Accomodation() {
    return(
        <div className="wrapper">
            <Banner />
            <AccomodationDetails />
            <Footer />
        </div>
    )
}

export default Accomodation ;