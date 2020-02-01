import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cn from "classnames"
import {
  Col,
  Container,
  Media,
  Row,
  StyleProps,
  StylePropsWithChildren,
} from "../components/grid"

type Goto = {
  path: string
  label: string
}

const MainEntries = (props: StyleProps<{ cards: typeof cards }>) => (
  <div style={props.style} className={cn("", props.className)}>
    <h2 className="sr-only">Pourquoi consulter ?</h2>
    <div className="flex">
      {cards.map(card => (
        <article
          key={card.title}
          className={cn(props.className, "px-4 py-6 text-center flex-1 w-1/3")}
          style={{ ...props.style, background: card.color }}
        >
          <img className="mb-4" src={card.image} alt={card.title} />
          <h3
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
  </div>
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
          {props.links.map(link => (
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

const yellow = "rgb(253, 230, 200)",
  blue = "rgb(215, 230, 235)",
  red = "rgb(243, 203, 200)"

const cards = [
    {
      title: "Mal être",
      excerpt:
        "Vous êtes déprimé ? Vous manquez de confiance en vous ? Peut être vous battez-vous contre une anxiété permanente ? Vous voulez reprendre votre vie en main ? Vous rêvez d'une vie plus simple ?",
      color: yellow,
      image: "mal-etre.png",
      link: { path: "/mal-etre", label: "Apprendre à mieux vivre" },
    },
    {
      title: "Souffrance au travail",
      excerpt:
        "Votre travail envahit toute votre pensée.. Peut être venez-vous de vivre un conflit professionnel ou êtes vous en perte d'emploi ? Peut être traversez-vous une profonde démotivation, êtes vous proche du burn-out ? Vous rêvez de mieux utiliser vos compétences et envisagez un changement ? Un nouveau challenge se présente et vous vous demandez comment le relever ?",
      color: red,
      image: "sante-au-travail.png",
      link: {
        path: "/souffrance-au-travail",
        label: "Retrouver le goût d'aller au travail",
      },
    },
    {
      title: "Epreuves de la vie",
      excerpt:
        "Votre vie de couple est en péril ? Vous faites face à une situation difficile avec vos enfants, vos parents ? Votre santé vous préoccupe ? Vous avez vécu un accident; un traumatisme ? Et vous aimeriez en parler pour vous libérer ?",
      color: blue,
      image: "epreuves-de-la-vie.png",
      link: { path: "/mal-etre", label: "Apprendre à mieux vivre" },
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

const HomePage = () => (
  <Layout>
    <SEO title="Home" description="" meta={[]} />
    <header className="pt-24 pb-32">
      <Row>
        <Col className="w-full items-center flex flex-col">
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
    <main>
      <section className="">
        <Row>
          <MainEntries cards={cards} />
        </Row>
      </section>
      <section className="mb-8">
        <Row>
          <div className="w-2/3 p-8 pb-4 text-center flex flex-col justify-center items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl mb-4 font-bold">À Votre Écoute</h2>
              <p className="mb-4">
                Afin d’intervenir à différents niveaux, je mobilise des
                approches complémentaires.
              </p>

              <p className="mb-4">
                La parole, l’EFT qui travaille sur la dimension émotionnelle, la
                PNL qui s’intéresse à la mobilisation des capacités ainsi que
                les méthodes du coaching qui permettent de convenir des
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
          <div className="w-1/3 pl-0">
            <img
              src="jean-jacques-penin-psychologue-sur-angers-photo-profile.jpg"
              alt=""
            />
          </div>
        </Row>
      </section>
      <section className="">
        <Row>
          <QuickLinksBanner links={quicklinks} />
        </Row>
      </section>
    </main>
  </Layout>
)

export default HomePage
