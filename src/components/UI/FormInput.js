import React from 'react'
import '../UI/FormInput.css'

const FormInput = (props) => {
  return (
    <div className='input'>
        <label htmlFor={props.id}>{props.label}</label>
        <input {...props.input}/>
    </div>
  )
}

export default FormInput