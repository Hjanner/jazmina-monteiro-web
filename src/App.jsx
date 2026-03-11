import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Upcoming from './pages/Upcoming'
import RebuildPro from './pages/RebuildPro'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upcoming />} />
        <Route path="/rebuildpro" element={<RebuildPro />} />
        <Route path="/gracias" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}
