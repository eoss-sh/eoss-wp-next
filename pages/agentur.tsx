import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/Layout'
import { BlockRenderer } from '../components/BlockRenderer'
import { renderPost, getNavItems } from '../lib/api'
import { cleanAndTransformBlocks } from '../utils/cleanAndTransformBlock'

export default function Agentur({
    preview,
    menuItems,
    cleanBlocks,
    postTitle,
}) {
    console.log(cleanBlocks, postTitle)
    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Container>
                <h1>{postTitle}</h1>
                <BlockRenderer blocks={cleanBlocks} />
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
    const cleanBlocks = cleanAndTransformBlocks(blocks)
    return {
        props: {
            postTitle,
            menuItems,
            cleanBlocks,
        },
        revalidate: 10,
    }
}
