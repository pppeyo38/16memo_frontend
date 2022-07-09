import { memo, FC, useEffect, useState } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Memo } from '../../types/model'

export const Home: FC = memo(() => {
  const [memos, setMemos] = useState<Memo[]>([])

  useEffect(() => {
    const fetchMemos = async () => {
      const data = await fetch(`${import.meta.env.VITE_APP_API_URL}/`)
      const memos = await data.json()
      setMemos(memos)
    }
    fetchMemos()
  }, [])

  return (
    <>
      <p>HOMEページ</p>
      <ul>
        {memos.map((memo) => (
          <li
            key={memo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              marginTop: '8px',
            }}
          >
            <ColorRect colorCode={`#${memo.colorCode}`} />
            <p>{memo.comment}</p>
          </li>
        ))}
      </ul>
    </>
  )
})

const ColorRect = styled.div<{ colorCode: CSSProperties['backgroundColor'] }>`
  height: 16px;
  width: 16px;
  background-color: ${(props) => props.colorCode};
`
