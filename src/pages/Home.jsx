import React from 'react';
import Header from '../components/Head';
import HomeBanner from '../components/Homebanner';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ExploreSection from '../components/ExploreSection';
import SolutionsSection from '../components/SolutionSection';
import PlatformsSection from '../components/PlateformSection';
import SpaceSection from '../components/SpaceSection';
import SpaceSectionClient from '../components/SpaceSectionClient';
import SpaceSectionSecond from '../components/SpaceSectionSecond';
import Consulation from '../components/Consulation';
import Section from './Section';
import Portfoliopage from './Portfoliopage';
import Blog from './Blog';
import About from './About';
import MobileAppDevelopment from './MobileAppDevelopment';
import AndroidAppDevelopment from './AndroidAppDevelopment';
import MobileGameDevelopment from './MobileGameDevelopment';
import AIMLDevelopment from './AIMLDevelopment';
import IPhoneDevelopment from './iPhoneDevelopment';
import CrossPlateformMobileDevelopment from './CrossPlateformMobileDevelopment';
import IoTAppDevelopment from './IoTAppDevelopment';
import MetavarseDevelopment from './MetavarseDevelopment';


function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <HomeBanner />
      <ExploreSection />
      <SolutionsSection />
      <PlatformsSection />
      <SpaceSection />
      <SpaceSectionClient />
      <SpaceSectionSecond />
      <Consulation />
      {/* <BreadCrumb /> */}
      {/* <Section /> */}
      {/* <Portfoliopage /> */}
      {/* <Blog /> */}
      {/* <About /> */}
      {/* <AndroidAppDevelopment /> */}
      {/* <MobileAppDevelopment /> */}
      {/* <MobileGameDevelopment /> */}
      {/* <AIMLDevelopment /> */}
      {/* <IPhoneDevelopment /> */}
      {/* <CrossPlateformMobileDevelopment /> */}
      {/* <IoTAppDevelopment /> */}
      {/* <MetavarseDevelopment /> */}
      <Footer />
    </div>
  );
}

export default Home;