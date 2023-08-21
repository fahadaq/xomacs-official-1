// src/layouts/GallerySlideshow/GallerySlideshow.data.js

module.exports = () => {
    return `
        ... on WpPage_Custompagebuilder_PageBuilder_GallerySlideshow {
            fieldGroupName
            gallerySectionId
            galleryTopPadding
            galleryColorScheme
            galleryBottomPadding
            slideshowImages {
                title
                sourceUrl
                original: localFile {
                    childImageSharp {
                        gatsbyImageData(layout: FIXED, width:1200)
                    }
                }
                thumbnail: localFile {
                    childImageSharp {
                        gatsbyImageData(layout: FIXED, width:300)
                    }
                }
            }
        }
    `
}