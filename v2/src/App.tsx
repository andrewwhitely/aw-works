import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import FieldNotesIndex from './pages/FieldNotesIndex'
import FieldNote from './pages/FieldNote'
import Tags from './pages/Tags'
import TagDetail from './pages/TagDetail'
// import Calendar from './pages/Calendar'
import NotFound from './pages/NotFound'
import Friends from './pages/Friends'
import Uses from './pages/Uses'
import Photos from './pages/Photos'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import Bookmarks from './pages/Bookmarks'
import PinsPrivacy from './pages/PinsPrivacy'
import PinsSupport from './pages/PinsSupport'
import StashPrivacy from './pages/StashPrivacy'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<FieldNotesIndex />} />
        <Route path="/notes/tags" element={<Tags />} />
        <Route path="/notes/tags/:tag" element={<TagDetail />} />
        <Route path="/notes/:slug" element={<FieldNote />} />
        <Route path="/photos/" element={<Photos />} />
        <Route path="/friends/" element={<Friends />} />
        <Route path="/uses/" element={<Uses />} />
        <Route path="/works/" element={<Works />} />
        <Route path="/works/stash/privacy" element={<StashPrivacy />} />
        <Route path="/works/pins/support" element={<PinsSupport />} />
        <Route path="/works/pins/privacy" element={<PinsPrivacy />} />
        <Route path="/works/:slug" element={<WorkDetail />} />
        <Route path="/bookmarks/" element={<Bookmarks />} />
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
