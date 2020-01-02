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
export const FindBox = styled.div`
    .form {
        outline: 0;
        margin-top: 30px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        height: 65px;
    }

    .form > .textbox {
        font-size: 20px;
        outline: 0;
        height: 50px;
        width: 34vw;
        line-height: 42px;
        padding: 0 16px;
        background-color: #e8dcdccc;
        color: #212121;
        border: 0;
        border-radius: 4px 0 0 4px;
        box-shadow: 0px 2px 3px #b5b5b5;
    }

    .form > .textbox:focus {
        outline: 0;
        background-color: #F2F2F2;
    }

    .form > .button {
        padding: 7px;
        outline: 0;
        background: none;
        background-color: red;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 42px;
        border: 0;
        color: #FFF;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 16px;
        text-rendering: auto;
        text-shadow: 0 1px 1px rgba(0,0,0,0.2);
        -webkit-transition: background-color .4s ease;
        -webkit-transition: background-color .4s ease;
        transition: background-color .4s ease;
        -webkit-border-radius: 0 4px 4px 0;
        border-radius: 0 4px 4px 0;
        box-shadow: 0px 2px 3px #b5b5b5;
    }

    .form > .button:hover {
        background-color: #802424;
        cursor: pointer;
    }
    .fontIcon {
        font-size: 2em;
    }
`
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
