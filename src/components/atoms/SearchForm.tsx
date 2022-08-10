import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { ColorTheme } from "../../style/ColorTheme";
import { Font } from "../../style/Font";
import search from "../../images/search.svg";

export const SearchForm = () => {
	let [text, setText] = useState<string>("");
	const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);

	//Enterキー押した時の処理
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.nativeEvent.isComposing || e.key !== "Enter") {
			return;
		} else {
			let firstText = text.slice(0, 1);
			if (firstText === "#") {
				//一文字目の#は削除する
				text = text.slice(1);
			}
			window.location.href = `/search?tag=${text}`;
			setText("");
		}
	};

	return (
		<SearchFormContainer>
			<SearchIcon>
				<img src={search} alt="検索アイコン" />
			</SearchIcon>
			<SearchInputForm
				type="text"
				value={text}
				onChange={onChangeText}
				placeholder="#名前やキーワードなど"
				onKeyDown={handleKeyDown}
			/>
		</SearchFormContainer>
	);
};

const { black, gray, white } = ColorTheme.palette;
const { Noto } = Font.fontFamily;

const SearchFormContainer = styled.div`
	width: 340px;
	height: 30px;
	position: relative;
`;

const SearchIcon = styled.div`
	width: 17px;
	height: 17px;
	position: absolute;
	top: 50%;
	left: 15px;
	transform: translateY(-50%);
	img {
		width: 100%;
		height: 100%;
	}
`;

const SearchInputForm = styled.input`
	width: 100%;
	height: 100%;
	padding: 8px 18px 8px 37px;
	color: ${black};
	background-color: ${white};
	font-family: ${Noto};
	font-size: 14px;
	border-radius: 15px;
	::placeholder {
		color: ${gray};
	}
	:focus {
		outline: none;
	}
`;
