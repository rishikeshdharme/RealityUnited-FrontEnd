import Header from './component/Header/Header.jsx'
import Hero from './component/Hero/Hero';
import "./App.css"
import Companies from './component/Companies/Companies.jsx';
import Recedencies from './component/Residencies/Residencies.jsx';
import Value from './component/Value/Value.jsx';
import Contact from './component/Contact/Contact.jsx';
import GetStarted from './component/GetStarted/GetStarted.jsx';
import Footer from './component/Footer/Footer.jsx';
function App() {
  return (
  <div className="App">
    <div>
      <div className='white-gradient'/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Recedencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
  </div>
  );
}

export default App;
