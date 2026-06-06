import { metaData } from '@/config';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'June 5, 2026';
const CONTACT_EMAIL = 'andrewnwhitely@gmail.com';

const sections = [
	{
		title: 'Overview',
		content: [
			'Pins is a bowling scorecard and stats tracker for iOS, built and operated by Andrew Whitely. This Privacy Policy explains what information Pins handles, how it is used, and your rights regarding that information.',
			'By using Pins, you agree to the practices described in this policy.',
		],
	},
	{
		title: 'Information We Collect',
		content: [
			'Pins does not require an account and does not collect personal information about you. The app is designed to keep your data on your device.',
		],
		items: [
			'Bowling data — games, scores, sessions, stats, handicap settings, equipment, and notes you enter manually.',
		],
	},
	{
		title: 'How Your Information Is Used',
		items: [
			'To record your games and calculate stats such as rolling average, high game, strike rate, spare rate, and handicap.',
			'To group games into sessions and display trends over time.',
			'To manage your equipment, session presets, and oil pattern references.',
		],
	},
	{
		title: 'Data Storage & Security',
		content: [
			'Pins does not require an account or sign-up. Your data is stored on your device and, when iCloud is enabled, synced across your devices through your private iCloud account using Apple’s CloudKit. This data lives in your personal iCloud and is governed by Apple’s privacy policy. Pins does not operate its own servers and cannot access your iCloud data.',
			'You can delete your data at any time from within the app. Deleting the app also removes its local data from that device.',
		],
	},
	{
		title: 'Third-Party Services',
		content: [
			'Pins does not sell, rent, or share your personal information with third parties. The app does not include third-party advertising or analytics SDKs that track you.',
		],
	},
	{
		title: 'Your Rights',
		items: [
			'Access — all of your data is viewable within the app.',
			'Correction — you can edit or delete any game, session, or equipment entry at any time.',
			'Deletion — you can delete your data from within the app at any time, and deleting the app removes its local data from that device.',
		],
	},
	{
		title: "Children's Privacy",
		content: [
			'Pins is not directed at children under the age of 13 and does not knowingly collect personal information from children under 13.',
		],
	},
	{
		title: 'Changes to This Policy',
		content: [
			'We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of Pins after changes constitutes acceptance of the updated policy.',
		],
	},
	{
		title: 'Contact',
		content: [
			`If you have any questions about this Privacy Policy or how your data is handled, please reach out at ${CONTACT_EMAIL}.`,
		],
	},
];

export default function PinsPrivacy() {
	return (
		<section className="mb-12">
			<Helmet>
				<title>Pins — Privacy Policy | {metaData.name}</title>
				<meta
					name="description"
					content="Privacy Policy for Pins, the bowling scorecard and stats tracker for iOS."
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
					Privacy Policy
				</h1>
				<p className="text-sm text-[#999999]">
					Pins &mdash; Effective {EFFECTIVE_DATE}
				</p>
			</div>

			<div className="space-y-8 max-w-2xl">
				{sections.map((section) => (
					<div key={section.title}>
						<h2 className="text-sm font-medium text-[#111111] mb-3">
							{section.title}
						</h2>
						{section.content &&
							section.content.map((para, i) => (
								<p
									key={i}
									className="text-sm text-[#444444] leading-relaxed mb-2 last:mb-0"
								>
									{para}
								</p>
							))}
						{section.items && (
							<ul className="space-y-2 mt-2">
								{section.items.map((item, i) => (
									<li
										key={i}
										className="text-sm text-[#444444] leading-relaxed flex gap-2"
									>
										<span className="text-[#bbbbbb] shrink-0">
											–
										</span>
										{item}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
