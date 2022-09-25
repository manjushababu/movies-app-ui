import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 25px;
  right: -25px;
  padding: 15px;
  z-index: 1;
  display: flex;
  background: #fff;
  border-radius: 3px;
`;

export const ColorBox = styled.div`
  background: ${(props) => props.displayTheme};
  height: 15px;
  width: 15px;
  border-radius: 3px;
`;
