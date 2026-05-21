import Footer from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { PageTransition } from '@/components/PageTransition';
import About from '@/pages/About';
import Bookmarks from '@/pages/Bookmarks';
import ErrorPage from '@/pages/ErrorPage';
import Experience from '@/pages/Experience';
import FieldNotes from '@/pages/FieldNotes';
import FieldNotesPost from '@/pages/FieldNotesPost';
import Friends from '@/pages/Friends';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Photos from '@/pages/Photos';
import TagDetail from '@/pages/TagDetail';
import Tags from '@/pages/Tags';
import Uses from '@/pages/Uses';
import WorkDetail from '@/pages/WorkDetail';
import Works from '@/pages/Works';
import StashPrivacy from '@/pages/StashPrivacy';
import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<PageTransition>
							<Home />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/about"
					element={
						<PageTransition>
							<About />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/experience"
					element={
						<PageTransition>
							<Experience />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/works"
					element={
						<PageTransition>
							<Works />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/works/stash/privacy"
					element={
						<PageTransition>
							<StashPrivacy />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/works/:slug"
					element={
						<PageTransition>
							<WorkDetail />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/fieldnotes"
					element={
						<PageTransition>
							<FieldNotes />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/fieldnotes/tags"
					element={
						<PageTransition>
							<Tags />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/fieldnotes/tags/:tag"
					element={
						<PageTransition>
							<TagDetail />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/fieldnotes/:slug"
					element={
						<PageTransition>
							<FieldNotesPost />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/friends"
					element={
						<PageTransition>
							<Friends />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/uses"
					element={
						<PageTransition>
							<Uses />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/photos"
					element={
						<PageTransition>
							<Photos />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/bookmarks"
					element={
						<PageTransition>
							<Bookmarks />
						</PageTransition>
					}
					errorElement={<ErrorPage />}
				/>
				<Route
					path="/404"
					element={
						<PageTransition>
							<NotFound />
						</PageTransition>
					}
				/>
				<Route
					path="*"
					element={
						<PageTransition>
							<NotFound />
						</PageTransition>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
}

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 900);
		return () => clearTimeout(timer);
	}, []);

	return (
		<HelmetProvider>
			<BrowserRouter>
				<LoadingScreen visible={loading} />
				<body className="antialiased min-h-screen flex flex-col mx-auto">
					<main className="container mx-auto flex-1 min-w-0 my-2 md:my-6 flex flex-col px-6 sm:px-4 md:px-0 w-full">
						<Navbar />
						<AnimatedRoutes />
						<Footer />
					</main>
				<ScrollToTop />
				</body>
			</BrowserRouter>
		</HelmetProvider>
	);
}
