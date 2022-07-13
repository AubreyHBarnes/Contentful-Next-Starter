import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="x">
        {/* <Alert preview={preview} /> */}
        <div id="wrapper" className="fade-in">
          <main>{children}</main>
          <div className="bg fixed" style={{transform : 'none'}}></div>
        </div>
      </div>
      <Footer />
    </>
  )
}
