import './App.less';
import "./normalize.less";
import "./components/Header/index"
import Header from './components/Header/index';
import Promo from './components/General';
import Brands from './components/Brands';
import Novelties from './components/Novelties';
import Banner from './components/Banner';
import Favorite from './components/Favorite';
import Vouchers from './components/Vouchers';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main className='main-page'>
        <Promo />
        <Brands />
        <Novelties />
        <Banner />
        <Favorite />
        <Vouchers />
        <Community />
      </main>
      <Footer />
    </>
  )
}

export default App
