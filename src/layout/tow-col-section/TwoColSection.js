// src/layouts/TwoColSection/TwoColSection.js

import React from "react"
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TwoColSection = ({ twoColSectionId, twoColTopPadding, twoColBottomPadding, twoColColorScheme, twoColColumnSizes, twoColImagePosition, twoColImageMaxWidth, twoColSectionContent, twoColSectionImage }) => {

    const sectionImage = getImage(twoColSectionImage.localFile.childImageSharp.gatsbyImageData)

    return (
      <BlockContent
      id={twoColSectionId}
      className={`color-${twoColColorScheme} col-${twoColColumnSizes} image-${twoColImagePosition}`}
      style={{
          paddingTop: `${twoColTopPadding}px`,
          paddingBottom: `${twoColBottomPadding}px`
      }}
      >
        <div>
            <div class="section-copy" dangerouslySetInnerHTML={{__html: twoColSectionContent}} />
            <div class="section-image">
                <GatsbyImage image={sectionImage} alt={twoColSectionImage.title} style={{ maxWidth: `${twoColImageMaxWidth}px` }}/>
            </div>
        </div>
      </BlockContent>
    )
  }
  
const BlockContent = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  &.color-white {
    background-color: #fff;
    h2, h3, p, li {
      color: #000;
    }
    hr {
      background-color: #25afb4;
    }
  }
  &.color-gray {
    background-color: #f1f1f1;
    h2, h3, p, li {
      color: #000;
    }
    hr {
      background-color: #25afb4;
    }
  }
  &.color-blue {
    background-color: #25afb4;
    h2, h3, p, li {
      color: #fff;
    }
    hr {
      background-color: #fff;
    }
  }
  &.col-half {
    > div {
        > div:first-child {
            width: 50%;
        }
        > div:last-child {
            width: 50%;
        }
    }
  }
  &.col-one-third {
    > div {
        > div:first-child {
            width: 66.66%;
        }
        > div:last-child {
            width: 33.33%;
        }
    }
  }
  &.col-one-fourth {
    > div {
        > div:first-child {
            width: 75%;
        }
        > div:last-child {
            width: 25%;
        }
    }
  }
  &.image-right {
    > div {
        > div:first-child {
            order: 1;
            padding-right: 30px;
        }
        > div:last-child {
            order: 2;
            padding-left: 30px;
        }
    }
  }
  &.image-left {
    > div {
        > div:first-child {
            order: 2;
            padding-left: 30px;
        }
        > div:last-child {
            order: 1;
            padding-right: 30px;
        }
    }
  }
  > div {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .section-image {
      text-align: center;
      .gatsby-image-wrapper {
        margin-top: 20px;
        margin-bottom: 20px;
      }
  }
  h2 {
    font-family: "Roboto Slab";
    font-size: 40px;
    line-height: 1.3;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 2px;
    font-style: normal;
    margin-top: 0em;
    margin-bottom: 30px;
  }
  h3 {
    font-family: "Roboto Slab";
    font-weight: 400;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 32px;
    line-height: 1.4;
    margin-top: 0em;
    margin-bottom: 30px;
  }
  hr {
    margin: 30px 0;
    max-width: 100px;
    width: 100%;
    height: 2px;
    &.centered {
        margin: 30px auto;
      }
  }
  p {
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 20px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 20px;
  }
  li {
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 20px;
    line-height: 1.5;
  }
  ul, ol {
      margin-left: 35px;
  }
  @media(max-width:991px) {
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    p, li {
      font-size: 18px;
    }
    ul, ol {
      margin-left: 20px;
      li {
        list-style-position: outside;
      }
    }
    .iframe-flex {
      iframe {
        padding: 10px 0;
        max-width: 300px;
        width: 100%;
        height: 200px;
      }
    }
    &.col-half {
      > div {
        flex-wrap: wrap;
          > div:first-child {
              width: 100%;
              padding-left: 0;
              padding-right: 0;
          }
          > div:last-child {
              width: 100%;
              padding-left: 0;
              padding-right: 0;
          }
      }
    }
    &.col-one-third {
      > div {
        flex-wrap: wrap;
          > div:first-child {
              width: 100%;
              padding-left: 0;
              padding-right: 0;
          }
          > div:last-child {
              width: 100%;
              padding-left: 0;
              padding-right: 0;
          }
      }
    }
    &.col-one-fourth {
      > div {
        flex-wrap: wrap;
          > div:first-child {
              width: 100%;
              padding-left: 0;
              padding-right: 0;
          }
          > div:last-child {
              width: 100%;
              padding-left: 0;
              padding-right: 0;
          }
      }
    }
    &.image-right {
      > div {
          > div:first-child {
              order: 1;
          }
          > div:last-child {
              order: 2;
          }
      }
    }
    &.image-left {
      > div {
          > div:first-child {
              order: 1;
          }
          > div:last-child {
              order: 2;
          }
      }
    }
  }
`

export default TwoColSection