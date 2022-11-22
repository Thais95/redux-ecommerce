import styled from 'styled-components';
import mainBanner from '../../assets/main-banner.png';

export const BannerContainer = styled.div`
    width: 100vw;
    height: 650px;
    background-image: url(${mainBanner});
    background-position: center;
    background-size: cover;
    z-index: -2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    &:before {
        content: '';
        background-color: black;
        width: 100vw;
        height: 650px;
        opacity: 0.45;
    }
`