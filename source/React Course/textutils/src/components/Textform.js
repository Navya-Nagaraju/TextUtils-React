import React, {useState} from 'react';

export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handleLwClick = ()=>{
    //console.log("lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
   const handleOnChange = (event)=>{
    //console.log("On Change")
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here')
  return (
    <>
    <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLwClick} >Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

    )
}
