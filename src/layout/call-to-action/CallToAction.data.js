// src/layouts/CallToAction/CallToAction.data.js

module.exports = () => {
    return `
        ... on WpPage_Custompagebuilder_PageBuilder_CallToAction {
            fieldGroupName
            ctaSectionId
            ctaTopPadding
            ctaBottomPadding
            ctaColorScheme
            ctaContent
            ctaButtonText
            ctaButtonLink
            phoneText
            phoneLink
        }
    `
}