import Image from 'next/image'

const Header = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="title">
          <h2>Camping.</h2>
        </div>
        <div className="right-side">
          <ul>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
          <Image src="/img/search-logo.svg" alt="search" width={24} height={24} />
        </div>
      </header>
    </div>
  )
}

export default Header