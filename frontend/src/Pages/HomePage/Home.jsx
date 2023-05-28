import Footer from '../../components/Common/Footer';
import Navbar from '../../components/Common/Navbar';
import Header from '../../components/Homepage/Header';
import HeaderBadge from '../../components/Homepage/HeaderBadge';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <HeaderBadge/>
            <Footer/>
        </div>
    );
};

export default Home;