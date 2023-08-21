import * as React from "react"
import Navbar from './navbar/Navbar'
import { useStaticQuery, graphql } from "gatsby"
import Home from "./home/Home"
import About from "./about/About"
import Services from "./services/services"
import CaseStudies from "./caseStudies/CaseStudies"

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
          services {
            ... on WpPage_Pagebuilder_Services_ServiceitemsaboutBg {
              serviceButton
              serviceTitle
              serviceTitle2
              servicerepeater {
                servicesInfo {
                  ... on WpPage_Pagebuilder_Services_ServiceitemsaboutBg_servicerepeater_ServicesInfo_ServiceInfoDetails {
                    serviceDescription
                    serviceTitle
                    serviceLogo {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
          caseStudies {
            ... on WpPage_Pagebuilder_CaseStudies_CaseStudiesItems {
              caseStudiesButton
              caseStudiesTitle
              caseStudiesBgImage {
                altText
                sourceUrl
              }
              caseStudiesImagesRepeater {
                caseStudiesImage {
                  altText
                  sourceUrl
                }
                caseStudiesImageButton
                caseStudiesImageDescription
                caseStudiesImageTitle
              }
              caseStudiesNavRepeater {
                caseStudiesNavbar {
                  ... on WpPage_Pagebuilder_CaseStudies_CaseStudiesItems_caseStudiesNavRepeater_CaseStudiesNavbar_CaseStudiesNavbarData {
                    caseStudiesTitle
                  }
                }
              }
              caseStudiesTitle2
            }
          }
          caseStudiesCount {
            ... on WpPage_Pagebuilder_CaseStudiesCount_CaseStudiesCountLeft {
              caseStudiesCount1
            }
            ... on WpPage_Pagebuilder_CaseStudiesCount_CaseStudiesCountRight {
              caseStudiesCount1
              caseStudiesCount2
              caseStudiesCount3
              caseStudiesCount4
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


  // Service's Page Data

  const services = nodes.find(n => n.title === 'Services');
  const {services: servicesData} = services.pageBuilder


  // Case Studies Page Data

  const caseStudies = nodes.find(n => n.title === 'Case Studies');
  const {caseStudies: caseStudiesData} = caseStudies.pageBuilder


  return (
    <>
      <div className="relative">
        <Navbar ClrStandard={ClrStandard} NavbarData={NavbarData} />
        <Home homeData={homeData[0]} ClrStandard={ClrStandard}/>
        <About aboutData={aboutData[0]}/>
        <Services servicesData={servicesData[0]} ClrStandard={ClrStandard}/>
        <CaseStudies caseStudiesData={caseStudiesData[0]} ClrStandard={ClrStandard}/>
        <main>{children}</main>
        {console.log('caseStudiesData', caseStudiesData[0])}
      </div>
    </>
  )
}

export default Layout
