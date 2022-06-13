import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (

    <>
      <div id="intro">
        <h1>This is<br />
        Massively</h1>
        <p>A free, fully responsive HTML5 + CSS3 site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a><br />
        and released for free under the <a href="https://html5up.net/license">Creative Commons license</a>.</p>
        <ul className="actions">
          <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>
    </>
    
  )
}
