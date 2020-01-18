import React, { ComponentType, PropsWithChildren } from "react"
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import cn from "classnames"
import { Subtract } from "utility-types/dist/mapped-types"

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

const Header = () => (
  <header>
    <Logo />
  </header>
)

const Footer = () => (
  <footer className="text-center m-6">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

const Container = (props: PropsWithChildren<{ className?: string }>) => (
  <div
    {...props}
    className={cn("flex-1 mx-auto px-4 max-w-5xl", props.className)}
  />
)

const Layout = (props: PropsWithChildren<{}>) => (
  <div className="min-h-screen flex flex-col">
    <Container>
      <Header />
      <main>{props.children}</main>
    </Container>
    <Footer />
  </div>
)

export default Layout
