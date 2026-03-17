import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
// import Projects from './components/Projects';
// import './Styles/global.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
