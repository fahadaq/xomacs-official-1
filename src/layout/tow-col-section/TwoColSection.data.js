// src/layouts/TwoColSection/TwoColSection.data.js

module.exports = () => {
    return `
        ... on WpPage_Custompagebuilder_PageBuilder_TwoColumnsImage {
            fieldGroupName
            twoColSectionId
            twoColTopPadding
            twoColBottomPadding
            twoColColorScheme
            twoColColumnSizes
            twoColImagePosition
            twoColImageMaxWidth
            twoColSectionContent
            twoColSectionImage {
                title
                localFile {
                    childImageSharp {
                        gatsbyImageData (
                            width: 900
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    `
}