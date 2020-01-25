import React, { CSSProperties, PropsWithChildren, ReactNode } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import cn from "classnames"

export type StyleProps<T> = {
  className?: string
  style?: CSSProperties
} & T

export type StylePropsWithChildren<T> = StyleProps<
  {
    children?: ReactNode
  } & T
>

export const Container = (props: StylePropsWithChildren<{}>) => (
  <div
    {...props}
    className={cn(
      props.className,
      "Container flex-1 mx-auto px-4 max-w-5xl px-4"
    )}
  />
)

export const Row = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "Row -mx-4 flex")} />
)

export const Col = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "Col px-4")} />
)

export const Media = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "Media flex items-start")} />
)
Media.Body = (props: StylePropsWithChildren<{}>) => (
  <div {...props} className={cn(props.className, "MediaBody flex-1")} />
)

const Card = (
  props: StyleProps<{
    title: string
    image: string
    excerpt: string
    color: string
    link: string
  }>
) => {
  return (
    <Link
      to={props.link}
      className={cn(
        props.className,
        "Card block px-4 py-6 rounded-sm text-center sharpen"
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

const HomePageSection2 = (props: StylePropsWithChildren<{ title: string }>) => (
  <Row style={props.style} className={cn(props.className, "mb-48 ")}>
    <Col>
      <h2
        className="text-4xl max-w-sm uppercase font-semibold mb-6 sticky left-0 top-0 text-secondary-500 opacity-50"
        style={{
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
    color: "#dce9f2",
    image:
      "https://images.prismic.io/daye/3c1a00e0c00162b40860f890f7b3fe1afd98872f_daye-category-illos-05.png?auto=compress,format",
    link: "/blah",
  },
  {
    title: "Burnout",
    excerpt: "Where we prioritise self-care and planet-care",
    color: "#faead6",
    image:
      "https://images.prismic.io/daye/32f581e17a6a661d64f64b37551caa45e50fa599_daye-category-illos-02.png?auto=compress,format",
    link: "/blah",
  },
  {
    title: "Souffrance au Travail",
    excerpt: "Where we go through the ABCs of CBD",
    color: "#c5e3c1",
    image:
      "https://images.prismic.io/daye/1c3765a321fcca5b38d7d0d5b6a6ff7ce517c88f_daye-sun-4-compressor.png?auto=compress,format",
  //     "https://images.prismic.io/daye/aac70df8ebbc52e8836b45673a3a06f501ec7993_daye-category-illos-04.png?auto=compress,format",
    link: "/blah",
  },
  {
    title: "Traumatismes",
    excerpt: "Where we wa poetic on all things culture",
    color: "#faeeeb",
    image:
      "https://images.prismic.io/daye/54fe3c7e789a829492707d408fd8088b4a85ce06_daye-category-illos-01.png?auto=compress,format",
    link: "/blah",
  },
  // {
  //   title: "Day in the life",
  //   excerpt: "Where we take you behind the scenes of Daye",
  //   color: "#f9d07b",
  //   image:
  //     "https://images.prismic.io/daye/1c3765a321fcca5b38d7d0d5b6a6ff7ce517c88f_daye-sun-4-compressor.png?auto=compress,format",
  //   link: "/blah",
  // },
]

const HomePage = () => (
  <Layout>
    <SEO title="Home" description="" meta={[]} />

    <header className="pt-20 pb-12">
      <Row>
        <Col className="w-1/2 self-center">
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
            Pyschologue Du Travail, Psychologue Clinicien
          </h1>
        </Col>
      </Row>
    </header>

    <section className="mb-32">
      <h2 className="sr-only">Nos services</h2>
      <Row className="">
        {cards.map(c => (
          <Col className="w-1/4  flex">
            <Card className="flex-1" {...c} key={c.title} />
          </Col>
        ))}
      </Row>
    </section>

    <section>
      <h2 className="text-xl uppercase font-semibold mb-12">
        Pourquoi consulter un psychologue ?
      </h2>

      <HomePageSection2 title="Pour retrouver le plaisir de vivre">
        <p className="text-xl mb-6">
          Trop de mal être porte au découragement. Pourtant, si vous consultez
          ce site, c'est que vous ne vous êtes pas résignés. Peut être vous
          dites vous que vous avez le droit de vivre mieux. Mais comment faire ?
        </p>
        <p className="text-xl mb-6">
          Il y a des héros qui se sortent tout seul de toutes les situations.
          Enfin, ils l'affirment...Moi je trouve qu'il est difficile de faire
          face seul à des difficultés que l'on rencontre depuis plus ou moins
          longtemps.{" "}
        </p>
        <p className="text-xl mb-6">
          Hélas, nous sommes parfois semblables au naufragé accroché à sa
          planche de salut, qui se demande s'il est raisonnable et prudent de la
          lâcher pour tenter de regagner le rivage ...Consulter un psychologue
          c'est choisir de regagner le rivage. Avec la sécurité de ne pas le
          faire seul.
        </p>
        <p className="text-xl mb-6">
          En s'appuyant sur une relation de travail thérapeutique dans un cadre
          sécurisant, confidentiel et neutre. Pouvoir enfin dire ce qui vous
          préoccupe sans être jugé, évalué...
        </p>

        <p className="text-xl mb-6">Un temps précieux dans notre société.</p>
        <p className="text-xl mb-6">
          Dialoguer, observer, laisser parler ce qui est réduit depuis longtemps
          au silence, réfléchir aux conflits intérieurs, aux déceptions et aux
          espérances, , élaborer les traumatismes que nous rencontrons dans la
          vie familiale ou personnelle (accidents, deuils, abus...), constitue
          la forme du travail que nous pouvons{" "}
          <a
            className="font-semibold underline text-secondary-500"
            href="/prendre-rendez-vous"
          >
            aborder ensemble
          </a>
          .
        </p>
      </HomePageSection2>

      <HomePageSection2 title="Pour relever les défis professionnels">
        <p className="text-xl mb-6">
          Le travail mobilise du temps, de l'énergie, certes. Mais il mobilise
          bien d'autres dimensions. Par le travail, nous espérons nous réaliser,
          nous affirmer, nous faire reconnaître. Le travail engage ainsi une
          composante émotionnelle forte.
        </p>

        <p className="text-xl mb-6">
          Nous portons aussi les histoires professionnelles de nos parents,
          leurs rêves, leurs échecs. Aussi, lorsque quelque chose dérape dans un
          parcours professionnel (licenciement, conflits, harcèlement)
          l'équilibre personnel en est fragilisé et la douleur morale peut se
          manifester, accompagnée de symptômes divers: insomnies, addictions,
          irritabilité...
        </p>
        <p className="text-xl mb-6">
          Que l'on soit salarié, cadre ou dirigeant, on n'échappe pas toujours à
          la souffrance au travail,voire au burn-out.
        </p>
        <p className="text-xl mb-6">
          Pour autant, ce n'est pas une fatalité; mais un message. La souffrance
          au travail nous parle de notre idéal professionnel. Cherchons ensemble
          la meilleure manière de lui redonner sa place!
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

      <HomePageSection2 title="Pour dépasser un traumatisme">
        <p className="text-xl mb-6">
          Il est inévitable de croiser aux différents âges et moments de
          l'existence des difficultés complexes qui perturbent. Celles-ci font
          souvent réagir fortement nos émotions et notre corps car elles
          perturbent nos valeurs.
        </p>

        <p className="text-xl mb-6">
          Certains choisissent de ne pas en parler, de peur d'avoir encore plus
          mal. Mais si vous consultez ce site, c'est que vous, vous savez que la
          parole libère. Parler c'est se sentir vivre, être relié au monde,
          alors que des évènements douloureux pourraient au contraire nous
          isoler.
        </p>
        <p className="text-xl mb-6">
          Observer, réfléchir à ces évènements de la vie, aux déceptions et aux
          espérances qu'ils font naître, traverser les traumatismes que nous
          rencontrons dans la vie familiale ou personnelle (accidents, deuils,
          abus...) à travers un{" "}
          <a
            className="font-semibold underline text-secondary-500"
            href="/coaching"
          >
            travail sur soi.
          </a>
        </p>
      </HomePageSection2>
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

export default HomePage
