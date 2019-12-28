import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer button {
        background: #04bf6d;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 5px 16px;
        margin-top: 15px
        text-transform: uppercase;
    }
`;
export const ProductTable = styled.table`
    width: 100%;

    img {
        height: 150px;
    }

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 8px;
        font-size: 18px;
        font-wight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;
export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-wight: bold;
    }

    strong {
        font-size: 20px;
        margin-left: 5px;
    }

`;
