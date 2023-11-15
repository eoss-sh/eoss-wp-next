import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Hero from '../components/hero'
import { renderPost, getNavItems } from '../lib/api'
import { ThemeColors } from '../components/coloredBackground'
import { IconName } from '../components/icon'

export default function Index({ preview, menuItems, blocks, postTitle }) {
    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Hero
                title="Wir schaffen Digitales, das Nutzer und Suchmaschinen begeistert."
                color={ThemeColors.primary}
                icon={IconName.wow}
            >
                Entwicklung, die überzeugt. Design, das fesselt. Content, der
                berührt. SEO-Optimierung, die Ergebnisse liefert - aus einer
                Hand.
                <h1>{postTitle}</h1>
            </Hero>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const menuItems = await getNavItems()

    const { blocks, postTitle } = await renderPost(
        'https://eossdev.wpengine.com',
        10
    )

    return {
        props: {
            menuItems,
            blocks,
            postTitle,
        },
        revalidate: 10,
    }
}
