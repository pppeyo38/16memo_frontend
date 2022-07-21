import { HeaderIcon } from "../molecules/HeaderIcon"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"
import { ColorThumb } from "../atoms/ColorThumb"
import { Modal } from "../atoms/Modal"
import { Memo } from "../../types/model";
import { useState, useEffect } from "react"

export const ComponentCatalog = () => {

	const [memos, setMemos] = useState<Memo[]>([]);
  useEffect(() => {
		const fetchMemo = async () => {
			await fetch("http://localhost:3000/memos")
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setMemos(res);
			})
			.catch((res) => {
				console.log(res.errorMessage);
			});
    };
    fetchMemo();
  }, []);
	
	if (memos.length === 0) {
		return <p>loading...</p>
	}

	return (
		<>
			<h2 style={{ margin: '20px' }}>コンポーネントの使用例カタログ的なページ</h2>
			<HeaderIcon />
			<Input></Input>
			<Button text="アイウエオ青" size="l" link="/signup"></Button>
			{
				memos.map((memo) => (
					<ColorThumb key={memo.id} colorCode={memo.colorCode} link="/signup"></ColorThumb>
				))
			}
			<Modal>
				<p>こんにちは</p>
			</Modal>
		</>
	)
}
