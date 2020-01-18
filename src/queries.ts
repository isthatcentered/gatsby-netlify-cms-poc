import { DeepNonNullable } from "utility-types"
// import { SiteMetadataQuery } from "../graphql-types"
import { graphql, useStaticQuery } from "gatsby"
import {
  SiteMetadata,
  SiteMetadata_site_siteMetadata,
} from "./__generated__/SiteMetadata"

type SafeQuery<T> = DeepNonNullable<T>

export const useSiteMetadata = (): SafeQuery<SiteMetadata_site_siteMetadata> =>
  useStaticQuery<SafeQuery<SiteMetadata>>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  ).site.siteMetadata
