import styled from "styled-components";

export const DotBg = styled.section`
  height: 100%;
  background-image: radial-gradient(#9b9b9b 3%, #f2f2f2 3%);
  background-size: 20px 20px;
  background-repeat: repeat;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    width: 600px;
  `}
`;
