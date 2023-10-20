import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getNavItems } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Blog({ allPosts: { edges }, preview, menuItems }) {
    const heroPost = edges[0]?.node
    const morePosts = edges.slice(1)

    return (
        <Layout preview={preview} menuItems={menuItems}>
            <Head>
                <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
            </Head>
            <Container>
                <Intro />
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.featuredImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
