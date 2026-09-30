import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Toggle from '../components/Toggle';
// import { useTypewriter, type Cycle } from '../hooks/useTypewriter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { loadCatalog, formatDate } from '../lib/blog';
import nowData from '../content/now.json'
import { useClock } from '../hooks/useClock';

// const BASE_CYCLES: Cycle[] = [
// 	{
// 		cmd: 'whoami',
// 		out: ['creative technologist', 'chronic new hobbyist', 'software engineer'],
// 	},
// 	{
// 		cmd: 'head -5 interests/work.txt',
// 		out: [
// 			'fullstack development',
// 			'ui/ux design',
// 			'0->1 product development',
// 			'ai workflows',
// 			'user & product focused design systems',
// 		],
// 	},
// 	{ cmd: 'echo $LOCATION', out: 'Charlotte, NC' },
// 	{
// 		cmd: 'jq .interests profile.json',
// 		out: "['cycling', 'photography', 'movies', 'reading', 'longform youtube videos']",
// 	},
// 	{ cmd: 'ls -1 notes/', out: ['job-hunting-in-2026'] },
// ];

const NOW_GROUPS: { key: keyof typeof nowData; label: string }[] = [
  { key: 'reading', label: 'reading' },
  { key: 'listening', label: 'listening' },
  { key: 'watching', label: 'watching' },
]

