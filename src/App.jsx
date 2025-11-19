import './App.css';
import HeroSection from "./components/HeroSection/index.jsx";
import Body from './components/Body/index.jsx';
import Midias from './components/Midias/index.jsx';
import Precos from './components/Precos/index.jsx'
import Footer from './components/Footer/index.jsx'

export default function App() {
  return (
    <>
      <HeroSection />
      <Body />
      <Midias />
      <Precos />
      <Footer />
    </>
  );
}
