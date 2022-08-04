import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (

    <>
      <div id="intro">
        <h1>Aubrey's Dev Blog</h1>
        <p>The best way to understand something, is to explain it to someone else.
          I'll be writing about my thought process and approach to solving issues I 
          run into in development, maybe we'll learn something together!
        </p>
        <ul className="actions">
          <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>
    </>
    
  )
}
