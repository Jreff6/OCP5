import './error.scss';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'

function Error () {
    return(
   <div className='mainWrapper'>
        <Banner />
        <div className='texts'>
            <p className='404'>404</p>
            <p className='info'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='return'>Retourner sur la page d'accueil</p>
        </div>
        <Footer />
   </div>
    )
}

export default Error;