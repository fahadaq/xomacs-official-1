import * as React from "react"
import Navbar from './navbar/Navbar'
import { useStaticQuery, graphql } from "gatsby"
import Home from "./home/Home"
import About from "./about/About"
import Services from "./services/services"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allWpPage {
      nodes {
        pageBuilder {
          colorsStandard {
            colors
          }
          about {
            ... on WpPage_Pagebuilder_About_AboutBg {
              aboutSubbgImageText
              aboutSubbgImageText2
              aboutBgImage {
                altText
                sourceUrl
              }
              aboutTitle
              aboutTitle2
              aboutTitle3
              aboutTitle4
              aboutSubbgImage {
                altText
                sourceUrl
              }
              aboutLeftImage {
                altText
                sourceUrl
              }
            }
          }
          home {
            ... on WpPage_Pagebuilder_Home_HomeBg {
              consultationButton
              homeTitle
              homeTitle2
              homeBgImage {
                altText
                sourceUrl
              }
              homeImage {
                altText
                sourceUrl
              }
            }
          }
          navbarLayout {
            navbar {
              ... on WpPage_Pagebuilder_navbarLayout_Navbar_Logo {
                logo {
                  altText
                  sourceUrl
                }
              }
              ... on WpPage_Pagebuilder_navbarLayout_Navbar_NavbarOptions {
                letsStart
                navbarRepeater {
                  navbarButtons
                }
              }
            }
          }
        }
        title
      }
    }
  }
  `)

  const { allWpPage } = data
  const { allWpPage: { nodes } } = data

  // Standard colors extraction.

  const colorization = nodes.find(n => n.title === 'Colorization');
  const ClrStandard = colorization.pageBuilder.colorsStandard

  // Navbar details extractions.

  const NavbarData = nodes.find(n => n.title === 'Navbar');

  // Home's Data extraction.

  const home = nodes.find(n => n.title === 'Home');
  const {home: homeData} = home.pageBuilder

  // About's Page Data

  const about = nodes.find(n => n.title === 'About');
  const {about: aboutData} = about.pageBuilder


  return (
    <>
      <div className="relative">
        <Navbar ClrStandard={ClrStandard} NavbarData={NavbarData} />
        <Home homeData={homeData[0]} ClrStandard={ClrStandard}/>
        <About aboutData={aboutData[0]}/>
        <Services/>
        <main>{children}</main>
        {console.log('homeData', aboutData[0])}
      </div>
    </>
  )
}

export default Layout
