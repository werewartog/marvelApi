import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ProductList, ReactPaginateStyle, ContentBox, FindBox } from './styles';
import { formatCurrency } from '../../utils/format'
import { disableScroll } from '../../utils/disableScroll'
import ModalDetails from '../../components/modalDetails/ModalDetails'
import ReactPaginate from 'react-paginate';
import { MdSearch } from 'react-icons/md';
import { Container, Col, Row } from 'react-bootstrap';

class Home extends Component {
    state = {
        results: [],
        openModal: false,
        comicSelected: {
            img: '',
            title: '',
            price: '',
            description: '',
            creators: []
        },
        characterName: '',
        page: 1
    }

    async componentDidMount() {

        await this.props.getComics()
        const data = this.props.comics.map((comic) => ({
            ...comic
        }))

        this.setState({
            results: data
        })

    }

    handlePage = (limit, page) => {
        if (this.props.idCharacter !== 0) {
            this.props.getComicById(this.props.idCharacter, limit, page)
                .then(() => {
                    const data = this.props.comics.map((comic) => ({
                        ...comic
                    }))
                    this.setState({
                        results: data
                    })
                })
        }
        else {
            this.props.getComics(limit, page)
                .then(() => {
                    const data = this.props.comics.map((comic) => ({
                        ...comic
                    }))

                    this.setState({
                        results: data
                    })
                })
        }
    }

    searchByCharacter = (name) => {
        this.props.getCharacter(name)
            .then(() => {
                this.props.getComicById(this.props.idCharacter)
                    .then(() => {
                        this.setState({
                            ...this.state,
                            page: this.state.page + 1
                        })
                        this.handlePage(10, 0)
                    })
            })
    }

    handleOpenModal = (idSelected) => {
        let item = this.state.results.find((iditem) => iditem.id === idSelected)
        this.setState({
            ...this.state,
            comicSelected: {
                img: item.thumbnail.path.concat(".").concat("jpg"),
                title: item.title,
                description: item.textObjects.map((desc) => desc.text),
                price: item.prices.map((priceObj) => formatCurrency(priceObj.price)),
                creators: item.creators.items
            },
            openModal: true
        }, () => disableScroll(this.state.openModal))
    }
    handleCloseModal = () => {
        this.setState({
            ...this.state,
            openModal: false
        }, () => disableScroll(this.state.openModal))
    }

    handleChangeName = (value) => {
        this.setState({
            ...this.state,
            characterName: value
        })
    }
    render() {
        const { results } = this.state
        return (
            <Fragment>
                <FindBox>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} sm={12} md={12} lg={9} >
                                <div className="form">
                                    <span
                                        type="submit"
                                        className="button"
                                        onClick={() => this.searchByCharacter(this.state.characterName)}
                                    >
                                        <div className="fontIcon">
                                            <MdSearch />
                                        </div>
                                    </span>
                                    <input
                                        type="text"
                                        className="textbox"
                                        onChange={(e) => this.handleChangeName(e.target.value)}
                                        value={this.state.characterName}
                                        onSubmit={(e) => {
                                            this.searchByCharacter(e.target.value);
                                            e.preventDefault();
                                        }}
                                        placeholder="Find comic by hero name"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </FindBox>
                <ContentBox>
                    <ModalDetails showModalBox={this.state.openModal} closeModalBox={this.handleCloseModal} option={this.state.comicSelected} />
                    <ProductList>
                        <Container>
                            <Row>
                                {
                                    results.map((comicUnique) => (
                                        <Col xs={12} sm={6} md={6} lg={4} className="separateRow">
                                            <div key={comicUnique.id} className="li">
                                                <img src={comicUnique.thumbnail.path.concat(".").concat("jpg")} alt={comicUnique.title} />
                                                <strong>{comicUnique.title}</strong>
                                                <button type='button' className="button" onClick={() => this.handleOpenModal(comicUnique.id)}>
                                                    <span>Ver detalhes</span>
                                                </button>
                                            </div>
                                        </Col>

                                    ))
                                }
                            </Row>
                        </Container>
                    </ProductList>
                    <ReactPaginateStyle>
                        <ReactPaginate
                            key={this.state.page}
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={(this.props.numberItems / this.props.limit) - 1}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={(e) => this.handlePage(10, e.selected)}
                            containerClassName={'stylePaginator'}
                            subContainerClassName={'stylePaginator'}
                            activeClassName={'activePage'}
                        />
                    </ReactPaginateStyle>
                </ContentBox>
            </Fragment>
        )
    }
}

export default connect()(Home);
