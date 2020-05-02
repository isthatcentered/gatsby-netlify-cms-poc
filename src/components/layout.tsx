import React, { PropsWithChildren, useEffect, useRef, useState } from "react"
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
import CaptureOutsideClick from "./capture-outside-click"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure"
import { IconClose } from "./icons"

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
    render={(data) => (
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
            src="/images/jean-jacques-penin-psychologue-sur-angers-visage.png"
          />
          <Media.Body className="self-center">
            <span className="text-sm font-bold">Jean-Jacques Penin</span>
          </Media.Body>
        </Media>
      </Link>
    )}
  />
)

const Drawer = (
  props: StylePropsWithChildren<{ opened: boolean; onClose: () => void }>
) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (props.opened && ref.current) ref.current.focus()
  }, [ref, props.opened])

  return (
    <DisclosurePanel
      style={{ ...props.style, width: 300 }}
      className={cn(
        props.className,
        "Drawer fixed inset-y-0 left-0 bg-white shadow-lg z-20"
      )}
    >
      <CaptureOutsideClick
        onClickOutside={props.onClose}
        className="p-4 h-full"
      >
        <div className="mb-4 text-right">
          <DisclosureButton ref={ref}>
            <span className="sr-only">Fermer le menu</span>
            <IconClose className="w-4 h-4" />
          </DisclosureButton>
        </div>
        {props.children}
      </CaptureOutsideClick>
    </DisclosurePanel>
  )
}
const drawerNav = [
  {
    label: "Accès rapide",
    items: [
      {
        title: "Accueil",
        slug: "/",
      },
      {
        title: "Tarifs & Contact",
        slug: "/contact",
      },
      {
        title: "Prendre rendez-vous",
        slug: "/contact",
      },
    ],
  },
  {
    label: "Pourquoi consulter",
    items: [
      {
        title: "Epreuves de la vie",
        slug: "/epreuves-de-la-vie",
      },
      {
        title: "Souffrance au travail",
        slug: "/souffrance-au-travail",
      },
      {
        title: "Mal être",
        slug: "/mal-etre",
      },
    ],
  },
  {
    label: "Réponses à vos questions",
    items: [
      {
        title: "EFT, PNL, Coaching ?",
        slug: "/eft-pnl-et-coaching",
      },
      {
        title: "Votre psychologue",
        slug: "/votre-psychologue",
      },
    ],
  },
  {
    label: "Découvrir",
    items: [
      {
        title: "Blog",
        slug: "/blog",
      },
    ],
  },
]

const NavDrawerMenu = (props: StyleProps<{ sections: typeof drawerNav }>) => (
  <nav
    aria-labelledby="main-nav-header"
    className={props.className}
    style={props.style}
  >
    <h2 id="main-nav-header" className="sr-only">
      Navigation principale
    </h2>
    <ul>
      {props.sections.map((section) => (
        <li className="mb-8" key={section.label}>
          <h3 className="text-gray-600 text-sm px-2">{section.label}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.title}>
                <Link
                  className="block p-2 text-xl hover:bg-gray-100"
                  to={item.slug}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </nav>
)

export const Navbar = (props: StyleProps) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  return (
    <Disclosure
      open={isNavOpen}
      onChange={() => setIsNavOpen((state) => !state)}
    >
      <Drawer
        opened={isNavOpen}
        onClose={() => isNavOpen && setIsNavOpen(false)}
      >
        <NavDrawerMenu sections={drawerNav} />
      </Drawer>
      <div
        style={props.style}
        className={cn(
          props.className,
          "Navbar py-4 px-4 flex items-center justify-center"
        )}
      >
        <DisclosureButton>Menu</DisclosureButton>
        <Logo className="mx-auto" />
        <Link to="/contact">Tarifs & Contact</Link>
      </div>
    </Disclosure>
  )
}

const Header = (props: StyleProps) => (
  <header {...props}>
    <Navbar />
  </header>
)

const footerLinks = [
  { label: "Accueil", path: "/" },
  { label: "Mal être", path: "/mal-etre" },
  { label: "Souffrance au travail", path: "/souffrance-au-travail" },
  { label: "Épreuves de la vie", path: "/epreuves-de-la-vie" },
  { label: "EFT/PNL/Coaching", path: "/" },
  { label: "Votre psychologue", path: "/" },
]

const Footer = () => (
  <footer>
    <h2 className="sr-only">Informations complémentaires</h2>
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
          {footerLinks.map((link) => (
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
    <Row className="bg-gray-100">
      <Col className="w-full p-4">
        <p className="text-center text-xs text-gray-600">
          © Jean Jacques Penin, Psychologue sur Angers et Saint Melaine sur
          Aubance
        </p>
      </Col>
    </Row>
  </footer>
)

const CovidBanner = () => (
  <div className="rounded-md bg-blue-100 p-4 shadow">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3 flex-1 md:flex md:justify-between">
        <p className="text-sm leading-5 text-blue-700">
          Pour beaucoup de familles, de malades, de soignants, le coronavirus a
          provoqué des dégâts autres que physiques. Le deuil, la douleur, la
          peur, les soins intensifs soudains, la solitude, sont autant de
          facteurs traumatiques en raison de leur survenue brutale. Ce vécu
          émotionnel, je vous propose de le considérer afin de l’apaiser.
          Pendant le confinement nous pouvons échanger par{" "}
          <Link className="font-bold underline" to="/contact">
            skype ou par téléphone
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
)

const Layout = (props: PropsWithChildren<{}>) => (
  <div
    className="min-h-screen flex flex-col font-sans"
    style={{ background: "#d3d3d347" }}
  >
    <Container className="mb-4 pt-4">
      <Row>
        <CovidBanner />
      </Row>
    </Container>

    <Container className="bg-white relative">
      <Row className="sticky top-0 left-0 right-0 bg-white z-10">
        <Col className="w-full">
          <Header />
        </Col>
      </Row>
      <main className="px-8">{props.children}</main>
      <Footer />
    </Container>
  </div>
)

export default Layout
