import Container from './container'
import Pagination from './pagination'
import Contact from './contact'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <Pagination />
        <footer id='footer'>
          <Contact />
        </footer>
      </Container>
    </footer>
  )
}
