import React, { ComponentProps } from 'react'


interface ButtonProps extends ComponentProps<'button'>{

}

export default function Button({...props} : ButtonProps) {
  return (
    <button {...props} className='w-full h-12 bg-blue-500 text-white  rounded-lg size-20' />
  )
}
