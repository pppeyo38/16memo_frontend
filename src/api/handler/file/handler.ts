import { rest } from "msw";
import { FileType, FileWithMemoInfoType, FileWithMemosType } from "./type";

// GET /files
export const getFiles = rest.get("/files", (_, res, ctx) => {
	const resBody: FileWithMemoInfoType[] = [
		{
			id: 1,
			name: "すみっコぐらし",
			userId: 1,
			memo: {
				mainColor: ["d0eaea", "f3daac", "fffde4", "ffffff"],
				colorNum: 5,
			},
		},
		{
			id: 2,
			name: "とかげ",
			userId: 1,
			memo: {
				mainColor: ["d0eaea", "fffde4", "a0d7e2"],
				colorNum: 3,
			},
		},
		{
			id: 3,
			name: "とんかつ",
			userId: 1,
			memo: {
				mainColor: ["f3daac", "fbdfdb"],
				colorNum: 2,
			},
		},
	];
	return res(ctx.status(200), ctx.json(resBody));
});

// GET /files/:id
export const getFilesID = rest.get<{}, { id: string }>(
	"/files/:id",
	(req, res, ctx) => {
		const { id } = req.params;
		const resBody: FileWithMemosType = {
			id: +id,
			name: "すみっコぐらし",
			userId: 1,
			memos: [
				{
					id: 1,
					colorCode: "d0eaea",
					comment: "とかげかわいい",
					url: "https://www.san-x.co.jp/sumikko/",
					tagName: "とかげ",
				},
				{
					id: 2,
					colorCode: "f3daac",
					comment: "とんかつかわいい",
					url: "https://www.san-x.co.jp/sumikko/",
					tagName: "とんかつ",
				},
				{
					id: 3,
					colorCode: "fffde4",
					comment: "ねこかわいい",
					url: "https://www.san-x.co.jp/sumikko/",
					tagName: "ねこ",
				},
				{
					id: 4,
					colorCode: "ffffff",
					comment: "しろくまかわいい",
					url: "https://www.san-x.co.jp/sumikko/",
					tagName: "しろくま",
				},
				{
					id: 5,
					colorCode: "e3eb98",
					comment: "ぺんぎん？かわいい",
					url: "https://www.san-x.co.jp/sumikko/",
					tagName: "ぺんぎん？",
				},
			],
		};
		return res(ctx.status(200), ctx.json(resBody));
	}
);

// POST /files
export const postFiles = rest.post<Omit<FileType, "id" | "userId">>(
	"/files",
	(req, res, ctx) => {
		const { name } = req.body;
		const resBody: FileType = {
			id: 1,
			userId: 1,
			name,
		};
		return res(ctx.status(201), ctx.json(resBody));
	}
);

// PUT /files/:id
export const putFilesID = rest.put<
	Partial<Omit<FileType, "id" | "userId">>,
	{ id: string }
>("/files/:id", (req, res, ctx) => {
	const { id } = req.params;
	const resBody: FileType = {
		id: +id,
		name: "すみっコぐらし",
		userId: 1,
		...req.body,
	};
	return res(ctx.status(200), ctx.json(resBody));
});

// DELETE /files/:id
export const deleteFilesID = rest.put<{}, { id: string }>(
	"/files/:id",
	(req, res, ctx) => {
		return res(ctx.status(204), ctx.json({}));
	}
);
