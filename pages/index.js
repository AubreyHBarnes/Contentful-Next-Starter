import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>AHB's Dev Blog</title>
        </Head>
        <Intro />
        <Container>
          
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
      <script src="/js/jquery.min.js" defer></script>
      <script src="/js/jquery.scrollex.min.js" defer></script>
      <script src="/js/jquery.scrolly.min.js" defer></script>
      <script src="/js/browser.min.js" defer></script>
      <script src="/js/breakpoints.min.js" defer></script>
      <script src="/js/util.js" defer></script>
      <script src="/js/main.js" defer></script>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
