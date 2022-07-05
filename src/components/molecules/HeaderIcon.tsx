import styled from "styled-components"

import { HeaderLogoTitle } from "../atoms/HeaderLogoT"

export const HeaderIcon = () => {
	return (
		<HeaderIconWrap>
			<img src="./src/images/iromemo-logo.svg"/>
			<HeaderLogoTitle />
		</HeaderIconWrap>
	)
}

const HeaderIconWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: fit-content;
`;