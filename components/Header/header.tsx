import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hamburger from './hamburger'
import logo from '../../public/logo_white.svg'

export default function Header({ menuItems }) {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="font-mono bg-primary py-8">
            <div className="flex flex-row items-center justify-between max-w-screen-xl mx-auto px-5 md:px-0">
                <Link href="/">
                    <Image src={logo} width={100} height={50} alt="Logo" />
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex">
                        {menuItems.map((item: any) => (
                            <li
                                key={item.node.id}
                                className="mr-8 last:mr-0 text-sm text-white hover:text-secondary transition"
                            >
                                <Link href={item.node.path}>
                                    {item.node.label}
                                </Link>
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
                        {menuItems.map((item: any) => (
                            <li
                                key={item.node.id}
                                className="mr-8 last:mr-0 text-l text-white hover:text-secondary transition"
                            >
                                <Link href={item.node.path}>
                                    {item.node.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
