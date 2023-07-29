import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };

  const handleClearClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text cleared", "success")
  };

  const handleCopyClick = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success")
  };

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text"); //to update use setText function
  //setText("new text")
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'#042743'}}
            id="MyBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
