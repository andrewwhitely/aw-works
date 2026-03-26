interface Env {
	awphotostudio: R2Bucket;
	R2_PUBLIC_URL: string;
}

export interface PhotoItem {
	key: string;
	url: string;
	tag: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
	const { awphotostudio, R2_PUBLIC_URL } = context.env;

	const listed = await awphotostudio.list();

	const photos: PhotoItem[] = listed.objects
		.filter((obj) => /\.(jpe?g|png|webp|avif|gif)$/i.test(obj.key))
		.map((obj) => {
			// Derive tag from folder prefix e.g. "cdmx/photo.jpg" → "cdmx"
			const slashIndex = obj.key.indexOf('/');
			const tag = slashIndex !== -1 ? obj.key.slice(0, slashIndex) : '';
			return {
				key: obj.key,
				url: `${R2_PUBLIC_URL}/${obj.key}`,
				tag,
			};
		});

	return Response.json(photos, {
		headers: {
			'Cache-Control': 'public, max-age=60',
		},
	});
};
