import styled from 'styled-components';
import {
  Edit, Delete, Favorite, ThumbDownAlt, Star, KeyboardArrowDown, KeyboardArrowUp,
} from '@mui/icons-material';

export const Wrapper = styled.div`
    width: 27%;
    margin-top: 20px;
    border-radius: 7px;
`;

export const ImageWrapper = styled.div`
    height:450px;
    width: 100%;
    position: relative;
`;

export const ButtonWrapper = styled.div`
    background: #000;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const ContentWrapper = styled.div`
    padding: 10px;
    background: #f5f5f5;
    color: #707070;
    /* background: ${(props) => props.theme.backgroundColor}; */
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 21px;
`;

export const Title = styled.h4`
    margin: 0 9px 0 0;
`;

export const Description = styled.div`
    font-size: 13px;
    margin: 9px 0
`;

export const ShowMoreIcon = styled(KeyboardArrowDown)`
`;

export const ShowLessIcon = styled(KeyboardArrowUp)`
`;

export const RatingsWrapper = styled.div`
    margin-left: auto;
`;

export const RatingsIcon = styled(Star)`
    color: ${(props) => props.valid && 'yellow'};
`;

export const CtaSection = styled.div`
    display: flex;
    margin: 15px 0 10px 0;
`;

export const EditIcon = styled(Edit)`
    margin-left: auto;
`;

export const DislikeIcon = styled(ThumbDownAlt)`
    margin-left: 9px;
    color: ${(props) => props.dislike && 'blue'};
`;

export const DeleteIcon = styled(Delete)`
    margin-left: 9px;
`;

export const FavoriteIcon = styled(Favorite)`
    color: ${(props) => props.favorite && 'red'};
`;
