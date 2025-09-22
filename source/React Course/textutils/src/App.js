import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import Textform from './components/Textform';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="AboutText"/>
    <div className="container my-3">
    {/* <Textform heading = "Enter the text to analyze below"/> */}
    <About/>
    </div>
    </>
  );
}

export default App;
