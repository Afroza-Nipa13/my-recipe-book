import Link from 'next/link'
import React from 'react'

export default function blogPage() {
  return (
    <div>
        <h1>
        Blog page
        </h1>
        <Link href='/details'>
        <button className='btn btn-outline'>details</button>
        </Link>
        </div>
  )
}
