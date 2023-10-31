import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { getAllPostsForHome, getNavItems } from '../lib/api'
import { ThemeColors } from '../components/coloredBackground'
import { IconName } from '../components/icon'

export default function Index({ preview, menuItems }) {
    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Hero
                title="Wir schaffen Digitales, das Nutzer und Suchmaschinen begeistert."
                color={ThemeColors.primary}
                icon={IconName.wow}
            />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getAllPostsForHome(preview)
    const menuItems = await getNavItems()

    return {
        props: {
            allPosts,
            preview,
            menuItems,
        },
        revalidate: 10,
    }
}
