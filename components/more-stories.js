import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="posts">
    
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            // author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}

    </section>
  )
}
