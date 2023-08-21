// src/layouts/PageBanner/PageBanner.js

import React from "react"
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PageBanner = ({ bannerTitle, bannerBackground }) => {

    const bannerImage = getImage(bannerBackground.localFile.childImageSharp.gatsbyImageData)

    return (
      <BlockContent>
        <GatsbyImage className="banner-image" image={bannerImage} alt={bannerBackground.title} />
        <h1 dangerouslySetInnerHTML={{__html: bannerTitle}}/>
      </BlockContent>
    )
  }
  
const BlockContent = styled.header`
  position: relative;
  padding-left: calc(30px + 2%);
  padding-right: calc(30px + 2%);
  padding-top: 90px;
  padding-bottom: 90px;
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  h1 {
    font-family: "Roboto Slab";
    font-size: 45px;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 2px;
    font-style: normal;
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    z-index: 2;
  }
  @media(max-width:767px) {
    h1 {
      font-size: 28px;
    }
  }
`

export default PageBanner