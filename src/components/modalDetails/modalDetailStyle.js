import styled from 'styled-components';

export const ModalDetailBackGround = styled.div`
.disableBg {
    z-index: 1200;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    align-items: center;
    touch-action: none;
    justify-content: center;
    background-color: #6f6f6fe6;
}

.closeButton {
    position: absolute!important;
    right: 0;
    top: 0;
    color: #5f5d5d
}

.displayNone {
    display: none;
}

.image{
    height: 511px;
    box-shadow: 0px 5px 5px #000;
}
.positionItens {
    margin: 20px;
    border-radius: 25px;
    background-color: #fff;
    width: 63vw;
    height: auto;
    padding: 3px 30px 30px;
}

.closeIcon{
    display: flex;
    cursor: pointer;
    padding: 7px;
    font-size: 30px;
    flex-direction: row-reverse;
}

.flexRow{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.positionText {
    margin-top: 50px;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}
.title {
    font-size: 1.6em;
    font-weight: bold;
}
.subTitle {
    font-size: 1em;
    font-weight: 500;
}
.subTitleAutor {
    font-size: 1.4em;
    font-weight: 500;
}
.positionItens > span {
    margin-bottom: 20px;
}
.positionText > span {
    margin-bottom: 20px;
}
.flextList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.listItem {
    margin-right: 15px;
}
.borderLine {
    align-self: center;
    display: block;
    height: 1px;
    background: #ccc;
    width: 100%;
    margin-bottom: 20px;
}
`;

