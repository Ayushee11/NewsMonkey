import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked"+text)
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to upper case","success")
  };
  const handleLowerClick = () => {
    //  console.log("Uppercase was clicked"+text)
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to lower case","success")

  };
  const handleClearClick = () => {
    //  console.log("Uppercase was clicked"+text)
    let newText = "";

    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{
return element.length!==0
          }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{
return element.length!==0
          }).length} Minutes read</p>
        <h2>Preview</h2>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
         Clear Text
        </button>
        <p>{text}</p>
      </div>
    </>
  );
}
