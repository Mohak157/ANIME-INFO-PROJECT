import React from 'react'

const Button = ({title,id,containerClass}) => {
  return (
    
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClass}`}>
      
    
        <div className="relative hover:text-white inline-flex items-center overflow-hidden font-general  uppercase ">
            {title}
            
        </div>
    
      
    </button>
  )
}

export default Button