import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #1A76D2;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
`;

export const HeadingsWrapper = styled.div`
    display: flex;
    width: 90%;
    h3 {
        margin: 0 10px;
    }
`;

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    div {
        margin-right: 15px;
    }
`;

export const SettingsIconWrapper = styled.div`
    position: relative;
`;

export const ProfileWrapper = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 19px;
`;
