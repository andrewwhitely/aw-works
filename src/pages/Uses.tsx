import { metaData } from '@/config';
import { Products } from '@/data/uses-data';
import { Helmet } from 'react-helmet-async';

const categories = [
	{ key: 'workspace', label: 'Workspace' },
	{ key: 'equipment', label: 'Equipment' },
	{ key: 'software', label: 'Software' },
	{ key: 'photography', label: 'Photography' },
	{ key: 'gaming', label: 'Gaming' },
	{ key: 'misc', label: 'Miscellaneous' },
];

export default function Uses() {
	return (
		<section>
			<Helmet>
				<title>Uses | {metaData.name}</title>
				<meta
					name="description"
					content="Gear, software, and tools I use regularly."
				/>
			</Helmet>
			<h1 className="mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]">
				Uses
			</h1>

			<div className="space-y-8 mb-8">
				{categories.map(({ key, label }) => {
					const items = Products.filter((p) => p.category === key);
					if (items.length === 0) return null;
					return (
						<div key={key}>
							<p className="text-xs font-medium tracking-widest uppercase text-[#bbbbbb] mb-3">
								{label}
							</p>
							<ul>
								{items.map((product, index) => (
									<li key={index} className="py-1.5">
										<div className="flex items-baseline gap-2">
											<span className="text-sm text-[#111111] shrink-0">
												{product.name}
											</span>
											{product.description && (
												<span className="flex-1 border-b border-dotted border-[#dddddd] mb-[3px] hidden sm:block" />
											)}
											{product.description && (
												<span className="text-xs text-[#999999] shrink-0 hidden sm:block">
													{Array.isArray(
														product.description
													)
														? product.description.join(
																' · '
															)
														: product.description}
												</span>
											)}
										</div>
										{product.description && (
											<p className="text-xs text-[#999999] mt-0.5 sm:hidden text-balance">
												{Array.isArray(
													product.description
												)
													? product.description.join(
															' · '
														)
													: product.description}
											</p>
										)}
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</section>
	);
}
