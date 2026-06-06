import { metaData } from '@/config';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CONTACT_EMAIL = 'andrewnwhitely@gmail.com';

const faqs = [
	{
		title: 'How do I log a game?',
		content: [
			'Tap the + button on the dashboard to start a new game. Enter your scores frame-by-frame as you bowl. Games are saved automatically and roll up into your stats.',
		],
	},
	{
		title: 'How is my handicap calculated?',
		content: [
			'Pins supports the standard USBC formula as well as a custom percentage and base score. Set your preference in Settings → Handicap. Your handicap updates automatically as you log new games.',
		],
	},
	{
		title: 'What is Session mode?',
		content: [
			'Session mode lets you track a multi-game set in a single sitting — for example a three-game league night. Start a session, log each game within it, and Pins keeps the set grouped together with its own averages and trends.',
		],
	},
	{
		title: 'Can I track my equipment?',
		content: [
			'Yes. The equipment tracker lets you catalog the balls in your bag with per-ball notes. You can also build session presets and reference the oil pattern library to set up sessions quickly.',
		],
	},
	{
		title: 'Where is my data stored?',
		content: [
			'Your data lives on your device. Pins is built natively in SwiftUI for iOS 18 and is designed to keep your records private to you.',
		],
	},
];

export default function PinsSupport() {
	return (
		<section className="mb-12">
			<Helmet>
				<title>Pins — Support | {metaData.name}</title>
				<meta
					name="description"
					content="Support and help for Pins, the bowling scorecard and stats tracker for iOS."
				/>
			</Helmet>
			<Link
				to="/works/pins"
				className="text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-4 inline-block link hover-1"
			>
				← Pins
			</Link>

			<div className="mb-8">
				<h1 className="text-2xl font-medium tracking-tight text-[#111111] mb-2">
					Support
				</h1>
				<p className="text-sm text-[#999999]">
					Pins &mdash; bowling scorecard &amp; stats tracker for iOS
				</p>
			</div>

			<div className="space-y-8 max-w-2xl">
				<div>
					<h2 className="text-sm font-medium text-[#111111] mb-3">
						Get in touch
					</h2>
					<p className="text-sm text-[#444444] leading-relaxed mb-2">
						Have a question, found a bug, or want to request a feature?
						I read every message and try to respond within a couple of
						days.
					</p>
					<p className="text-sm text-[#444444] leading-relaxed">
						Email{' '}
						<a
							href={`mailto:${CONTACT_EMAIL}?subject=Pins%20Support`}
							className="link hover-1 text-[#111111]"
						>
							{CONTACT_EMAIL}
						</a>
						.
					</p>
				</div>

				<div>
					<h2 className="text-sm font-medium text-[#111111] mb-3">
						Frequently asked questions
					</h2>
					<div className="space-y-6">
						{faqs.map((faq) => (
							<div key={faq.title}>
								<h3 className="text-sm font-medium text-[#111111] mb-2">
									{faq.title}
								</h3>
								{faq.content.map((para, i) => (
									<p
										key={i}
										className="text-sm text-[#444444] leading-relaxed mb-2 last:mb-0"
									>
										{para}
									</p>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
