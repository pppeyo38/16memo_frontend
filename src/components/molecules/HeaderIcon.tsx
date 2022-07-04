import styled from "styled-components"

import { HeaderLogoTitle } from "../atoms/HeaderLogoT"

export const HeaderIcon = () => {
	return (
		<HeaderIconWrap>
			<img src="../../images/iromemo-logo.svg"/>
			<HeaderLogoTitle />
		</HeaderIconWrap>
	)
}

const HeaderIconWrap = styled.div`

`;