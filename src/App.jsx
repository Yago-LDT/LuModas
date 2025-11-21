import './App.css';
import { useEffect } from 'react';
import HeroSection from "./components/HeroSection/index.jsx";
import Body from './components/Body/index.jsx';
import Footer from './components/Footer/index.jsx'


export default function App() {

  useEffect(()=> {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -40% 0px"
    });

    document.querySelectorAll(".fade").forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
