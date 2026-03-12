import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Upcoming from './pages/Upcoming'
import RebuildPro from './pages/RebuildPro'
import ThankYou from './pages/ThankYou'
import Recurso from './pages/Recurso'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upcoming />} />
        <Route path="/rebuildpro" element={<RebuildPro />} />
        <Route path="/recurso" element={<Recurso />} />
        <Route path="/gracias" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}
