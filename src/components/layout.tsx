import React, { PropsWithChildren, useEffect } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { Container, StylePropsWithChildren } from "../pages"
import cn from "classnames"
const _Logo = (props: PropsWithChildren<{}>) => (
  <Link
    style={{
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
    }}
    to="/"
    children={props.children}
  />
)

const Logo = () => (
  <StaticQuery
    query={graphql`
      query GetSiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <_Logo children={data.site.siteMetadata.title} />}
  />
)

export const Navbar = (props: StylePropsWithChildren<{}>) => (
  <div
    {...props}
    className={cn(props.className, "Navbar px-16 h-32 flex items-center")}
  >
    <button className="text-2xl font-serif">Menu</button>
    {/*<Logo />*/}
  </div>
)

const Header = () => (
  <header>
    <Navbar />
  </header>
)

const Footer = () => (
  <footer className="text-center m-6">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

const Layout = (props: PropsWithChildren<{}>) => {
  if (typeof window !== "undefined") require("smooth-scroll")('a[href*="#"]')

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
