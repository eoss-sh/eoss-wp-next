import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './Header/header'

const jb = JetBrains_Mono({
    subsets: ['latin'],
    weight: '100',
    display: 'swap',
    variable: '--font-jb',
})
const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-hanken',
})

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div
                className={`${jb.variable} ${hanken.variable} min-h-screen font-sans`}
            >
                <Alert preview={preview} />
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
