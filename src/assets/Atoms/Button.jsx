import React from 'react'

const Button = ({type,isi,className,children, onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{isi||children}</button>
  )
}

export default Button