import { metaData } from '@/config';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'May 21, 2026';
const CONTACT_EMAIL = 'andrewnwhitely@gmail.com';

const sections = [
	{
		title: 'Overview',
		content: [
			'Stash is a personal wishlist tracker built and operated by Andrew Whitely. This Privacy Policy explains what information is collected when you use Stash, how it is used, and your rights regarding that information.',
			'By using Stash, you agree to the practices described in this policy.',
		],
	},
	{
		title: 'Information We Collect',
		items: [
			'Account information — email address and password when you create an account.',
			'Wishlist data — items you add, including product names, URLs, prices, notes, and categories.',
			'Usage data — basic app interactions used to improve the experience (e.g. features used, errors encountered).',
			'Device information — device type, OS version, and app version for debugging and compatibility.',
		],
	},
	{
		title: 'How We Use Your Information',
		items: [
			'To provide and maintain the Stash service across your devices.',
			'To sync your wishlist data between iOS and desktop.',
			'To display price history and purchase tracking for your items.',
			'To improve the app based on usage patterns and bug reports.',
			'To communicate important updates about the service.',
		],
	},
	{
		title: 'Data Storage & Security',
		content: [
			'Your data is stored securely and is only accessible to your account. We use industry-standard encryption for data in transit and at rest. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
		],
	},
	{
		title: 'Third-Party Services',
		content: [
			'Stash may use third-party services for authentication, data storage, and analytics. These services have their own privacy policies and only receive the minimum data necessary to function. We do not share your wishlist data with advertisers or data brokers.',
		],
	},
	{
		title: 'Data Retention',
		content: [
			'Your data is retained for as long as your account is active. You may delete your account at any time from the app settings, which will permanently remove all associated data within 30 days.',
		],
	},
	{
		title: 'Your Rights',
		items: [
			'Access — you can view all data associated with your account in the app.',
			'Correction — you can edit or update your information at any time.',
			'Deletion — you can delete your account and all associated data.',
			'Export — you can request a copy of your data by contacting us.',
		],
	},
	{
		title: "Children's Privacy",
		content: [
			'Stash is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it.',
		],
	},
	{
		title: 'Changes to This Policy',
		content: [
			'We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of Stash after changes constitutes acceptance of the updated policy.',
		],
	},
	{
		title: 'Contact',
		content: [
			`If you have any questions about this Privacy Policy or how your data is handled, please reach out at ${CONTACT_EMAIL}.`,
		],
	},
];

export default function StashPrivacy() {
	return (
		<section className="mb-12">
			<Helmet>
				<title>Stash — Privacy Policy | {metaData.name}</title>
				<meta
					name="description"
					content="Privacy Policy for the Stash wishlist tracking app."
				/>
			</Helmet>
			<Link
				to="/works/stash"
				className="text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-4 inline-block link hover-1"
			>
				← Stash
			</Link>

			<div className="mb-8">
				<h1 className="text-2xl font-medium tracking-tight text-[#111111] mb-2">
					Privacy Policy
				</h1>
				<p className="text-sm text-[#999999]">
					Stash &mdash; Effective {EFFECTIVE_DATE}
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
							<ul className="space-y-2">
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
