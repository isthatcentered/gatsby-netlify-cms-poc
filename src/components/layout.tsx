import React, { PropsWithChildren } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import cn from "classnames"
import {
  Col,
  Container,
  Media,
  Row,
  StyleProps,
  StylePropsWithChildren,
} from "./grid"
import { GetSiteTitle } from "./__generated__/GetSiteTitle"

const Logo = (props: StyleProps) => (
  <StaticQuery<GetSiteTitle>
    query={graphql`
      query GetSiteTitle {
        site {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Link
        to="/"
        {...props}
        className={cn("block", props.className)}
        title="Accueil"
      >
        <Media>
          <img
            alt="Photo de Jean Jacques Penin, psychologue du travail sur Angers et Saint Melaine sur Aubance"
            className="self-center mr-4 w-10 h-10 object-cover rounded-full"
            src="jean-jacques-penin-psychologue-sur-angers-visage.png"
          />
          <Media.Body className="self-center">
            <span className="text-sm font-bold">Jean-Jacques Penin</span>
          </Media.Body>
        </Media>
      </Link>
    )}
  />
)

export const Navbar = (props: StylePropsWithChildren<{}>) => (
  <div
    {...props}
    className={cn(
      props.className,
      "Navbar px-16 py-8 flex items-center justify-center"
    )}
  >
    <button className="">Menu</button>
    <Logo className="mx-auto" />
    <Link to="/contact">Tarifs & Contact</Link>
  </div>
)

const Header = () => (
  <header>
    <Navbar />
  </header>
)

const footerLinks = [
  { label: "", path: "" },
  { label: "Accueil", path: "/" },
  { label: "Mal être", path: "/" },
  { label: "Santé au travail", path: "/" },
  { label: "Épreuves de la vie", path: "/" },
  { label: "EFT/PNL/Coaching", path: "/" },
  { label: "Votre psychologue", path: "/" },
]

const Footer = () => (
  <footer>
    <h2 className="sr-only">Informations complémentaires</h2>
    <Container>
      {/*<Row>*/}
      {/*  <Col className="w-full pt-8 text-center">*/}
      {/*    <Link to="/">Poser une question</Link>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      <Row className="pt-16 pb-4">
        <Col className="w-1/4">
          <h3 className="font-bold mb-4 text-xl">Contact</h3>
          <p className="mb-4">
            <span className="font-bold">Tel:</span> 06 52 38 21 73
          </p>
          <p className="mb-4">
            <span className="font-bold">Email:</span>{" "}
            <a
              className="text-blue-700 underline"
              href="mailto:jjpenin@hotmail.fr"
            >
              jjpenin@hotmail.fr
            </a>
          </p>
          <p className="mb-4">
            <span className="font-bold">Angers:</span> 8 ter, rue Béclard
          </p>
          <p className="mb-2">
            <span className="font-bold">Saint Melaine/Aubance:</span> 8 rue des
            prés hauts
          </p>
        </Col>
        <Col className="w-1/4">
          <h3 className="font-bold mb-4 text-xl">Tarifs</h3>
          <p className="mb-8">60€ par séance</p>
        </Col>
        <Col className="w-1/4">
          <h3 className="font-bold mb-4 text-xl">Horaires</h3>
          <p className="mb-4">
            <span className="font-bold">Lundi - Vendredi:</span> 08h - 20h
          </p>
          <p className="mb-4">
            <span className="font-bold">Samedi:</span> 08h - 13h
          </p>
        </Col>
        <Col className="w-1/4">
          <h3 className="font-bold mb-4 text-xl">Liens utiles</h3>
          <ul>
            {footerLinks.map(link => (
              <li key={link.label}>
                <Link
                  className="text-blue-600 underline mb-4 block"
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
    <Container className="bg-gray-100">
      <Row>
        <Col className="w-full p-4">
          <p className="text-center text-xs text-gray-600">
            © Jean Jacques Penin, Psychologue sur Angers et Saint Melaine sur
            Aubance
          </p>
        </Col>
      </Row>
    </Container>
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
