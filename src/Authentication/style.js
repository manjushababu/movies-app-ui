import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const LoginWrapper = styled.div`
  background: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 39%;
  color: white;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin: 15px 0;
`;

export const SwitchWrapper = styled.div`
  color: white;
`;

export const NavigateTo = styled(Link)`
  color: #1A76D2;
`;

export const ButtonWrapper = styled.div`
  margin-top: 41px;
`;
