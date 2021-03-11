import React, { useState, useEffect } from "react";
import '../styles/textarea.scss'

export default function Textarea() {

  /*const [addText, setAddText] = useState(false)
  const toggleText = () => {
    setAddText(!addText)
  }*/

  const [text, setText] = useState('')

  const saveText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  
  const [printedText, setPrintedText] = useState<string[]>([])
  const print = () => {
    setPrintedText([...printedText, text]) //save multiple elements in array
  }

  return (
    <div className='textareaGrid'>
      <h3>Add text</h3>
      <div>
        <textarea value={text} rows={4} cols={50} onChange={saveText}></textarea>
        <div onClick={print}>Enter</div>
        <div> { printedText.map(el=> <p>{el}</p>) } </div>
      </div> 
      {/*<div onClick={toggleText}><h3>Add text</h3></div>*/}
    </div>
  )
}