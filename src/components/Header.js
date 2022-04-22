import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto text-center">
                  <li className="nav-item active">
                      <a className="nav-link" href="/">Home</a>
                  </li>
              </ul>
          </div>
          <a className="navbar-brand" href="/"><>Play2Learn</></a>
      </nav>
    </header>
  )
}

export default Header;