import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Simulator from './Components/Simulator';
import HomePage from './Components/HomePage';
import Documentation from './Components/Documentation';
import ContactMe from './Components/ContactMe';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/simulator" element={<Simulator/>}/>
                    <Route path="/documentation" element={<Documentation/>}/>
                    <Route path="/contact-me" element={<ContactMe/>}/>
                </Routes>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
