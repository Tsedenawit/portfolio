
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
      <Port 
      img="../images/project.jpg" 
      name="Bus ticket reservation" 
      par="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan enim a consectetur 
      aliquam. Proin at ligula sed dolor pellentesque malesuada." />
      <Port 
      img="../images/project.jpg" 
      name="Bus ticket reservation" 
      par="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan enim a consectetur 
      aliquam. Proin at ligula sed dolor pellentesque malesuada." />
      <Port 
      img="../images/project.jpg" 
      name="Bus ticket reservation" 
      par="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan enim a consectetur 
      aliquam. Proin at ligula sed dolor pellentesque malesuada." />
      <Service/>
      <br></br>
      <br></br>
      <Contact/>
    </div>
  );
}

export default App;
