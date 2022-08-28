import styled from 'styled-components';

export const AlbumContainer = styled.div`
    width: 100%;
    padding: 30px;
    margin:20px 0;
    background-color: #341f87;
    border-radius: 3px;
    transition: all linear .3s;
    opacity: .8;

    &:hover{
        opacity: 1;
    }

    h2, span{
        color: #fff;
    }

    h2{
        margin-bottom: 10px;
    }

`;