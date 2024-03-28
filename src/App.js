
import './App.css';
import { CreateForm } from './Components/CreateForm';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { ReadData } from './Components/ReadData';
import { Dummyapp } from './Components/dummyapp';
import { Update } from './Components/Update';
function App() {
  return (
    <div className="App">
     
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element= {<CreateForm/>}/>
        <Route path='/read' element= {<ReadData/>}/>
        <Route path='/update/:id' element= {<Update/>}/>
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
