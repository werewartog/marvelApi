import React, { Component } from 'react';
import DisableBackground from './DisableBackground'
import {ModalDetail} from './modalDetailStyle';


class ModalDetails extends Component {
    render() {
        const {
            showModalBox,
            closeModalBox,
            option,
            title,
        } = this.props;
        console.log("props:", this.props)
        return (
            <DisableBackground
                showModalBox={showModalBox}
                closeModalBox={closeModalBox}
                title={title}
            >
                <div className="positionItens" onClick={option.handleOpen}>
                    <img className={ "image" } src={option.img} />
                    <span className="title">Title: <span className="subTitle">{option.title}</span></span>
                    <div className={ "positionText" }>
                        <span className="title">Description: <span className="subTitle">{option.description}</span></span>
                        <div className="borderLine"/>
                        <span className="title">Price: <span className="subTitle">{option.price}</span></span>
                        <div className="borderLine"/>
                        <span className="title">Author:</span>
                    <div className="flextList">
                        {
                        option.creators.length > 0 ? option.creators.map((creator) => {
                            return <span className="subTitleAutor listItem"> {creator.name}</span>
                        })
                        :
                        <span className="subTitleAutor listItem"> Not Found</span>
                        }
                    </div>
                    </div>
                </div>

            </DisableBackground>
        )
    }
}

export default ModalDetails;
