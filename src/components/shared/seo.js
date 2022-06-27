import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useLang } from "../../context/lang-context"

function SEO({ title, description, image, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title {
              ar
              en
            }
            titleTemplate {
              ar
              en
            }
            defaultDescription: description {
              ar
              en
            }
            url
            defaultImage: image
            twitterUserName
            author
          }
        }
      }
    `
  )

  const [lang] = useLang()
  const { pathname } = useLocation()
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    url,
    defaultImage,
    twitterUserName,
    author,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle[lang],
    description: description || defaultDescription[lang],
    image: image || defaultImage,
    url: `${url}${pathname}`,
  }

  const keywords = {
    ar: `مؤسسة هيئة تطوير التعليم, منظمة هيئة تطوير التعليم, هيئة تطوير التعليم ,عقل , تعليم ,منظمة ,جمعية ,شافعي, ايتام الاتارب, مدرسة ايتام الاتارب, مدرسة واجدو الطريق, واجدو الطريق,مركز دابق,حاضنة الثقافية,كفالة يتيم تعليمية ,منتدى دابق الثقافي , كلس , منظمات, عبد الملك علبي, المنقطعين عن التعليم  `,
    en: `EDC organization, EDC, education development commission, Kilis, Aytam atarib, Wajdo A-Tariq School, Orphants, Dapiq, Dabiq Cultural Center, formal education, informal education, courses `,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate[lang]}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUserName && (
        <meta name="twitter:creator" content={twitterUserName} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="keywords" content={keywords[lang]} />
      <meta name="robots" content="index,follow" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
export default SEO
