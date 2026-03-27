import { metaData } from '@/config';
import { Jobs, Projects } from '@/data/experience-data';
import { Helmet } from 'react-helmet-async';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Experience() {
	const currentYear = new Date().getFullYear();
	const getRolePriority = (item: (typeof Jobs | typeof Projects)[number]) => {
		const hasNoEnd = !item.end;
		const isStarted = item.start <= currentYear;
		const hasFutureOrCurrentEnd =
			typeof item.end === 'number' && item.end >= currentYear;

		// 0: open-ended present roles, 1: fixed-end current roles, 2: ended roles
		if (hasNoEnd && isStarted) return 0;
		if (item.current === true && hasFutureOrCurrentEnd) return 1;
		return 2;
	};

	const workExperience = [...Projects, ...Jobs].sort((a, b) => {
		const aPriority = getRolePriority(a);
		const bPriority = getRolePriority(b);

		if (aPriority !== bPriority) return aPriority - bPriority;
		return b.start - a.start;
	});

	return (
		<section>
			<Helmet>
				<title>Experience | {metaData.name}</title>
				<meta
					name="description"
					content="Work history and experience."
				/>
			</Helmet>
			<h1 className="mb-6 text-sm font-medium tracking-widest uppercase text-[#666666]">
				Experience
			</h1>
			<div className="space-y-8">
				{workExperience.map((item, index) => {
					const isCurrent = getRolePriority(item) < 2;
					const prevItem =
						index > 0 ? workExperience[index - 1] : null;
					const prevIsCurrent = prevItem
						? getRolePriority(prevItem) < 2
						: null;
					const showHeader =
						index === 0 || isCurrent !== prevIsCurrent;

					return (
						<div key={index}>
							{showHeader && (
								<h2 className="text-xs font-medium tracking-widest uppercase text-[#666666] mb-4">
									{isCurrent ? 'Currently' : 'Previously'}
								</h2>
							)}
							<div className="flex items-baseline justify-between gap-4">
								<h3 className="text-[#111111] font-medium tracking-tight">
									{item.role}
								</h3>
								<span className="text-sm text-[#666666] whitespace-nowrap shrink-0">
									{item.start}
									{item.start && item?.end
										? ` – ${item.end}`
										: item?.start > new Date().getFullYear()
											? null
											: ' – Present'}
								</span>
							</div>
							<a
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-sm text-[#666666] hover:text-[#111111] transition-colors inline-flex items-center gap-1 mt-0.5 ${
									item.locked
										? 'cursor-not-allowed pointer-events-none'
										: ''
								}`}
							>
								{item.title}
								<FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
							</a>
							{item.description && (
								<p className="text-sm text-[#444444] mt-2 leading-relaxed">
									{item.description}
								</p>
							)}
							{index === 1 && (
								<div className="border-t border-[#e0e0e0] my-8" />
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
