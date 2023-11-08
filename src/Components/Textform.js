import React, {useState} from 'react'

export default function Textform(props) {
const handelButton = () => {
    let newtext= text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase","success");
}

const handelLoButton =() => {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase","success");
}
const handelCCButton = () =>{
  let newCol = '';
  setText(newCol);
  props.showAlert("Text Area Cleared","success");
}
const [myStyle , setMyStyle] = useState({
  color: 'black',
  backgroundColor: 'white'
} 
)

const [btnText, setBtnText] = useState('Enable dark Mode')

const handelDarkMode = () =>{
  if(myStyle.color === "white"){
    setMyStyle({
      color: 'black',
      backgroundColor: 'white'
    })
    setBtnText('Enable Dark Mode')
    props.showAlert("Light Mode Enabled","success");
  }
  else {
    setMyStyle({
      color: 'white',
      backgroundColor: 'black'
    })
    setBtnText('Enable Light Mode')
    props.showAlert("Dark Mode Enabled","success");
  }
}

const handelonchange = (event) => {
    console.log("On change")
    setText(event.target.value)
}



    const [text, setText] =useState('')
  return (
    <>
    <div>
        <h2>{props.heading}</h2>
        <div className="mb3"></div>
        <textarea className="form-control" style={myStyle} value={text} onChange={handelonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
        
    </div>
    <button className='btn btn-success mx-2 my-2' onClick={handelButton} >Convert to UpperCase </button>
    <button className='btn btn-success mx-2 my-2' onClick={handelLoButton} >Convert to Lowercase </button>
    <button className='btn btn-success mx-2 my-2' onClick={handelCCButton} >Clear</button>
    

    <div className="container my3">
    <p> Your text has {text.split(" ").length} words and {text.length} characters.</p>
    </div>
    <p>  {0.008 * text.split(" ").length}  minutes to read the paragraph.</p>
    <h2>Preview of the above text </h2>
    <p> {text.length>0?text:"Enter Something to Preview"} </p>

    <button className='btn btn-dark' onClick={handelDarkMode} >{btnText}</button>
    </>
  )
}
