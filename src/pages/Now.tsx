import { Helmet } from 'react-helmet-async';
import { nowData } from '@/data/now-data';
import { metaData } from '@/config';

export default function Now() {
	const { lastUpdated, working, reading, listening, watching } = nowData;

	return (
		<section>
			<Helmet>
				<title>Now | {metaData.name}</title>
				<meta name="description" content="What I'm up to right now." />
			</Helmet>
			<p className="text-sm text-[#999999] mb-8">
				Last updated {lastUpdated}.
			</p>
			<div className="prose prose-neutral space-y-8">
				<div>
					<h2 className="text-sm font-medium tracking-widest uppercase text-[#666666] mb-3">
						{working.label}
					</h2>
					<p className="text-[#111111]">
						{working.value}.{' '}
						{working.detail && working.detailHref && (
							<>
								Also building{' '}
								<a
									href={working.detailHref}
									target="_blank"
									rel="noopener noreferrer"
								>
									Lunchbox Studio
								</a>
								, a small creative studio for side projects and
								experiments.
							</>
						)}
					</p>
				</div>
				<div>
					<h2 className="text-sm font-medium tracking-widest uppercase text-[#666666] mb-3">
						{reading.label}
					</h2>
					<p className="text-[#111111]">
						{reading.href ? (
							<a
								href={reading.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{reading.value}
							</a>
						) : (
							reading.value
						)}
					</p>
				</div>
				<div>
					<h2 className="text-sm font-medium tracking-widest uppercase text-[#666666] mb-3">
						{listening.label}
					</h2>
					<p className="text-[#111111]">
						{listening.href ? (
							<a
								href={listening.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{listening.value}
							</a>
						) : (
							listening.value
						)}
					</p>
				</div>
				<div>
					<h2 className="text-sm font-medium tracking-widest uppercase text-[#666666] mb-3">
						{watching.label}
					</h2>
					<p className="text-[#111111]">
						{watching.href ? (
							<a
								href={watching.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{watching.value}
							</a>
						) : (
							watching.value
						)}
					</p>
				</div>
			</div>
		</section>
	);
}
