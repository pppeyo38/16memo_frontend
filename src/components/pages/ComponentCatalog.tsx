import { HeaderIcon } from "../molecules/HeaderIcon"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"
import { ColorThumb } from "../atoms/ColorThumb"
import { Modal } from "../atoms/Modal"
import { useState, useEffect } from "react"
import { MemoType } from "../../api/handler/memo/type"
import { API_URL } from "../../api/endpoint"

export const ComponentCatalog = () => {
  const { data, error, loading } = useGetTokageMemos("とかげ")

  if (error) {
    return <p>error: {error.message}</p>
  }

  return (
    <>
      <h2 style={{ margin: "20px" }}>
        コンポーネントの使用例カタログ的なページ
      </h2>
      <HeaderIcon />
      <Input></Input>
      <Button text="アイウエオ青" size="s" link="/signup"></Button>
      {loading ? (
        <p>loading...</p>
      ) : (
        data.map((memo) => (
          <ColorThumb key={memo.id} colorCode={memo.colorCode} link="/signup" />
        ))
      )}
      <Modal>
        <p>こんにちは</p>
      </Modal>
    </>
  )
}

const useGetTokageMemos = (tagName?: string) => {
  const [state, setState] = useState<{
    data: MemoType[]
    loading: boolean
    error?: Error
  }>({
    data: [],
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      const url = tagName
        ? `${API_URL}/memos/search?tagName=${tagName}`
        : `${API_URL}/memos/search`

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)) // 挙動確認の為に sleep
        const res = await fetch(url)
        const data = await res.json()
        setState({ data, loading: false })
      } catch (error: unknown) {
        if (error instanceof Error) {
          const err = error
          setState((prev) => ({ ...prev, error: err, loading: false }))
        }
      }
    }
    fetchData()
  }, [])

  return state
}
