
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  
  const [mode,setMode] = useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type

  })
  setTimeout(()=>{
    setAlert(null);
  },3000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title='TextUtils - DarkMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title='TextUtils - LightMode'
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
       {/* <About/> */}
       <div className="container my-3">
    
    
    </div>
    </>
  );
}

export default App;