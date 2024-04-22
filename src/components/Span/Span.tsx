import React, { ComponentElement, ComponentProps, ComponentType } from 'react'

interface ButtonPros extends ComponentProps<'span'>{

}

export default function Span({...props}:ButtonPros) {
  return (
    <span {...props} className=" p-2 text-center font-bold text-black bg-white border w-48 h-10 rounded-md hover:text-white hover:bg-black hover:transition hover:ease-in hover:duration-700" />
  )
}
