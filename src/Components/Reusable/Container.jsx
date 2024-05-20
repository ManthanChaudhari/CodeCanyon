import React from 'react'

function Container({children , className}) {
  return (
    <div className={`w-full px-4 lg:px-32 box-border ${className}`}>
      {children}
    </div>
  )
}

export default Container
