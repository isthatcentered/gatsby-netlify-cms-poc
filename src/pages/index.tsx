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

const Card = (
  props: StyleProps<{
    title: string
    image: string
    excerpt: string
    color: string
    link: { path: string; label: string }
  }>
) => {
  return (
    <Link
      to={props.link.path}
      data-scroll
      className={cn(
        props.className,
        "Card block px-4 py-6 rounded-sm text-center sharpen shadow"
      )}
      style={{ ...props.style, background: props.color }}
    >
      <img src={props.image} alt={props.title} />
      <h3
        className="font-serif text-xl text-xl mb-2"
        style={{
          lineHeight: 1.2,
          letterSpacing: "0.06em",
        }}
      >
        {props.title}
      </h3>
      <p className="text-sm mt-auto">{props.excerpt}</p>
    </Link>
  )
}

const Lead = (props: StylePropsWithChildren<{}>) => (
  <p
    {...props}
    style={{
      ...props.style,
      lineHeight: 1.4,
      letterSpacing: "0.07em",
    }}
    className={cn("font-serif text-2xl mb-6")}
  />
)

const HomePageSection = (props: StylePropsWithChildren<{ title: string }>) => (
  <section
    style={props.style}
    className={cn(props.className, "HomePageSection mb-48")}
  >
    <h2
      className={"SectionTitle text-xl uppercase font-semibold mb-6"}
      style={{
        lineHeight: 1.7,
        letterSpacing: "0.04em",
      }}
    >
      {props.title}
    </h2>
    {props.children}
  </section>
)

const HomePageSection2 = (
  props: StylePropsWithChildren<{ title: string; color: string; id: string }>
) => (
  <Row style={props.style} className={cn(props.className, "mb-48 ")}>
    <Col>
      <h2
        id={props.id}
        className="text-4xl max-w-sm uppercase font-semibold mb-6 sticky left-0 top-0 text-secondary-500 "
        style={{
          color: props.color,
          lineHeight: 1.7,
          letterSpacing: "0.04em",
        }}
      >
        {props.title}
      </h2>
    </Col>
    <Col className="w-3/4">{props.children}</Col>
  </Row>
)

const cards = [
  {
    title: "Mal être",
    excerpt: "Where we trust inuition and support it through science",
    // color: "#dce9f2",
    color: "#e8eff1",
    image: "mal-etre.png",
    link: { path: "/#mal-etre", label: "Apprendre à mieux vivre" },
  },
  {
    title: "Souffrance au travail",
    excerpt: "Where we prioritise self-care and planet-care",
    // color: "#faead6",
    color: "#fadcd8",
    image: "sante-au-travail.png",
    link: { path: "/#mal-etre", label: "Retrouver le goût d'aller au travail" },
  },
  {
    title: "Epreuves de la vie",
    excerpt: "Where we go through the ABCs of CBD",
    // color: "#c5e3c1",
    color: "#f7f6f6",
    image: "epreuves-de-la-vie.png",
    link: { path: "/#mal-etre", label: "Apprendre à mieux vivre" },
  },
]

