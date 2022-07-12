import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
    {/* <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section> */}
    <article className="post featured">
      <header className="major">
        <span className="date"><DateComponent dateString={date} /></span>
        <h2><Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link></h2>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </header>
      <CoverImage title={title} slug={slug} url={coverImage.url} />
      <ul className="actions special">
        {/* <li><a href="#" className="button large">Full Story</a></li> */}
        <li><Link href={`/posts/${slug}`}><button>Full Story</button></Link></li>
      </ul>
      <div>
        {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
      </div>
    </article>
    </>
  //   <article className="post featured">
  //   <header className="major">
  //     <span className="date">April 25, 2017</span>
  //     <h2><a href="#">And this is a<br />
  //     massive headline</a></h2>
  //     <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
  //     facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
  //     amet nullam sed etiam veroeros.</p>
  //   </header>
  //   <a href="#" className="image main"><img src="images/pic01.jpg" alt="" /></a>
  //   <ul className="actions special">
  //     <li><a href="#" className="button large">Full Story</a></li>
  //   </ul>
  // </article>
  )
}
