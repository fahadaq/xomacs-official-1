// src/layouts/PageBanner/PageBanner.data.js

module.exports = () => {
    return `
        ... on WpPage_Custompagebuilder_PageBuilder_PageBanner {
            fieldGroupName
            bannerTitle
            bannerBackground {
                title
                localFile {
                childImageSharp {
                    gatsbyImageData (
                        width: 1800
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
                }
            }
        }
    `
}