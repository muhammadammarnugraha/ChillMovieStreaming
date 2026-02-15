import React from 'react'

function Input({name,placeholder,type,className}) {
  return (
      <input type={type} name={name} id="" placeholder={placeholder} className={className}/>
  )
}

export default Input