import styled from "styled-components";

export const Header = styled.header`
    display: flex;

    border-bottom: 3px solid #6f6dff;
    padding-bottom: 10px;
    margin-bottom: 20px;

    button {
        display: block;
        padding:10px 15px;
        cursor: pointer;
        border: 0;
        background: #6f6dff;
        color: #FFF;
    }
`;

export const HeaderTitle = styled.h2`
    font-size: 35px;
    color: #FFF;

    ::before{
        color: #6f6dff;
        content: "🖼️ ";
    }
`;