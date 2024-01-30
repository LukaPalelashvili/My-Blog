import React from 'react'

const Header = () => {
  return (
    <header className="header-section">
  <div className="header-wrap global-padding">
    <div className="header-logo">
      <a href="https://basho-dark.fueko.net" className="is-logo">
        <img
          src="https://basho-dark.fueko.net/content/images/2022/03/basho_light.svg"
          alt="Basho home"
        />
      </a>
    </div>
    <div className="header-nav is-button-accent-color">
      <span className="header-search search-open is-mobile">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" />
        </svg>
      </span>
      <input id="toggle" className="header-checkbox" type="checkbox" />
      <label className="header-toggle" htmlFor="toggle">
        <span>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      </label>
      <nav>
        <ul>
          <li>
            <a href="https://basho.fueko.net/demos/">Demos</a>
          </li>
          <li>
            <a href="https://basho-dark.fueko.net/style-guide/">Style Guide</a>
          </li>
          <li>
            <a href="https://basho-dark.fueko.net/membership/">Membership</a>
          </li>
          <li className="is-dropdown">
            <span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.974 18.908.019.002.025.001c.085 0 .166-.034.226-.094L23.906 7.155A.32.32 0 0 0 24 6.928c0-.085-.034-.166-.094-.227l-1.519-1.518a.3217.3217 0 0 0-.454 0l-9.94 9.94-9.927-9.926a.3218.3218 0 0 0-.227-.094c-.085 0-.167.034-.227.094L.094 6.716a.3217.3217 0 0 0 0 .454l11.647 11.647c.06.06.142.094.227.094l.006-.003Z" />
              </svg>
            </span>
            <ul>
              <li>
                <a href="https://basho-dark.fueko.net/features/">Features</a>
              </li>
              <li>
                <a href="https://basho-dark.fueko.net/tags/">Tags</a>
              </li>
              <li>
                <a href="https://basho-dark.fueko.net/authors/">Authors</a>
              </li>
              <li>
                <a href="https://basho-dark.fueko.net/subscribe/">Subscribe</a>
              </li>
              <li>
                <a href="https://basho-dark.fueko.net/contact/">Contact</a>
              </li>
              <li>
                <a href="https://themeforest.net/item/basho-multipurpose-ghost-blog-theme/36746216">
                  Get Theme
                </a>
              </li>
            </ul>
          </li>
          <li className="header-search search-open is-desktop global-button">
            <span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" />
              </svg>
              Search
            </span>
          </li>
          <li className="signup">
            <a
              href="https://basho-dark.fueko.net/signup/"
              className="global-button"
            >
              Join
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  )
}

export default Header