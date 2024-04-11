
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Process from './Components/Process';
import Port from './Components/Port';
import Service from './Components/Service';
import Contact from './Components/Conact';
function App() {
  return (
    <div>
     <Navbar/>
     <About/>
     <Process/>
     <div className=''>
      <Port  />
      </div>
      <br></br>
      <br></br><br></br>
      <br></br>
      <Service/>
      <br></br>
      <br></br>
      <Contact/>
    </div>
  );
}

export default App;
