import React, { Component } from 'react';
import {ModalDetailBackGround} from './modalDetailStyle';

class DisableBackground extends Component {


    render() {
        const {
            showModalBox = false,
            children,
            closeModalBox
        } = this.props;

        return (
            <ModalDetailBackGround>
                <div className={showModalBox ? "disableBg" : "displayNone"}>
                    <div className="boxItems">
                        {children}
                    </div>
                </div>
            </ModalDetailBackGround>
        )
    }
}

export default DisableBackground;
