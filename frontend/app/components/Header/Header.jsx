import React from 'react'
import Container from '../Container/Container'
import Link from 'next/link'
import MenuList from './MenuList'

export default function Header() {
  return (
    <header className="">
        <Container className="bg-red-500">
            <nav className="">
                <menu className="flex gap-6 items-center ">
                    {MenuList.map((menuItem) => (
                        <li key={menuItem.id} className='inline-flex '>
                            <Link href={menuItem.url} className='text-base text-gray-900'>
                                {menuItem.title}
                            </Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </Container>
    </header>
  )
}
