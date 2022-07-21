import { rest } from 'msw'
import { Memo } from '../types/model'

export const handlers = [
  rest.get('/memos', (_, res, ctx) => {
    const data: Memo[] = [
      {
        id: '1',
        colorCode: '123456',
        comment: 'とかげかわいい',
        URL: 'https://www.san-x.co.jp/sumikko/',
        tagName: 'とかげ',
      },
      {
        id: '2',
        colorCode: '7890ab',
        comment: 'とかげ最高',
        URL: 'https://www.san-x.co.jp/sumikko/',
        tagName: 'とかげ',
      },
      {
        id: '3',
        colorCode: 'cdef01',
        comment: 'とかげしか勝たん',
        URL: 'https://www.san-x.co.jp/sumikko/',
        tagName: 'とかげ',
      },
    ]
    return res(ctx.status(200), ctx.json(data))
  }),
]
