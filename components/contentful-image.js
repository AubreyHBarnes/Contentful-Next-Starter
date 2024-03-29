import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props) => {
  return (<div style={{position: 'relative', aspectRatio: '16/9'}}><Image loader={contentfulLoader} {...props} /></div>);
}

export default ContentfulImage
