import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Chef from './Components/Chef/Chef'
import Media from './Components/Media/Media'
import Gallery from './Components/Gallery/Gallery'
import Social from './Components/Socials/Social'
import Find from './Components/Find/Find'
import Footer from './Components/Footer/Footer'
import Table from './Components/Table/Table'
import Existing from './Components/Existing/Existing'
import New from './Components/New/New'
import Wines from './Pages/Wines'
import Branches from './Pages/Branches'
import Photos from './Pages/Photos'
import Story from './Pages/Story'
import Main from './Pages/Main'
import Background from './Pages/Background'


function App() {
  
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const chefRef = useRef(null);
  const mediaRef = useRef(null);
  const galleryRef = useRef(null);
  const socialRef = useRef(null);
  const findRef = useRef(null);
  
  // Section refs for smooth scrolling
  const sectionRefs = {
    'home': headerRef,
    'about': aboutRef,
    'menu': menuRef,
    'chef': chefRef,
    'media': mediaRef,
    'gallery': galleryRef,
    'contact': findRef,
    'social': socialRef
  };
  
  // Function to scroll to a section
  const scrollToSection = (sectionName) => {
    const ref = sectionRefs[sectionName.toLowerCase()];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Main layout component that contains the scrollable sections
  const HomePage = () => (
    <>
      <Navbar onNavClick={scrollToSection} />
      
      <div ref={headerRef} id="home">
        <Header />
      </div>
      
      <div ref={aboutRef} id="about">
        <About />
      </div>
      
      <div ref={menuRef} id="menu">
        <Menu />
      </div>
      
      <div ref={chefRef} id="chef">
        <Chef />
      </div>
      
      <div ref={mediaRef} id="media">
        <Media />
      </div>
      
      <div ref={galleryRef} id="gallery">
        <Gallery />
      </div>
      
      <div ref={socialRef} id="social">
        <Social />
      </div>
      
      <div ref={findRef} id="contact">
        <Find />
      </div>
      
      <Footer />
    </>
  );

  // Reservation page with table component
  const ReservationPage = () => (
    <>
      <Navbar />
      <div className="pt-[10vh]">         
        <Table />
      </div>
      <Footer />
    </>
  );
const RegistrationPage = () => (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Existing/>
  </div>
  <Footer/>
  </>
)
const LoginPage = () =>(
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <New/>  
    </div>
  <Footer/>
  </>
)

const WinePage = ()=> (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Wines/>
  </div>
  </>
)
const Branched = () => (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Branches/>
  </div>
  </>
)
const Imgs = () => (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Photos/>
  </div>
  </>
)
const Stored = () => (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Story/>
  </div>
  </>
)
const Back = () => (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Background/>
  </div>
  </>
)
const MainShow = () => (
  <>
  <Navbar/>
  <div className='pt-[10vh]'>
    <Main/>
  </div>
  </>
)
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<ReservationPage />} />
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/wines" element={<WinePage/>}/>
          <Route path="/branches" element={<Branched/>}/>
          <Route path="/photos" element={<Imgs/>}/>
          <Route path="/story" element={<Stored/>}/>
          <Route path="/background" element={<Back/>}/>
          <Route path="/main" element={<MainShow/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App