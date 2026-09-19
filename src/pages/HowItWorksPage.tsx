import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FeaturesCta } from '../components/features/FeaturesCta'
import { HowItWorksHero } from '../components/how-it-works/HowItWorksHero'
import { WorkflowSection } from '../components/how-it-works/WorkflowSection'
import { TeamAiSection } from '../components/how-it-works/TeamAiSection'
import { WorkAnywhereSection } from '../components/how-it-works/WorkAnywhereSection'
import { ConnectedWorkspaceSection } from '../components/how-it-works/ConnectedWorkspaceSection'

export default function HowItWorksPage() {
  return <div className="bg-[#f5f8f7] font-sans text-black [&_section]:scroll-mt-6 [&_footer]:scroll-mt-6">
    <a href="#main-content" className="fixed top-2.5 left-5 z-100 translate-y-[-180%] bg-white p-3 focus:translate-y-0">Skip to content</a>
    <div className="mx-auto max-w-337 px-5 pt-4 sm:px-6 sm:pt-6"><Header page="how-it-works" inset /></div>
    <main id="main-content">
      <HowItWorksHero />
      <WorkflowSection />
      <TeamAiSection />
      <WorkAnywhereSection />
      <ConnectedWorkspaceSection />
      <FeaturesCta titleId="how-it-works-cta-title" workflowHref="#workflow" transparentButtons />
    </main>
    <Footer page="how-it-works" inset />
  </div>
}
