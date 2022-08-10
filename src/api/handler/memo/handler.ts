import { rest } from "msw";
import { MemoType } from "./type";

// POST /memos
export const postMemos = rest.post<Omit<MemoType, "id">>(
  "/memos",
  (req, res, ctx) => {
    const resBody: MemoType = {
      id: 1,
      ...req.body,
    };
    return res(ctx.status(201), ctx.json(resBody));
  }
);

// PUT /memos/:id
export const putMemosID = rest.put<
  Partial<Omit<MemoType, "id">>,
  { id: string }
>("/memos/:id", (req, res, ctx) => {
  const resBody: MemoType = {
    id: 1,
    colorCode: "d0eaea",
    comment: "とかげかわいい",
    url: "https://www.san-x.co.jp/sumikko/",
    tagName: "とかげ",
    ...req.body,
  };
  return res(ctx.status(200), ctx.json(resBody));
});

// DELETE /memos/:id
export const deleteMemosID = rest.delete<{}, { id: string }>(
  "/memos/:id",
  (req, res, ctx) => {
    return res(ctx.status(204), ctx.json({}));
  }
);

// GET /memos/search
export const getMemosSearch = rest.get("/memos/search", (req, res, ctx) => {
  const tagName = req.url.searchParams.get("tag_name");
  const memos: MemoType[] = [
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
      tagName: "とかげ",
    },
    {
      id: 3,
      colorCode: "fffde4",
      comment: "ねこかわいい",
      url: "https://www.san-x.co.jp/sumikko/",
      tagName: "とかげ",
    },
    {
      id: 4,
      colorCode: "ffffff",
      comment: "しろくまかわいい",
      url: "https://www.san-x.co.jp/sumikko/",
      tagName: "とかげ",
    },
    {
      id: 5,
      colorCode: "e3eb98",
      comment: "ぺんぎん？かわいい",
      url: "https://www.san-x.co.jp/sumikko/",
      tagName: "ぺんぎん？",
    },
  ];
  const resBody =
    tagName === null ? memos : memos.filter((memo) => memo.tagName === tagName);

  return res(ctx.status(200), ctx.json(resBody));
});
