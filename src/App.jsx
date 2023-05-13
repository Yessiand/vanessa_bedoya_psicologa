import react from 'react';

import './App.css'
import FooterComponent from './Components/FooterComponents/FooterComponent';
import NavComponent from './Components/NavBarComponents/NavComponent';
import SliderComponent from './Components/SliderComponent/SliderComponent';
import AboutMeComponent from './Components/AboutMeComponents/AboutMeComponent';
import ServicesComponent from './Components/ServicesComponent/ServicesComponent';

function App() {


  return (
    <>
      <NavComponent />
      <SliderComponent />
      <AboutMeComponent />
      <ServicesComponent />
      <FooterComponent />


    </>
  )
}

export default App
