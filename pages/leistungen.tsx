import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/Layout'
import { getAllPostsForHome, getNavItems } from '../lib/api'

export default function Leistungen({ preview, menuItems }) {
    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Container>
                <h1>Hello World - Leistungen</h1>
            </Container>
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
