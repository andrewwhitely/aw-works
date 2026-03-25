import { Navbar } from "@/components/Navbar";
import About from "@/pages/About";
import Bookmarks from "@/pages/Bookmarks";
import ErrorPage from "@/pages/ErrorPage";
import Experience from "@/pages/Experience";
import FieldNotes from "@/pages/FieldNotes";
import FieldNotesPost from "@/pages/FieldNotesPost";
import Friends from "@/pages/Friends";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Now from "@/pages/Now";
import Photos from "@/pages/Photos";
import TagDetail from "@/pages/TagDetail";
import Tags from "@/pages/Tags";
import Uses from "@/pages/Uses";
import WorkDetail from "@/pages/WorkDetail";
import Works from "@/pages/Works";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <body className="antialiased min-h-screen flex flex-col mx-auto">
          <main className="container mx-auto flex-1 min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
              <Route
                path="/about"
                element={<About />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/experience"
                element={<Experience />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/works"
                element={<Works />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/works/:slug"
                element={<WorkDetail />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/fieldnotes"
                element={<FieldNotes />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/fieldnotes/tags"
                element={<Tags />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/fieldnotes/tags/:tag"
                element={<TagDetail />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/fieldnotes/:slug"
                element={<FieldNotesPost />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/friends"
                element={<Friends />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/uses"
                element={<Uses />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/now"
                element={<Now />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/photos"
                element={<Photos />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/bookmarks"
                element={<Bookmarks />}
                errorElement={<ErrorPage />}
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </body>
      </BrowserRouter>
    </HelmetProvider>
  );
}
