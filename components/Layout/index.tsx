import {
    Hanken_Grotesk,
    JetBrains_Mono,
    Krona_One,
    Space_Grotesk,
} from 'next/font/google'
import Alert from '../alert'
import Footer from '../footer'
import Meta from '../meta'
import Header from '../Header/header'

const space = Space_Grotesk({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
})
const krona = Krona_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-krona-one',
})

export default function Layout({ preview, children, menuItems }) {
    return (
        <>
            <Meta />
            <div
                className={`${space.variable} ${krona.variable} min-h-screen font-space bg-light`}
            >
                <Alert preview={preview} />
                <Header menuItems={menuItems} />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
