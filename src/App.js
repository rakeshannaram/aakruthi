import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import About from './About'
// import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
        <Router>
            <Navbar/>
            <Routes>
                {/* <Route exact path="/about" element={<About />}>
                
                </Route>
                <Route exact path="/contact" element={<Contact />}>
                
                </Route> */}
                <Route exact path="/" element={<Home />}>
                
                </Route>
                
            </Routes>
            
        </Router>
  );
}

export default App;
