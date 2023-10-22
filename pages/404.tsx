import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsForHome, getNavItems } from '../lib/api'

export default function Index({ preview, menuItems }) {
    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Container>
                <h1>😵</h1>
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