const _HomePage = () => (
  <Layout>
    <SEO title="Home" description="" meta={[]} />

    <header className="pt-20 pb-12">
      <Container>
        <Row>
          <Col className="w-23 flex">
            <Media>
              <img
                className="self-center mr-4 w-24 h-24 object-cover rounded-full border-2 border-gray-400"
                src="jean-jacques-penin-psychologue-sur-angers.png"
                alt=""
              />
              <Media.Body>
                <h1
                  className="font-serif text-4xl"
                  style={{
                    lineHeight: 1.4,
                    letterSpacing: "0.07em",
                  }}
                >
                  <span
                    className="text-base block font-sans font-bold mb-2 "
                    style={{ letterSpacing: 1.2 }}
                  >
                    Jean Jacques Penin,
                  </span>{" "}
                  Pyschologue Du Travail, <br />
                  Psychologue Clinicien
                </h1>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="mb-32">
      <Container>
        <h2 className="sr-only">Nos services</h2>
        <Row className="">
          {cards.map(c => (
            <Col key={c.title} className="w-1/3  flex">
              <Card className="flex-1" {...c} key={c.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <h2 className="text-xl uppercase font-semibold mb-12">
          Pourquoi consulter un psychologue ?
        </h2>

        <HomePageSection2
          id="mal-etre"
          color="rgb(89, 174, 199)"
          title="Pour retrouver le plaisir de vivre"
        >
          <p className="text-xl mb-6">
            Trop de mal être porte au découragement. Pourtant, si vous consultez
            ce site, c'est que vous ne vous êtes pas résignés. Peut être vous
            dites vous que vous avez le droit de vivre mieux. Mais comment faire
            ?
          </p>
          <p className="text-xl mb-6">
            Il y a des héros qui se sortent tout seul de toutes les situations.
            Enfin, ils l'affirment...Moi je trouve qu'il est difficile de faire
            face seul à des difficultés que l'on rencontre depuis plus ou moins
            longtemps.{" "}
          </p>
          <p className="text-xl mb-6">
            Hélas, nous sommes parfois semblables au naufragé accroché à sa
            planche de salut, qui se demande s'il est raisonnable et prudent de
            la lâcher pour tenter de regagner le rivage ...Consulter un
            psychologue c'est choisir de regagner le rivage. Avec la sécurité de
            ne pas le faire seul.
          </p>
          <p className="text-xl mb-6">
            En s'appuyant sur une relation de travail thérapeutique dans un
            cadre sécurisant, confidentiel et neutre. Pouvoir enfin dire ce qui
            vous préoccupe sans être jugé, évalué...
          </p>

          <p className="text-xl mb-6">Un temps précieux dans notre société.</p>
          <p className="text-xl mb-6">
            Dialoguer, observer, laisser parler ce qui est réduit depuis
            longtemps au silence, réfléchir aux conflits intérieurs, aux
            déceptions et aux espérances, , élaborer les traumatismes que nous
            rencontrons dans la vie familiale ou personnelle (accidents, deuils,
            abus...), constitue la forme du travail que nous pouvons{" "}
            <a
              className="font-semibold underline text-secondary-500"
              href="/prendre-rendez-vous"
            >
              aborder ensemble
            </a>
            .
          </p>
        </HomePageSection2>

        <HomePageSection2
          id="souffrance-au-travail"
          color="#fa7563"
          title="Pour relever les défis professionnels"
        >
          <p className="text-xl mb-6">
            Le travail mobilise du temps, de l'énergie, certes. Mais il mobilise
            bien d'autres dimensions. Par le travail, nous espérons nous
            réaliser, nous affirmer, nous faire reconnaître. Le travail engage
            ainsi une composante émotionnelle forte.
          </p>

          <p className="text-xl mb-6">
            Nous portons aussi les histoires professionnelles de nos parents,
            leurs rêves, leurs échecs. Aussi, lorsque quelque chose dérape dans
            un parcours professionnel (licenciement, conflits, harcèlement)
            l'équilibre personnel en est fragilisé et la douleur morale peut se
            manifester, accompagnée de symptômes divers: insomnies, addictions,
            irritabilité...
          </p>
          <p className="text-xl mb-6">
            Que l'on soit salarié, cadre ou dirigeant, on n'échappe pas toujours
            à la souffrance au travail,voire au burn-out.
          </p>
          <p className="text-xl mb-6">
            Pour autant, ce n'est pas une fatalité; mais un message. La
            souffrance au travail nous parle de notre idéal professionnel.
            Cherchons ensemble la meilleure manière de lui redonner sa place!
          </p>
          <p className="text-xl mb-6">
            A d'autres moments, ce sont de nouveaux défis à traverser. Une prise
            de responsabilités, un nouveau poste, un changement d'organisation
            peuvent à la fois stimuler et inquiéter. Un{" "}
            <a
              className="font-semibold underline text-secondary-500"
              href="/coaching"
            >
              coaching
            </a>{" "}
            s'avère à ce moment pertinent.
          </p>
        </HomePageSection2>

        <HomePageSection2
          id="epreuves-de-la-vie"
          color="#88aeba"
          title="Pour dépasser un traumatisme"
        >
          <p className="text-xl mb-6">
            Il est inévitable de croiser aux différents âges et moments de
            l'existence des difficultés complexes qui perturbent. Celles-ci font
            souvent réagir fortement nos émotions et notre corps car elles
            perturbent nos valeurs.
          </p>

          <p className="text-xl mb-6">
            Certains choisissent de ne pas en parler, de peur d'avoir encore
            plus mal. Mais si vous consultez ce site, c'est que vous, vous savez
            que la parole libère. Parler c'est se sentir vivre, être relié au
            monde, alors que des évènements douloureux pourraient au contraire
            nous isoler.
          </p>
          <p className="text-xl mb-6">
            Observer, réfléchir à ces évènements de la vie, aux déceptions et
            aux espérances qu'ils font naître, traverser les traumatismes que
            nous rencontrons dans la vie familiale ou personnelle (accidents,
            deuils, abus...) à travers un{" "}
            <a
              className="font-semibold underline text-secondary-500"
              href="/coaching"
            >
              travail sur soi.
            </a>
          </p>
        </HomePageSection2>
      </Container>
    </section>

    <section>
      <Container style={{ background: "#eceeee26" }}>
        <Row>
          <Media>
            <Media.Body className="p-12 text-center">
              <h2 className="text-3xl uppercase font-semibold mb-12">
                A votre écoute
              </h2>
              <p className="text-xl mb-6">
                Afin d’intervenir à différents niveaux, je mobilise des
                approches complémentaires.
              </p>
              <p className="text-xl mb-6">
                La parole, l’EFT qui travaille sur la dimension émotionnelle, la
                PNL qui s’intéresse à la mobilisation des capacités ainsi que
                les méthodes du coaching qui permettent de convenir des
                objectifs et des moyens de les atteindre.
              </p>
              <p className="text-xl mb-6">
                Si votre motivation est de retrouver l'énergie, le courage, le
                plaisir de vivre, alors travaillons ensemble à atteindre ce but.
              </p>
            </Media.Body>
            <div>
              <img
                className=""
                src="https://jjpenin-psychologue.fr/themes/custom/custom/images/psychologue_angers_jean_jacques_penin.jpg"
                alt=""
              />
            </div>
          </Media>
        </Row>
      </Container>
    </section>

    {/*<HomePageSection title="Pour dépasser un traumatisme">*/}
    {/*  <Row className="pt-20">*/}
    {/*    <Col className="mx-auto max-w-2xl">*/}
    {/*      <p*/}
    {/*        className="font-serif text-2xl mb-6"*/}
    {/*        style={{*/}
    {/*          lineHeight: 1.4,*/}
    {/*          letterSpacing: "0.07em",*/}
    {/*        }}*/}
    {/*      >*/}
    {/*        Il est inévitable de croiser aux différents âges et moments de*/}
    {/*        l'existence des difficultés complexes qui perturbent. Celles-ci font*/}
    {/*        souvent réagir fortement nos émotions et notre corps car elles*/}
    {/*        perturbent nos valeurs.*/}
    {/*      </p>*/}

    {/*      <p className="text-xl mb-6">*/}
    {/*        Certains choisissent de ne pas en parler, de peur d'avoir encore*/}
    {/*        plus mal. Mais si vous consultez ce site, c'est que vous, vous savez*/}
    {/*        que la parole libère. Parler c'est se sentir vivre, être relié au*/}
    {/*        monde, alors que des évènements douloureux pourraient au contraire*/}
    {/*        nous isoler.*/}
    {/*      </p>*/}
    {/*      <p className="text-xl mb-6">*/}
    {/*        Observer, réfléchir à ces évènements de la vie, aux déceptions et*/}
    {/*        aux espérances qu'ils font naître, traverser les traumatismes que*/}
    {/*        nous rencontrons dans la vie familiale ou personnelle (accidents,*/}
    {/*        deuils, abus...) à travers un{" "}*/}
    {/*        <a*/}
    {/*          className="font-semibold underline text-secondary-500"*/}
    {/*          href="/coaching"*/}
    {/*        >*/}
    {/*          travail sur soi*/}
    {/*        </a>*/}
    {/*      </p>*/}
    {/*    </Col>*/}
    {/*  </Row>*/}
    {/*</HomePageSection>*/}
  </Layout>
)

const Card2 = (
  props: StyleProps<{
    title: string
    image: string
    excerpt: string
    color: string
    link: { path: string; label: string }
  }>
) => {
  return (
    <article
      className={cn(props.className, "Card block px-4 py-6 text-center")}
      style={{ ...props.style, background: props.color }}
    >
      <img src={props.image} alt={props.title} />
      <h3
        className="font-serif text-xl text-xl mb-2"
        style={{
          lineHeight: 1.2,
          letterSpacing: "0.06em",
        }}
      >
        {props.title}
      </h3>
      <p className="text-sm mt-auto">{props.excerpt}</p>
      <Link to={props.link.path}>{props.link.label}</Link>
    </article>
  )
}

const HomePage = () => (
  <Layout>
    <SEO title="Home" description="" meta={[]} />

    <header className="pt-20 pb-12">
      <Container>
        <Row>
          <Col className="w-23 flex">
            <Media>
              <img
                className="mt-6 mr-4 w-24 h-24 object-cover rounded-full border-2 border-gray-400"
                src="jean-jacques-penin-psychologue-sur-angers.png"
                alt=""
              />
              <Media.Body>
                <p className="text-sm block font-sans font-bold mb-1 ">
                  Jean Jacques Penin
                </p>
                <h1
                  className="font-serif text-4xl"
                  style={{
                    lineHeight: 1.4,
                    letterSpacing: "0.07em",
                  }}
                >
                  Pyschologue Du Travail, <br />
                  Psychologue Clinicien
                  <span
                    className="text-base block font-sans font-bold mt-4"
                    style={{ letterSpacing: "normal" }}
                  >
                    Sur Angers et Saint Melaine sur Aubance
                  </span>
                </h1>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    </header>
    <main>
      <section>
        <Container className="flex">
          <h2 className="sr-only">Pouquoi consulter ?</h2>
          {cards.map(card => (
            <Card2 className="w-1/3 flex-1" {...card} key={card.title} />
          ))}
        </Container>
      </section>
      <section>
        <Container className="flex">
          <div className="w-2/3 px-8">
            <h2>À Votre Écoute</h2>
            Afin d’intervenir à différents niveaux, je mobilise des approches
            complémentaires. La parole, l’EFT qui travaille sur la dimension
            émotionnelle, la PNL qui s’intéresse à la mobilisation des capacités
            ainsi que les méthodes du coaching qui permettent de convenir des
            objectifs et des moyens de les atteindre. Si votre motivation est de
            retrouver l'énergie, le courage, le plaisir de vivre, alors
            travaillons ensemble à atteindre ce but.
          </div>
          <div className="w-1/3 pl-0">
            <img
              src="jean-jacques-penin-psychologue-sur-angers-photo-profile.jpg"
              alt=""
            />
          </div>
        </Container>
      </section>
    </main>
    <footer>
      <h2 className="sr-only">Informations complémentaires</h2>
      <Container>
        <Row>
          <Col className="w-1/4">
            <h3>Prendre Rendez-Vous</h3>
            Tel: 06 52 38 21 73 Email: jjpenin@hotmail.fr Angers: 8 ter, rue
            Béclard Saint Melaine/Aubance: 8 rue des prés hauts
          </Col>
          <Col className="w-1/4">
            <h3>Horaires</h3> Lundi - Vendredi: 08h - 20h Samedi: 08h - 13h{" "}
            <h3>Tarifs</h3>
            Une séance 60€
          </Col>
          <Col className="w-1/4">
            <h3>Liens utiles</h3>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/">Mal être</Link>
              </li>
              <li>
                <Link to="/">Santé au travail</Link>
              </li>
              <li>
                <Link to="/">Épreuves de la vie</Link>
              </li>
              <li>
                <Link to="/">EFT/PNL/Coaching</Link>
              </li>
              <li>
                <Link to="/">Votre psychologue</Link>
              </li>
            </ul>
          </Col>
          <Col className="w-1/4">
            <Link to="/">Poser une question</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              © Jean Jacques Penin, Psychologue sur Angers et Saint Melaine sur
              Aubance
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  </Layout>
)

export default HomePage
