import ContentfulImage from './contentful-image'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={1195}
      height={728}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  )

  return (
    <div className="post-hero-img">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a className="image main" aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
