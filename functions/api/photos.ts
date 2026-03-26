/// <reference types="@cloudflare/workers-types" />

interface Env {
	awphotostudio: R2Bucket;
	R2_PUBLIC_URL: string;
}

export interface PhotoItem {
	key: string;
	url: string;
	tag: string;
}

export interface PhotosResponse {
	photos: PhotoItem[];
	cursor: string | null;
}

const PAGE_SIZE = 24;

export const onRequest: PagesFunction<Env> = async (context) => {
	const { awphotostudio, R2_PUBLIC_URL } = context.env;
	const params = new URL(context.request.url).searchParams;
	const cursor = params.get('cursor') ?? undefined;

	const listed = await awphotostudio.list({
		limit: PAGE_SIZE,
		cursor,
	});

	const photos: PhotoItem[] = listed.objects
		.filter((obj) => /\.(jpe?g|png|webp|avif|gif)$/i.test(obj.key))
		.map((obj) => {
			const slashIndex = obj.key.indexOf('/');
			const tag = slashIndex !== -1 ? obj.key.slice(0, slashIndex) : '';
			return {
				key: obj.key,
				url: `${R2_PUBLIC_URL}/${obj.key}`,
				tag,
			};
		});

	const response: PhotosResponse = {
		photos,
		cursor: listed.truncated ? (listed.cursor ?? null) : null,
	};

	return Response.json(response, {
		headers: { 'Cache-Control': 'public, max-age=60' },
	});
};
