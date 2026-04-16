import React from 'react'

function Input({name,placeholder,type,className, value, onChange}) {
  return (
      <input value={value} onChange={e => onChange(e.target.value)} type={type} name={name} id="" placeholder={placeholder} className={className}/>
  )
}

export default Input