import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import { HashNavigation } from './components/HashNavigation'

export default function App() {
  return (
    <>
      <HashNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </>
  )
}
