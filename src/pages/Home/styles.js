import styled from 'styled-components';

export const ReactPaginateStyle = styled.div`
    ul {
        padding: 0 15vw 0 15vw;
        color: #fff;
        display: flex;
        justify-content: space-around;
        list-style: none;
        font-size: 1.5em;
        margin-bottom: 25px;
        margin-top: 45px;
    }

    .activePage {
        color: red
    }

    ul > li {
        cursor: pointer;
    }
    ul > li:hover {
        color: red,
    }
`;
export const ContentBox = styled.div`
    max-width: 1560px;
    margin: 0 auto;
`;
export const ProductList = styled.div`
    margin: 35px
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    list-style: none;

    img{
        align-self: center;
        height: 390px;
        width: 100%;
    }

    .li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        overfloe: auto;
    }

    .li > strong{
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
        overflow: hidden;
        text-overflow:    ellipsis;
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin: 10px 0 15px;
    }

    .li > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
    }

    .button {
        background: red;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: auto;
        padding: 12px;

        display: flex;
        align-items: center;

        span {
            flex: 1;
            text-align: center;
        }
    }
`;
