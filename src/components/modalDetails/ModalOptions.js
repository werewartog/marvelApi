import React, { Component } from 'react';
import DisableBackground from './DisableBackground'
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import {ModalDetail} from './modalDetailStyle';


class ModalOptions extends Component {
    render() {
        const {
            showModalBox,
            closeModalBox,
            options = [],
            title
        } = this.props;

        return (
            <DisableBackground
                showModalBox={showModalBox}
                closeModalBox={closeModalBox}
                title={title}
            >
                <IconButton className="closeButton" onClick={closeModalBox}>
                    <CloseIcon />
                </IconButton>
                {
                    options.map((option) => {
                        return (
                            <div className="positionItens" onClick={option.handleOpen}>
                                <img className={option.icon !== '' ? "image" : "displayNone"} src={option.icon} />
                                <span className="subTitle">{option.subTitle}</span>
                                <span className="titleOption">{option.title}</span>
                            </div>
                        )
                    })
                }
            </DisableBackground>
        )
    }
}

export default ModalOptions;
