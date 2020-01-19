import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Bebas Neue, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-evenly`,
            marginBottom: `20px`,
          }}
        >
          <div><a href="https://twitter.com/laughnan">Twitter</a></div>
          <div><a href="https://www.linkedin.com/in/alexlaughnan/">LinkedIn</a></div>
          <div><a href="https://github.com/laughnan">Github</a></div>
          <div><a href="https://www.drupal.org/u/laughnan">Drupal.org</a></div>
        </div>
        <footer>
          © {new Date().getFullYear()}, built with
          {` `}
          <a href="https://www.gatsbyjs.org">gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
