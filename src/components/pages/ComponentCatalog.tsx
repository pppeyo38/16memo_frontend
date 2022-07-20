import { HeaderIcon } from "../molecules/HeaderIcon"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"
import { Memo } from "../atoms/Memo"
import { Modal } from "../atoms/Modal"

export const ComponentCatalog = () => {
	
	return (
		<>
			<h2 style={{ margin: '20px' }}>コンポーネントの使用例カタログ的なページ</h2>
			<HeaderIcon />
			<Input></Input>
			<Button text="アイウエオ青" size="m" link="/signup"></Button>
			<Memo text="#000000" bgColor="#555" link="/signup"></Memo>
			<Modal>
				<p>こんにちは</p>
			</Modal>
		</>
	)
}
