import React from 'react'
import AIMLDevelopmentHeading from '../pagescomponents/AI-MLDevelopment/AI-MLDevelopmentHeading'
// import { testimonialData } from '../mockdata/MobileGameDevelopment'
import TestimonialSection from '../pagescomponents/MobileGameDevelopment/TestimonialSection'
import ExpoloreService from '../pagescomponents/MobileGameDevelopment/ExpoloreService'
import SolutionDeliverSection from '../pagescomponents/MobileGameDevelopment/SolutionDeliverSection'
import CTASection from '../pagescomponents/MobileGameDevelopment/CTASection'
import WhyUsSection from '../pagescomponents/MobileGameDevelopment/WhyUsSection'
import ExpertiseSection from '../pagescomponents/MobileGameDevelopment/ExpertiseSection'
import SuccessStorySection from '../pagescomponents/MobileGameDevelopment/SuccessStorySection'
import CTAQueteSection from '../pagescomponents/MobileGameDevelopment/CTAQueteSection'
import IndustriesSection from '../pagescomponents/MobileGameDevelopment/IndustriesSection'
import SpaceSection from '../pagescomponents/MobileGameDevelopment/SpaceSection'
import ClientBrandSection from '../pagescomponents/MobileGameDevelopment/ClientBrandSection'
import CTAProjectSection from '../pagescomponents/MobileGameDevelopment/CTAProjectSection'

const AIMLDevelopment = () => {
  return (
    <>
   <AIMLDevelopmentHeading />
   {/* <TestimonialSection testimonials={testimonialDatamonialData} /> */}
        <ExpoloreService />
        <SolutionDeliverSection />
        <CTASection />
        <WhyUsSection />
        <ExpertiseSection />
        <SuccessStorySection />
        <CTAQueteSection />
        <IndustriesSection />
        <SpaceSection />
        <ClientBrandSection />
        <CTAProjectSection />
    </>
  )
}

export default AIMLDevelopment
