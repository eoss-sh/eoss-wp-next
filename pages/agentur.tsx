import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { BlockRenderer } from '../components/BlockRenderer'
import { renderPost, getNavItems } from '../lib/api'

export default function Agentur({ preview, menuItems, blocks, postTitle }) {
    console.log(blocks, postTitle)
    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Container>
                <h1>{postTitle}</h1>
                <BlockRenderer blocks={blocks} />
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const menuItems = await getNavItems()

    const { blocks, postTitle } = await renderPost(
        'https://eossdev.wpengine.com/wp-json/',
        10
    )
    return {
        props: {
            postTitle,
            menuItems,
            blocks,
        },
        revalidate: 10,
    }
}
