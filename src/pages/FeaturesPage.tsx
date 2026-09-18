import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FeaturesHero } from '../components/features/FeaturesHero'
import { ProblemsSection } from '../components/features/ProblemsSection'
import { FeatureDetails } from '../components/features/FeatureDetails'
import { TasksSection } from '../components/features/TasksSection'
import { FeaturesCta } from '../components/features/FeaturesCta'

export default function FeaturesPage() {
  return <div className="bg-[#fafbfb] font-sans text-black [&_section]:scroll-mt-6 [&_footer]:scroll-mt-6">
    <a href="#main-content" className="fixed top-2.5 left-5 z-100 translate-y-[-180%] bg-white p-3 focus:translate-y-0">Skip to content</a>
    <div className="mx-auto max-w-337 px-5 pt-4 sm:px-6 sm:pt-6">
      <Header page="features" inset />
    </div>
    <main id="main-content">
      <FeaturesHero />
      <ProblemsSection />
      <FeatureDetails />
      <TasksSection />
      <FeaturesCta />
    </main>
    <Footer page="features" inset />
  </div>
}
