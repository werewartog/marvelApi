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
    background-color: rgba(221, 224, 228, 0.9);
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

.title {
    margin-bottom: 20px;
    width: 532px;
    height: 46px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -0.9px;
    text-align: center;
    color: #3e475b
}
`;

