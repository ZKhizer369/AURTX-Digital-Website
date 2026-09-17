import { HeroSection } from '../components/homepage/HeroSection'
import { VideoSection } from '../components/homepage/VideoSection'
import { FeaturesSection } from '../components/homepage/FeaturesSection'
import { ProductsSection } from '../components/homepage/ProductsSection'
import { WhyAurtxSection } from '../components/homepage/WhyAurtxSection'
import { GrowthSection } from '../components/homepage/GrowthSection'
import { TeamRolesSection } from '../components/homepage/TeamRolesSection'
import { Footer } from '../components/homepage/Footer'
export default function HomePage() {
  return <div className="mx-auto overflow-x-clip bg-[#f5f8f7] font-sans text-[#0b0f0e] [&_section]:scroll-mt-6 [&_footer]:scroll-mt-6 [&_button]:cursor-pointer [&_button]:transition-[background-color,color,box-shadow,transform] [&_button]:duration-300 homepage" id="home">
    <a className="fixed top-2.5 left-5 z-100 bg-white p-3 translate-y-[-180%] focus:translate-y-0 skip-link" href="#main-content">Skip to content</a>
    <div className="px-4 pt-4 max-[990px]:px-2 max-[990px]:pt-2"><HeroSection /></div>
    <main id="main-content">
      <VideoSection />
      <FeaturesSection />
      <div className="px-5"><ProductsSection /></div>
      <WhyAurtxSection />
      <GrowthSection />
      <TeamRolesSection />
    </main>
    <Footer />
  </div>
}
