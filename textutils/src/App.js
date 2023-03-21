
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
        <Navbar title="TextUtils  " aboutText="Description about text"/>
       {/* <TextForm heading="Enter text to analyze"/> */}
       <About/>

    </>
  );
}

export default App;