export default function Home() {
	const posts = loadCatalog();
	// const cycles = useMemo(
	// 	() =>
	// 		BASE_CYCLES.map((c) =>
	// 			c.cmd === 'ls -1 notes/' ? { ...c, out: posts.map((p) => p.slug) } : c,
	// 		),
	// 	[posts],
	// );
	// const { cmd, out } = useTypewriter(cycles);
	// const outLines = Array.isArray(out) ? out : out ? [out] : [];

	const { myTime, userTime } = useClock()

	useDocumentMeta({
		title: 'Andrew Whitely',
		description: 'Senior Software Engineer at Incerta Intel.',
		url: 'https://aw.works',
		type: 'website',
	});

	return (
		<Layout>
			<main className='wrap'>
				{/* HERO */}
				<section id='home'>
					<div className='prompt' style={{ marginBottom: '0.3rem' }}>
						<span className='ps1'>~ » $</span>
						<span className='cmd'>ssh</span>
						<span className='arg'>visitor@aw.works</span>
					</div>
					<div
						style={{
							fontSize: '0.8rem',
							color: 'var(--dim)',
							marginBottom: '0.75rem',
						}}
					>
						Connected to visitor@aw.works. Welcome.
					</div>

					<div className='hero-out'>
						<div className='hero-name'>Andrew Whitely</div>
						<div
							style={{
								fontSize: '0.75rem',
								color: 'var(--dim)',
								marginTop: '0.3rem',
								letterSpacing: '0.02em',
							}}
						>
							pronounced "white-lee" · he/him
						</div>
						<div className='hero-role'>
              // Senior Software Engineer @{' '}
							<a
								href='https://incertaintel.ai/'
								target='_blank'
								rel='noopener'
								style={{ color: 'inherit' }}
							>
								Incerta Intel
							</a>
						</div>

						{/* <div className='hero-links'>
							<Link to='/notes' className='hl'>
								field notes
							</Link>
							<a
								href='https://linkedin.com/in/andrewwhitely'
								target='_blank'
								rel='noopener'
								className='hl'
							>
								linkedin
							</a>
							<a
								href='https://github.com/andrewwhitely'
								target='_blank'
								rel='noopener'
								className='hl'
							>
								github
							</a>
						</div> */}
					</div>

					{/* <div className='prompt'>
						<span className='ps1'>~ » $</span>
						<span>{cmd}</span>
						<span className='cursor' />
					</div>
					<div
						style={{
							paddingLeft: '1.5rem',
							fontSize: '0.82rem',
							color: 'var(--dim)',
							minHeight: '1.4em',
							marginTop: '0.2rem',
						}}
					>
						{outLines.map((line, i) => (
							<div key={i}>&gt; {line}</div>
						))}
					</div> */}
					
					<div className="footer-now">
						<div><span className="now-label">my time</span> {myTime}</div>
						{myTime !== userTime && <div><span className="now-label">your time</span> {userTime}</div>}
						{NOW_GROUPS.map(({ key, label }) => (
							nowData[key].length > 0 && (
								<div key={key}>
									<span className="now-label">{label}</span>{' '}
									{nowData[key].map((item, i) => (
										<span key={i}>
											{item.href ? <a href={item.href} target="_blank" rel="noopener">{item.value}</a> : item.value}
											{i < nowData[key].length - 1 ? ', ' : ''}
										</span>
									))}
								</div>
							)
						))}
					</div>
				</section>

				{/* ABOUT */}
				<section id='about'>
					<div className='sec-heading'>
						<span className='hash'>#</span>
						<span className='label'>about</span>
					</div>
					<div className='about-text'>
						<p>
							I recently joined{' '}
							<a
								href='https://incertaintel.ai'
								target='_blank'
								rel='noopener'
								className='hl-cyan'
							>
								Incerta Intel
							</a>{' '}
							as a Senior Software Engineer. Previously, I spent almost 4 years
							at{' '}
							<a
								href='https://boozallen.com'
								target='_blank'
								rel='noopener'
								className='hl-cyan'
							>
								Booz Allen Hamilton
							</a>{' '}
							as a Senior Software Engineer, building enterprise applications,
							infrastructure, and platforms.
						</p>
						<p>
							Before that, I was a Senior Software Engineer at{' '}
							<a
								href='https://www.firstfloor.app'
								target='_blank'
								rel='noopener'
								className='hl-cyan'
							>
								FirstFloor Studios
							</a>{' '}
							(🪦), and a Software Engineer at{' '}
							<a
								href='https://www.capitalone.com'
								target='_blank'
								rel='noopener'
								className='hl-cyan'
							>
								Capital One
							</a>
							.
						</p>
						<p>
							In my free time, I build a slew of products and apps under{' '}
							<a
								href='https://www.lunchbox.studio'
								target='_blank'
								rel='noopener'
								className='hl-cyan'
							>
								Lunchbox Studios
							</a>
							.
						</p>
					</div>

					<div style={{ marginTop: '1.75rem' }}>
						<div className='prompt' style={{ marginBottom: '0.4rem' }}>
							<span className='ps1'>~ » $</span>
							<span className='cmd'>git</span>
							<span className='arg'>log --oneline career</span>
						</div>
						<div style={{ marginTop: '0.35rem' }}>
							<Toggle
								className='git-log-btn'
								labelClosed='[+ git log]'
								labelOpen='[- git log]'
							>
								<div
									style={{
										fontFamily: 'inherit',
										fontSize: '0.8rem',
										lineHeight: 1.9,
										paddingLeft: '0.1rem',
									}}
								>
									<div>
										<span style={{ color: 'var(--green)' }}>fb55e86</span>{' '}
										<span style={{ color: 'var(--faint)' }}>2026-10</span>{' '}
										&nbsp;
										<span style={{ color: 'var(--dim)' }}>
											feat: joined Incerta Intel as a Senior Software Engineer
										</span>{' '}
										<span style={{ color: 'var(--purple)' }}>(HEAD)</span>
									</div>
									<div>
										<span style={{ color: 'var(--yellow)' }}>158e56c</span>{' '}
										<span style={{ color: 'var(--faint)' }}>2026-01</span>{' '}
										&nbsp;
										<span style={{ color: 'var(--cyan)' }}>
											promo: Senior Software Engineer
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--yellow)' }}>3d05fd6</span>{' '}
										<span style={{ color: 'var(--faint)' }}>2023-01</span>{' '}
										&nbsp;
										<span style={{ color: 'var(--dim)' }}>
											feat: joined Booz Allen Hamilton as Software Engineer
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--yellow)' }}>3c7effa</span>{' '}
										<span style={{ color: 'var(--faint)' }}>2022-10</span>{' '}
										&nbsp;
										<span style={{ color: 'var(--dim)' }}>
											chore: job search
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--yellow)' }}>bd4b533</span>{' '}
										<span style={{ color: 'var(--faint)' }}>2022-02</span>{' '}
										&nbsp;
										<span style={{ color: 'var(--dim)' }}>
											feat: joined FirstFloor Studios as a Senior Software
											Engineer
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--yellow)' }}>8a5d67e</span>{' '}
										<span style={{ color: 'var(--faint)' }}>2018-07</span>{' '}
										&nbsp;
										<span style={{ color: 'var(--dim)' }}>
											feat: joined Capital One as a Software Engineer in the
											CODA and TDP programs
										</span>
									</div>
								</div>
							</Toggle>
						</div>
					</div>

					<div style={{ marginTop: '1.75rem' }}>
						<div className='prompt' style={{ marginBottom: '0.4rem' }}>
							<span className='ps1'>~ » $</span>
							<span className='cmd'>id</span>
							<span className='arg'>andrewwhitely</span>
						</div>
						<div style={{ marginTop: '0.35rem' }}>
							<Toggle
								className='git-log-btn'
								labelClosed='[+ more]'
								labelOpen='[- less]'
							>
								<div
									style={{
										fontFamily: 'inherit',
										fontSize: '0.8rem',
										lineHeight: 1.9,
										paddingLeft: '0.1rem',
									}}
								>
									<div>
										<span style={{ color: 'var(--dim)' }}>roles:</span>{' '}
										<span style={{ color: 'var(--text)' }}>
											creative technologist · chronic new hobbyist ·
											software engineer · "founder"
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--dim)' }}>location:</span>{' '}
										<span style={{ color: 'var(--text)' }}>
											charlotte, nc
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--dim)' }}>interests:</span>{' '}
										<span style={{ color: 'var(--text)' }}>
											cycling, photography, movies, reading, longform
											youtube videos
										</span>
									</div>
									<div>
										<span style={{ color: 'var(--dim)' }}>bio:</span>{' '}
										<span style={{ color: 'var(--text)' }}>
											as early as i can remember, i was always finding ways to build things on my computer — virtual servers to host radio stations, spinning up web forums, developing games. i always had a passion for making things that looked great, felt great, and helped people. my first <em>oh, wow</em> moment was when i would spend hours making <a href="https://x.com/ilyamiskov/status/1679535386987462656" target="_blank" rel="noopener noreferrer">userbars</a> on a RuneScape private server forum. i was obsessed with exploring Photoshop and just learning as much as i could about design. i like to think that this exposure and love for how i was able to create such simple graphics has stuck with me and is a driving force that i bring to the products i build today.
										</span>
									</div>
								</div>
							</Toggle>
						</div>
					</div>
				</section>

				{/* EXPERIENCE */}
				<section id='experience'>
					<div className='sec-heading'>
						<span className='hash'>#</span>
						<span className='label'>work experience</span>
					</div>

					{/* Incerta */}
					<div className='exp-block'>
						<div className='exp-company'>
							<a
								href='https://incertaintel.ai'
								target='_blank'
								rel='noopener'
								style={{ color: 'inherit' }}
							>
								Incerta Intel
							</a>
						</div>
						<div className='exp-loc'>Charlotte, NC</div>
						<div className='exp-role'>
							<div className='exp-role-hd'>
								<span className='exp-title'>Senior Software Engineer</span>
								{/* <span className='exp-date'>-</span> */}
							</div>
							<ul className='exp-list'>
								<li>Coming soon.</li>
							</ul>
						</div>
					</div>

					{/* Lunchbox */}
					<div className='exp-block'>
						<div className='exp-company'>
							<a
								href='https://www.lunchbox.studio'
								target='_blank'
								rel='noopener'
								style={{ color: 'inherit' }}
							>
								Lunchbox Studios
							</a>
						</div>
						<div className='exp-loc'>Charlotte, NC</div>
						<div className='exp-role'>
							<div className='exp-role-hd'>
								<span className='exp-title'>
									Founder
								</span>
								{/* <span className='exp-date'>Jan 2025 - Present</span> */}
							</div>
							<ul className='exp-list'>
								<li>
									Designing, building, and launching a portfolio of full-stack web, desktop, and mobile products for myself and others.
								</li>
							</ul>
						</div>
					</div>


					<details className='exp-earlier'>
						<summary>
							earlier experience — Booz Allen Hamilton, Surely + Work, FirstFloor Studios, Capital One (2018 - 2026)
						</summary>

						{/* Booz */}
						<div className='exp-block'>
							<div className='exp-company'>
								<a
									href='https://boozallen.com/'
									target='_blank'
									rel='noopener'
									style={{ color: 'inherit' }}
								>
									Booz Allen Hamilton
								</a>
							</div>
							<div className='exp-loc'>Remote</div>

							<div className='exp-role'>
								<div className='exp-role-hd'>
									<span className='exp-title'>Senior Software Engineer</span>
									<span className='exp-date'>Jan 2026 - Oct 2026</span>
								</div>
								<ul className='exp-list'>
									<li>
										<span>
											Received the 🦉{' '}
											<a
												href='https://lnkd.in/p/gW96isHW'
												target='_blank'
												rel='noopener'
												className='hl-cyan'
											>
												Duolingo Innovation Award
											</a>{' '}
											for building the Temporal platform, presented by CEO and
											co-founder{' '}
											<a
												href='https://www.linkedin.com/in/luis-von-ahn-duolingo/'
												target='_blank'
												rel='noopener'
												className='hl-cyan'
											>
												Luis von Ahn
											</a>
											.
										</span>
									</li>
								</ul>
							</div>

							<div className='exp-role'>
								<div className='exp-role-hd'>
									<span className='exp-title'>Software Engineer</span>
									<span className='exp-date'>Jan 2023 - Dec 2025</span>
								</div>
								<ul className='exp-list'>
									<li>
										Championed Temporal adoption at Duolingo from 0-&gt;1:
										introduced the technology, built foundational infrastructure
										from scratch, fostered a cross-org community, and scaled it
										into an org-wide durable workflow platform powering 230+
										production workflows across 20+ teams, growing to 17M+
										Temporal Cloud actions/month — establishing Duolingo as a
										recognized reference implementation in the Temporal ecosystem.
									</li>
								</ul>
							</div>
						</div>

						{/* Surely */}
						<div className='exp-block'>
							<div className='exp-company'>
								<a
									href='https://www.surelywork.com'
									target='_blank'
									rel='noopener'
									style={{ color: 'inherit' }}
								>
									Surely + Work
								</a>
							</div>
							<div className='exp-loc'>Remote</div>
							<div className='exp-role'>
								<div className='exp-role-hd'>
									<span className='exp-title'>
										Senior Software Engineer
									</span>
									<span className='exp-date'>Mar 2023 - Dec 2025</span>
								</div>
								<ul className='exp-list'>
									<li>
										Owned the codebase and led all feature development for a platform focused on connecting creatives and freelancers to industry employers and opportunities, drove a 12% increase in user engagement and 5% subscription growth.
									</li>
								</ul>
							</div>
						</div>


						{/* FF */}
						<div className='exp-block'>
							<div className='exp-company'>
								<a
									href='https://www.firstfloor.app'
									target='_blank'
									rel='noopener'
									style={{ color: 'inherit' }}
								>
									FirstFloor Studios
								</a>{' '}
								<span className='exp-company-note'>(🪦)</span>
							</div>
							<div className='exp-loc'>Remote</div>
							<div className='exp-role'>
								<div className='exp-role-hd'>
									<span className='exp-title'>
										Senior Software Engineer
									</span>
									<span className='exp-date'>Feb 2018 - Jul 2021</span>
								</div>
								<ul className='exp-list'>
									<li>
										Built out features for the first mobile-first web3 marketplace and owned the web experience for NFT auctions, smart contract creation and publishing on the Ethereum blockchain, and minting flow all from the palm of your hand.
									</li>
								</ul>
							</div>
						</div>

						{/* C1 */}
						<div className='exp-block'>
							<div className='exp-company'>
								<a
									href='https://capitalone.com'
									target='_blank'
									rel='noopener'
									style={{ color: 'inherit' }}
								>
									Capital One
								</a>
							</div>
							<div className='exp-loc'>McLean, VA</div>
							<div className='exp-role'>
								<div className='exp-role-hd'>
									<span className='exp-title'>
										Software Engineer, Technology Development Program
									</span>
									<span className='exp-date'>Mar 2019 - Feb 2022</span>
								</div>
								<ul className='exp-list'>
									<li>
										Owned and contributed to feature development for internal and external teams with a variety of languages and frameworks - React, Next, Node, Python, GraphQL, Swift, Kotlin, AWS, and more - ranging from the flagship Capital One application on iOS and Android; built internal tooling for product managers; developed and maintained cyber/senior leadership/C-suite dashboards for compliance data analytics and metrics.
									</li>
								</ul>
							</div>
							<div className='exp-role'>
								<div className='exp-role-hd'>
									<span className='exp-title'>Software Engineer, CODA</span>
									<span className='exp-date'>Jul 2018 - Feb 2019</span>
								</div>
								<ul className='exp-list'>
									<li>
										Joining as a new-grad - the CODA program was a 6-month in-house boot camp geared towards non-computer science students to onboard, train, and integrate us into software engineers. Focusing on modern fullstack web development from 0-&gt;1, we culminated the cohort by partnering with teams around the company and shipped real features to their products.
									</li>
								</ul>
							</div>
						</div>
					</details>
				</section>

				{/* EDUCATION */}
				<section id='education'>
					<div className='sec-heading'>
						<span className='hash'>#</span>
						<span className='label'>education</span>
					</div>

					<div className='edu-item'>
						<div className='edu-row'>
							<div className='edu-body'>
								<div className='edu-school'>
									<a
										href='https://fsu.edu'
										target='_blank'
										rel='noopener'
										style={{ color: 'inherit' }}
									>
										Florida State University
									</a>
								</div>
								<div className='edu-sub'>
									<a
										href='https://www.cci.fsu.edu'
										target='_blank'
										rel='noopener'
										style={{ color: 'inherit' }}
									>
										College of Communication &amp; Information
									</a>
								</div>
								<div className='edu-deg'>
									Bachelor of Science in Information Technology
								</div>
								<div className='edu-deg-sub'>Minor in Computer Science</div>
								<div className='edu-deg-sub'>
									Focus in Application Development and User-Centered Design
								</div>
							</div>
							<div className='edu-side'>
								<div className='edu-sub'>Tallahassee, FL</div>
								<div className='edu-date'>Aug 2014 - May 2018</div>
							</div>
						</div>
						<div style={{ marginTop: '0.4rem' }}>
							<Toggle
								className='edu-toggle-btn'
								labelClosed='[+ more]'
								labelOpen='[- less]'
							>
								<div className='edu-detail'>
									<div style={{ color: 'var(--dim)', marginBottom: '0.2rem' }}>
										Courses
									</div>
									<div>
										· <span style={{ color: 'var(--dim)' }}>Systems:</span>{' '}
										Information Systems & Services
									</div>
									<div>
										· <span style={{ color: 'var(--dim)' }}>Coding:</span>{' '}
										Object-Oriented Programming (C++), Web App Development, Mobile App Development, Database Design, Database Management, Database Analysis, Introduction to UNIX
									</div>
									<div style={{ marginTop: '0.2rem' }}>
										·{' '}
										<span style={{ color: 'var(--dim)' }}>
											UX/UI:
										</span>{' '}
										User Experience Design, Information Architecture, UX/UI Research
									</div>
									<div
										style={{
											color: 'var(--dim)',
											marginTop: '0.5rem',
											marginBottom: '0.2rem',
										}}
									>
										Leadership
									</div>
									<div>
										·{' '}
										<span style={{ color: 'var(--dim)' }}>
											STARS Leadership Alliance:
										</span> Executive Board Member
									</div>
									<div style={{ paddingLeft: '0.75rem', marginTop: '0.1rem' }}>
										Worked to increase participation and engagement of K-12 and college students in STEM activities and grow the IT/computing workforce.
									</div>
									<div>
										·{' '}
										<span style={{ color: 'var(--dim)' }}>
											Codeducation:
										</span> President
									</div>
									<div style={{ paddingLeft: '0.75rem', marginTop: '0.1rem' }}>
										Led an organization to introduce non-STEM students to coding through community volunteer efforts and campus workshops. Topics ranged from HTML/CSS, web design and development, git, and more.
									</div>
								</div>
							</Toggle>
						</div>
					</div>
				</section>

				{/* BLOG */}
				<section id='blog'>
					<div className='sec-heading'>
						<span className='hash'>#</span>
						<span className='label'>field notes</span>
					</div>
					<div id='blog-list' data-variant='home'>
						{posts.map((post) => (
							<div className='blog-item' key={post.slug}>
								<div>
									<div className='talk-meta'>
										<span className='badge badge-blog'>field notes</span>
									</div>
									<div className='blog-title'>
										<Link to={`/notes/${post.slug}`}>{post.title}</Link>
									</div>
								</div>
								<div className='blog-date'>
									{formatDate(post.date, 'short')}
								</div>
							</div>
						))}
					</div>
					<div style={{ marginTop: '0.85rem' }}>
						<Link
							to='/notes'
							style={{ fontSize: '0.75rem', color: 'var(--dim)' }}
						>
							~ » $ cd notes/ →
						</Link>
					</div>
				</section>

			</main>
		</Layout>
	);
}
