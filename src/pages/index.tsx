import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cn from "classnames"
import { Col, Media, Row, StyleProps } from "../components/grid"
import { HomePageData } from "./__generated__/HomePageData"
import { SafeQuery } from "../queries"
import Img from "gatsby-image"

type Goto = {
  path: string
  label: string
}

export const THEME_COLORS = {
  yellow: "#FCE7C4",
  blue: "#DAEAFB",
  red: "#FCCAC4",
}

const MainEntries = (props: StyleProps<{ cards: typeof cards }>) => (
  <section
    aria-labelledby="main-entrie-header"
    style={props.style}
    className={cn("", props.className)}
  >
    <h2 id="main-entries-header" className="sr-only">
      Pourquoi consulter ?
    </h2>
    <div className="flex">
      {cards.map((card) => (
        <article
          aria-labelledby={card.link.path}
          key={card.title}
          className={cn(props.className, "px-4 py-6 text-center flex-1 w-1/3")}
          style={{ ...props.style, background: card.color }}
        >
          <img className="mb-4" src={card.image} alt={card.imageAlt} />
          <h3
            id={card.link.path}
            className="font-bold text-2xl mb-4"
            style={{
              lineHeight: 1.2,
              letterSpacing: "0.06em",
            }}
          >
            {card.title}
          </h3>

          {/*<p className="text-sm mt-auto">{props.excerpt}</p>*/}
          <Link className="underline" to={card.link.path}>
            {card.link.label}
          </Link>
        </article>
      ))}
    </div>
  </section>
)

