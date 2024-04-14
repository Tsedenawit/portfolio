
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Process from './Components/Process';
import Port from './Components/Port';
import Service from './Components/Service';
import Contact from './Components/Conact';
function App() {
  const parts =[{
    Id:1,
  img:"../images/project.jpg" ,
  name:"Bus ticket reservation" ,
  par:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis accumsan enim a consectetur aliquam.Proin at ligula sed dolor pellentesque malesuada."
  },
  {
    Id:2,
    img:"../images/project.jpg" ,
    name:"Bus ticket reservation" ,
    par:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis accumsan enim a consectetur aliquam.Proin at ligula sed dolor pellentesque malesuada."
    },
    {
      Id:3,
      img:"../images/project.jpg" ,
      name:"Bus ticket reservation" ,
      par:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis accumsan enim a consectetur aliquam.Proin at ligula sed dolor pellentesque malesuada."
      }]
  return (
    <div>
     <Navbar/>
     <About/>
     <Process/>
     <div className=''>
     {parts.map((part)=>{
    <Port Id={part.Id} img={part.img} name={part.name} par={part.par}/>
     })
     } 
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
