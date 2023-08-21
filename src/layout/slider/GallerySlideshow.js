// src/layouts/GallerySlideshow/GallerySlideshow.js

import React from "react"
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import { getSrc, getSrcSet } from "gatsby-plugin-image"
import "react-image-gallery/styles/css/image-gallery.css";

const GallerySlideshow = ({ gallerySectionId, galleryTopPadding, galleryColorScheme, galleryBottomPadding, slideshowImages }) => {

    const galleryMap = slideshowImages

    return (
        <BlockContent
        id={gallerySectionId}
        className={`color-${galleryColorScheme}`}
        style={{
            paddingTop: `${galleryTopPadding}px`,
            paddingBottom: `${galleryBottomPadding}px`
        }}
        >
          <div class="gallery-row">
              <ImageGallery 
              items={galleryMap.map(item => ({ 
                original: getSrc(item.original),
                thumbnail: getSrc(item.thumbnail),
                srcSet: getSrcSet(item.original),
                //@todo: height is not set properly, so temporarily hard-coded to 500px
                originalHeight: 500, //getImage(item.original).height,
                loading: "eager",
                }))}
                showFullscreenButton={false}
                />
          </div>
        </BlockContent>
    );
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
    .gallery-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        .image-gallery {
            width: 100%;
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
    `

export default GallerySlideshow