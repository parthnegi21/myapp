import React,{useState} from 'react'

export default function TextForm(props) {
    const pressed=()=>{
        alert("button is clicked")
        let newtext=text.toUpperCase()
        setText(newtext)
        
    }
    const change=(event)=>{
        
        setText(event.target.value)
        }
    const[text,setText] = useState('Enter text here')
   
  return (
    
      <>
    <h1>{props.heading}</h1>
    <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={change} id="exampleFormControlTextarea1" rows="3"></textarea>
 <button className='btn btn-primary' onClick={pressed} >press the button</button>
</div>
    </>
    
  )
}

