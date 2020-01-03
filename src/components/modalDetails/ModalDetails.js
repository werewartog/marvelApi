import React, { Component } from 'react';
import DisableBackground from './DisableBackground'
import { MdClose } from 'react-icons/md';
import { Image, Col, Row } from 'react-bootstrap';



class ModalDetails extends Component {
    render() {
        const {
            showModalBox,
            closeModalBox,
            option,
            title,
        } = this.props;
        return (
            <DisableBackground
                showModalBox={showModalBox}
                closeModalBox={closeModalBox}
                title={title}
            >

                <div className="positionItens" onClick={option.handleOpen}>
                    <div className="closeIcon">
                        <MdClose onClick={closeModalBox} />
                    </div>
                    <Row className="justify-content-between">
                        <Col md={5}>
                            <Image src={option.img} fluid />
                        </Col>
                        <Col md={7}>
                            <div className={"positionText"}>
                                <span className="title">Title: <span className="subTitle">{option.title}</span></span>
                                <span className="title">Description: <span className="subTitle">{option.description}</span></span>
                                <div className="borderLine" />
                                <span className="title">Price: <span className="subTitle">{option.price}</span></span>
                                <div className="borderLine" />
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
                        </Col>
                    </Row>
                </div>
            </DisableBackground>
        )
    }
}

export default ModalDetails;
