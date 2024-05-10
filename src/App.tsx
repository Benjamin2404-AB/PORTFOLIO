import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Components/NavBar'
import Home from './Components/Home';
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

function App() {
 
  return(
    <div className="App">
      
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>
      </Router>
     
      
      
      
    </div>

  ) ;

}

export default App
