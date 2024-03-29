
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Process from './Components/Process';
import Port from './Components/Port';
function App() {
  return (
    <div>
     <Navbar/>
     <About/>
     <Process/>
     <div className="container mx-auto">
      <Port
        image="https://picsum.photos/id/237/200/300"
        title="Card Title"
        description="This is a description of the card content."
        ctaText="Learn More"
        ctaLink="https://www.example.com"
      />
    </div>
    </div>
  );
}

export default App;
