"use client"
import React, { ComponentProps } from 'react'
import ImageWork from '../ImageWork/ImageWork'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, useAuth, useClerk, UserButton } from "@clerk/nextjs"


interface HeaderProps extends ComponentProps<'header'> {

}

export default function Header({ ...props }: HeaderProps) {
  const { isSignedIn } = useAuth()
  return (
    <header {...props} className="w-full bg-black ">
      <div className="flex justify-between p-5 ">
        <div className='flex'>
          <Link href={"/"}>
            <ImageWork />
          </Link>

          {
            isSignedIn && (
              <Link href={"/dashboard"} className='p-2 text-center font-bold text-white bg-black border w-48 h-10 rounded-md hover:text-black hover:bg-white hover:transition hover:ease-in hover:duration-700'>Meu Painel</Link>
            ) 
          }

        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
            <button
              className=" p-2 text-center font-bold text-white bg-black border w-48 h-10 rounded-md hover:text-black hover:bg-white hover:transition hover:ease-in hover:duration-700"
            >
              Acessar
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  )
}
/*

  {
      status==="loading" ? (
          <></>
      ): session ? (
        <button 
        onClick={()=> signOut()}
        className="border rounded-3xl p-3 w-44 text-white hover:transition hover:ease-in hover:duration-700 hover:bg-white hover:text-black">
          Ola {session.user?.image}
        </button>
      ):(
        <button
        onClick={()=> signIn("google",{callbackUrl:"/dashboard"})}
        className="border rounded-3xl p-3 w-44 text-white hover:transition hover:ease-in hover:duration-700 hover:bg-white hover:text-black">Acessar</button>
      )
    }


*/