// src/components/standard-page-builder.js

import React from "react"
import AnchorButtons from "../layouts/AnchorButtons"
import CallToAction from "../layouts/CallToAction"
import ContactSection from "../layouts/ContactSection"
import OneColSection from "../layouts/OneColSection"
import GallerySlideshow from "../layouts/GallerySlideshow"
import PageBanner from "../layouts/PageBanner"
import TwoColSection from "../layouts/TwoColSection"

const StandardPageBuilder = ({ layoutData }) => {

  const layoutType = layoutData.fieldGroupName

  /**
   * Default component
   */
  const Default = () => <div>In AllLayouts the mapping of this component is missing: {layoutType}</div>

  /**
   * Mapping the fieldGroupName(s) to our components
   */
  const layouts = {
    Page_Custompagebuilder_PageBuilder_PageBanner: PageBanner,
    Page_Custompagebuilder_PageBuilder_OneColSection: OneColSection,
    Page_Custompagebuilder_PageBuilder_CallToAction: CallToAction,
    Page_Custompagebuilder_PageBuilder_TwoColumnsImage: TwoColSection,
    Page_Custompagebuilder_PageBuilder_GallerySlideshow: GallerySlideshow,
    Page_Custompagebuilder_PageBuilder_AnchorButtons: AnchorButtons,
    Page_Custompagebuilder_PageBuilder_ContactSection: ContactSection,
    page_default: Default
  }

  /**
   * If layout type is not existing in our mapping, it shows our Default instead.
   */
  const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts['page_default']

  return (
    <ComponentTag {...layoutData} />
  )
}

export default StandardPageBuilder