import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hamburger from './hamburger'
import logo from '../../public/logo_white.svg'

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { label: 'Home', uri: '/', id: 1 },
        { label: 'About', uri: '/about', id: 2 },
        { label: 'Contact', uri: '/contact', id: 3 },
    ]

    return (
        <header className="font-mono bg-primary pt-4 pb-4">
            <div className="flex flex-row items-center justify-between container mx-auto">
                <Link href="/">
                    <Image src={logo} width={100} height={50} alt="Logo" />
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className="mr-8 last:mr-0 text-l text-white hover:text-secondary transition"
                            >
                                <Link href={item.uri}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="block md:hidden">
                    <Hamburger open={isOpen} handleIsOpen={handleIsOpen} />
                    <ul
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } flex flex-col`}
                    >
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className="mr-8 last:mr-0 text-l text-white hover:text-secondary transition"
                            >
                                <Link href={item.uri}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
