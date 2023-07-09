import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <main>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        

    </main>
  )
}

export default App