const QuickLinksBanner = (props: StyleProps<{ links: Goto[] }>) => (
  <div
    style={props.style}
    className={cn("px-12 py-4 flex w-full items-center", props.className)}
  >
    <Media>
      <Media.Body className="self-center flex-grow">
        <h2 className="text-2xl font-bold">
          <Link to="/contact">
            Consultation sur Angers et Saint Melaine sur Aubance
          </Link>
        </h2>
      </Media.Body>
      <div className="self-center">
        <ul className="list-disc">
          {props.links.map((link) => (
            <li key={link.label}>
              <Link
                className="font-bold underline text-blue-700 block p-1"
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Media>
  </div>
)

const cards = [
    {
      title: "Mal être",
      excerpt:
        "Vous êtes déprimé ? Vous manquez de confiance en vous ? Peut être vous battez-vous contre une anxiété permanente ? Vous voulez reprendre votre vie en main ? Vous rêvez d'une vie plus simple ?",
      color: THEME_COLORS["yellow"],
      image: "/images/mal-etre.png",
      imageAlt: "Dessin d'une forme abstraite évoquant un mal être interne",
      link: { path: "/mal-etre", label: "Apprendre à mieux vivre" },
    },
    {
      title: "Souffrance au travail",
      excerpt:
        "Votre travail envahit toute votre pensée.. Peut être venez-vous de vivre un conflit professionnel ou êtes vous en perte d'emploi ? Peut être traversez-vous une profonde démotivation, êtes vous proche du burn-out ? Vous rêvez de mieux utiliser vos compétences et envisagez un changement ? Un nouveau challenge se présente et vous vous demandez comment le relever ?",
      color: THEME_COLORS["red"],
      image: "/images/sante-au-travail.png",
      imageAlt:
        "Dessin d'une forme abstraite évoquant la peur de parler en publique",
      link: {
        path: "/souffrance-au-travail",
        label: "Retrouver le goût d'aller au travail",
      },
    },
    {
      title: "Epreuves de la vie",
      excerpt:
        "Votre vie de couple est en péril ? Vous faites face à une situation difficile avec vos enfants, vos parents ? Votre santé vous préoccupe ? Vous avez vécu un accident; un traumatisme ? Et vous aimeriez en parler pour vous libérer ?",
      color: THEME_COLORS["blue"],
      image: "/images/epreuves-de-la-vie.png",
      imageAlt:
        "Dessin d'une forme abstraite évoquant un chemin de vie difficile",
      link: { path: "/epreuves-de-la-vie", label: "Apprendre à mieux vivre" },
    },
  ],
  quicklinks: Goto[] = [
    {
      label: "Adresse",
      path: "/",
    },
    {
      label: "Tarifs",
      path: "/",
    },
    {
      label: "Prendre rendez-vous",
      path: "/",
    },
  ]

const HomePage = ({
  data: { posts },
  ...props
}: {
  data: SafeQuery<HomePageData>
}) => (
  <Layout>
    <SEO
      title="Accueil"
      description="Jean Jacques Penin, Psychologue du travail sur Angers et Saint Melaine sur Aubance"
      meta={[]}
    />
    <div className="-mx-8">
      <header className="pt-24 pb-32">
        <Row>
          <Col className="w-full items-center">
            <h1
              className="font-bold text-4xl text-center"
              style={{
                lineHeight: 1.4,
                letterSpacing: "0.07em",
              }}
            >
              Psychologue du Travail, <br />
              Psychologue Clinicien
              <span
                className="text-base block font-normal text-gray-600 mt-2"
                style={{ letterSpacing: "normal" }}
              >
                Sur Angers et Saint Melaine sur Aubance
              </span>
            </h1>
          </Col>
        </Row>
      </header>
      <div>
        <Row>
          <MainEntries cards={cards} />
        </Row>
        <Row>
          <section aria-labelledby="a-votre-ecoute" className="w-full flex">
            <div className="w-2/3 p-8 pb-4 text-center flex flex-col justify-center items-center">
              <div className="max-w-xl">
                <h2 id="a-votre-ecoute" className="text-3xl mb-4 font-bold">
                  À Votre Écoute
                </h2>
                <p className="mb-4">
                  Afin d’intervenir à différents niveaux, je mobilise des
                  approches complémentaires.
                </p>

                <p className="mb-4">
                  La parole, l’EFT qui travaille sur la dimension émotionnelle,
                  la PNL qui s’intéresse à la mobilisation des capacités ainsi
                  que les méthodes du coaching qui permettent de convenir des
                  objectifs et des moyens de les atteindre.
                </p>

                <p className="mb-4">
                  Si votre motivation est de retrouver l'énergie, le courage, le
                  plaisir de vivre, alors{" "}
                  <Link className="text-blue-700 underline" to="/">
                    travaillons ensemble à atteindre ce but
                  </Link>
                  .
                </p>
              </div>
            </div>
            <aside className="w-1/3 pl-0">
              <img
                src="/images/jean-jacques-penin-psychologue-sur-angers-photo-profile.jpg"
                alt="Photo plein pieds de Jean Jacques Penin, psychologue sur Angers"
              />
            </aside>
          </section>
        </Row>
        {posts.edges.length > 0 && <section className="mb-8 ">
          <Row className="bg-gray-100 py-4 pl-4">
            <Col className="w-1/3 flex flex-col pr-8 justify-center">
              <h2 className="text-3xl font-bold mb-4">Le blog</h2>
              <p className="text-gray-600 mb-8">
                Réflexions sur la vie au quotidien et comment utiliser la
                psychologie pour vivre mieux
              </p>
              <Link className="text-blue-600 underline font-bold"
                    to="/blog">
                Tous les articles
              </Link>
            </Col>
            {posts.edges.map( ( { node: post }, index ) => (
              <Col className="w-1/3 pl-0 pr-0 "
                   key={post.id}>
                <article className={cn( "h-full", `bg-gray-${index + 2}00` )}>
                  <div className="relative"
                       style={{ paddingTop: "100%" }}>
                    <Img
                      className="object-cover object-top absolute top-0 left-0 w-full h-full"
                      fluid={post.frontmatter.hero.src.childImageSharp.fluid}
                      alt={post.frontmatter.hero.alt}
                      style={{ position: "absolute" }}
                    />
                  </div>
                  <Link
                    to={`/blog${post.fields.slug}`}
                    className="block p-4 text-center"
                  >
                    {/*  <p className=" text-xs text-gray-600 mb-2 hidden">*/}
                    {/*    {post.tag}*/}
                    {/*  </p>*/}
                    <h3 className="font-bold text-2xl">
                      {post.frontmatter.title}
                    </h3>
                  </Link>
                </article>
              </Col>
            ) )}
          </Row>
        </section>
        }        <section className="">
          <Row>
            <QuickLinksBanner links={quicklinks} />
          </Row>
        </section>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query HomePageData {
    posts: allMdx(
      filter: {
        fields: { type: { eq: "blog" } }
        frontmatter: { published: { nin: false } }
      }
      limit: 2
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            hero {
              alt
              src {
                childImageSharp {
                  fluid(maxHeight: 400, maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          id
          body
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`

export default HomePage
