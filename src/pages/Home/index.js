import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ProductList, ReactPaginateStyle, ContentBox } from './styles';
import { formatCurrency } from '../../utils/format'
import { disableScroll } from '../../utils/disableScroll'
import ModalDetails from '../../components/modalDetails/ModalDetails'
import ReactPaginate from 'react-paginate';

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
        }
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

    render() {

        const { results } = this.state

        console.log("comic container", this.props)
        return (
            <Fragment>
                <ContentBox>
                    <ModalDetails showModalBox={this.state.openModal} closeModalBox={this.handleCloseModal} option={this.state.comicSelected} />
                    <ProductList>
                        {
                            results.map((comicUnique) => (
                                <li key={comicUnique.id} className="li">
                                    <img src={comicUnique.thumbnail.path.concat(".").concat("jpg")} alt={comicUnique.title} />
                                    <strong>{comicUnique.title}</strong>
                                    <button type='button' className="button" onClick={() => this.handleOpenModal(comicUnique.id)}>
                                        <span>Ver detalhes</span>
                                    </button>
                                </li>
                            ))
                        }
                    </ProductList>
                    <ReactPaginateStyle>
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={(this.props.numberItems / this.props.limit) - 1}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={(e) => this.handlePage(10, e.selected + 1)}
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
