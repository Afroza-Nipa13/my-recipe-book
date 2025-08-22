"use client"
import React from 'react'
import { signIn } from "next-auth/react"

export default function LoginButton() {
  return (
    <div>
        <button onClick={()=>signIn()} type="submit" className="btn">Log in</button>
    </div>
  )
}
