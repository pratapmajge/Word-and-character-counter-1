import React, {useState} from 'react'

export default function TextForm(props) 
{
    const handleupClick = ()=>{
        // console.log("Uppercase has clicked : "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = ()=>{
      // console.log("Lowercase has clicked : "+ text);
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleOnChange = (event)=>{
      // console.log("On change");
      setText(event.target.value);
  }

    const handleclClick = ()=>{
      let newText='';
      setText(newText);
    }

    const handlecopy = () =>{
      let newText = document.getElementById('mybox');
      newText.select();
      navigator.clipboard.writeText(newText.value);

    }

    
  const [text , setText] =useState("");
     // text="hii"; // can't change text like this
     // setText=(new text); //correct way 
  return (
    <>
    <div>
        <h2>{props.heading}</h2>
         <div className="mb-3">
            {/* <label for="mybox" class="form-label"></label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
         </div>
          {/* <btn-primary>Click to convert Uppercase</btn-primary> */}
          <button className='btn btn-primary mx-2' onClick={handleupClick}>Convert Uppercase</button>
          <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert Lowercasse</button>
          <button className='btn btn-primary mx-2' onClick={handleclClick}>Clear text</button>
          <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy text</button>


    </div>

    <div className="container my-3">
      <h2>Your text summery</h2>
      <b> {text.split(" ").length} Words and {text.length} Characters</b> 
      <p>{0.008 * text.split(" ").length} Minutes to read </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
