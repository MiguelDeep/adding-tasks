import React, { ComponentProps } from 'react'


interface TextareaProps extends ComponentProps<'textarea'>{}
export default function Textarea({...props}:TextareaProps) {
  return (
    <textarea {...props} name="" id="" className="outline-none resize-none w-[65%] text-black h-56 rounded-lg p-4 placeholder:text-black" />
  )
}
