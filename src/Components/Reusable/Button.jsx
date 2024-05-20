import React from 'react'

function Button({children , className = ""}) {
  return (
    <button className={`transition-all ${className}`}>
      {children}
    </button>
  )
}

export default Button
