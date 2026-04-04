import React from 'react'

const Button = ({type,isi,className,children, onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick} onMouseEnter={onmouseenter}>{isi||children}</button>
  )
}

export default Button