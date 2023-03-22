import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = ' ';
        setText(newText)
    }
    const handleCopy = ()=>{
    
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      
    }
    const handleExtraSpaces = ()=>{
    
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
      
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container " style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length } words and {text.length} letters</p>
            <p> {0.08*text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
           <p> {text.length>0?text:"Enter something in the textbox above to preview it here"} </p>
        </div>
        </>
    )
}