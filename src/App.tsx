import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import { HashNavigation } from './components/HashNavigation'

export default function App() {
  return (
    <>
      <HashNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
      </Routes>
    </>
  )
}
