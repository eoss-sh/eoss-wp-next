import {
    Hanken_Grotesk,
    JetBrains_Mono,
    Krona_One,
    Space_Grotesk,
} from 'next/font/google'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './Header/header'

const jb = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jb',
})
const hanken = Krona_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-hanken',
})

export default function Layout({ preview, children, menuItems }) {
    return (
        <>
            <Meta />
            <div
                className={`${jb.variable} ${hanken.variable} min-h-screen font-sans`}
            >
                <Alert preview={preview} />
                <Header menuItems={menuItems} />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
