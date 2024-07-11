import './error.scss';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Error from '../../components/error/Error';

function ErrorPage () {
    return(
   <div className='mainWrapper'>
        <Banner />
        <Error />
        <Footer />
   </div>
    )
}

export default ErrorPage;  