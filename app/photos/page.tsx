export const metadata = {
	title: 'Photos',
	description: 'Film photography.',
};

// Replace src values with your hosted image URLs when ready.
// Recommended: Vercel Blob, Cloudinary, or a public folder in /public.
const photos: { src: string; alt: string }[] = [
	{ src: '', alt: '' },
	{ src: '', alt: '' },
	{ src: '', alt: '' },
	{ src: '', alt: '' },
	{ src: '', alt: '' },
	{ src: '', alt: '' },
];

export default function PhotosPage() {
	return (
		<section>
			<p className='text-sm text-[#666666] mb-8'>
				Shot on Fujifilm GS645S, Yashica T4, and Fujifilm X100VI.
			</p>
			<div className='grid grid-cols-2 gap-3'>
				{photos.map((photo, index) =>
					photo.src ? (
						<img
							key={index}
							src={photo.src}
							alt={photo.alt}
							className='w-full aspect-[3/2] object-cover bg-[#e0e0e0]'
						/>
					) : (
						<div
							key={index}
							className='w-full aspect-[3/2] bg-[#e0e0e0]'
						/>
					)
				)}
			</div>
		</section>
	);
}
