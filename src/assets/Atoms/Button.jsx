import React from 'react'

const Button = ({type,isi,className,children}) => {
  return (
    <button type={type} className={className}>{isi||children}</button>
  )
}

export default Button