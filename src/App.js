import './App.css';
import Navbar from './Components/Navbar';
import Grid from './Components/Grid';
import ControlPanel from './Components/ControlPanel';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className= 'mainbody'>
                <Grid></Grid>
                <ControlPanel></ControlPanel>
            </div>
        </div>
    );
}

export default App;
