import Header from './components/header/header'
import Background from './components/background/background';
import AboutUs from './components/aboutus/aboutus'
import Banner from './components/banner/banner'
import Tuition from './components/tuition/tuition';
import Footer from './components/footer/footer'

import './App.css';


function App() {
  return (
    <div className="home">
      <Background />
      <Header />
      <Banner />
      <AboutUs/>
      <Tuition />
      <Footer />
    </div>
  );
}

export default App;
