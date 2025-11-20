import './App.css';
import HeroSection from "./components/HeroSection/index.jsx";
import Body from './components/Body/index.jsx';
import Footer from './components/Footer/index.jsx'


export default function App() {
  return (
    <>
    <div className='app'>
      <HeroSection />
      <Body />
      <Footer />
    </div>
    </>
  );
}
