import { HeaderIcon } from "../molecules/HeaderIcon";
import { Button } from "../atoms/Button";
import { ColorThumb } from "../atoms/ColorThumb";
import { useState, useEffect } from "react";
import { MemoType } from "../../api/handler/memo/type";
import { API_URL } from "../../api/endpoint";
import { ColorMemoThumb } from "../atoms/ColorMemoThumb";
import { FileWithMemoInfoType } from "../../api/handler/file/type";
import { FileThumb } from "../atoms/FileThumb";
import { Input } from '@chakra-ui/react';
import { SettingLink } from "../atoms/SettingLink";
import { Popup } from "../molecules/Popup";

export const ComponentCatalog = () => {
  const { data, error, loading } = useGetMemos("とかげ");
  const { filesData, filesError, filesLoading } = useGetFiles();

  if (error) {
    return <p>error: {error.message}</p>
  }else if (filesError){
    return <p>error: {filesError.message}</p>
  }

	if(loading && filesLoading){
		return <p>loading</p>;
	}

  return (
		<>
			<h2 style={{ margin: "20px" }}>
				コンポーネントの使用例カタログ的なページ
			</h2>
      <Input variant="white" size='md' placeholder="メールアドレス" />
      <Input variant="filled" size='md' placeholder="#色名を入力" />
			<HeaderIcon />
			<Button text="アイウエオ青" size="s" link="/signup"></Button>
			<div>
				{data.map((memo) => (
					<ColorThumb key={memo.id} memoId={memo.id} colorCode={memo.colorCode}/>
				))}
			</div>
			{
				data.map((memo) => (
          <Popup key={memo.id} variant="logout">
            <ColorMemoThumb key={memo.id} memoId={memo.id} colorCode={memo.colorCode} tagName={memo.tagName} deleteMode={true}></ColorMemoThumb>
          </Popup>
				))
			}
      {
        filesData.map((file) => (
            <FileThumb key={file.id} name={file.name} colorNum={file.memo.colorNum} mainColors={file.memo.mainColor}></FileThumb>
        ))
      }
      <SettingLink label="ニックネーム" content="とかげかわいい" link="/setting/nickname" />
		</>
  )
}

//メモ情報取得メモ情報取得
const useGetMemos = (tagName?: string) => {
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
        ? `${API_URL}/memos/search?tag_name=${tagName}`
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

  return state;
}

//ファイル情報取得
const useGetFiles = () => {
  const [state, setState] = useState<{
    filesData: FileWithMemoInfoType[]
    filesLoading: boolean
    filesError?: Error
  }>({
    filesData: [],
    filesLoading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_URL}/files`

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)) // 挙動確認の為に sleep
        const res = await fetch(url)
        const filesData = await res.json()
        setState({ filesData, filesLoading: false })
      } catch (filesError: unknown) {
        if (filesError instanceof Error) {
          const err = filesError
          setState((prev) => ({ ...prev, filesError: err, loading: false }))
        }
      }
    }
    fetchData()
  }, [])

  return state;
}