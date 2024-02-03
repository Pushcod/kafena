import React from 'react'
import Container from '../Container/Container'
import Link from 'next/link'
import MenuList from './MenuList'

//import icons
import { FaBars, FaSearch } from "react-icons/fa";

export default function Header() {
    return (
      <header className="py-12 w-full ">
          <Container>
              <nav className="w-full flex items-center justify-between gap-x-16">
                  <menu className="w-full flex items-center justify-between">
                      {MenuList.map((menuItem) => (
                          <li key={menuItem.id} className="inline-flex">
                              {menuItem.isImage ? (
                                  <Link href={menuItem.url} className="text-base text-gray-900 px-32">
                                      <img src={menuItem.src} alt="" width={65} height={53}/>
                                  </Link>
                              ) : (
                                  <Link href={menuItem.url} className=' text-base text-gray-900 hover:text-yellow-500 transition-colors duration-200'>{menuItem.title}</Link>
                              )}
                          </li>
                      ))}
                  </menu>
                  <ul className="flex items-center gap-16">
                    <li>
                        <button>
                            <FaSearch />
                        </button>
                    </li>
                    <li>
                        <button>
                            <FaBars />
                        </button>
                    </li>
                  </ul>
              </nav>
          </Container>
      </header>
    )
  }