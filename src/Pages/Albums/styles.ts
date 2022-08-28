import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap: 30px;
`;

export const PhotoGrid = styled.div`
    display: block;
    padding: 10px;
    border: 2px solid #7059ed;
    transition: all linear .3s;

    &:hover {
        border-color: #FFF;
    }

    img{
        display: block;
        width: 100%;
    }
`;