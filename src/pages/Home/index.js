import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api'
import URL_REQUEST from '../../utils/url'
import { formatCurrency } from '../../utils/format'
import { disableScroll } from '../../utils/disableScroll'
import ModalDetails from '../../components/modalDetails/ModalDetails'

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

        const { results, comicSelected } = this.state

        console.log("comic container", this.props)
        return (
            <Fragment>
                <ModalDetails showModalBox={this.state.openModal} closeModalBox={this.handleCloseModal} option={this.state.comicSelected} />
                <ProductList>
                    {
                        results.map((product) => (
                            <li key={product.id} className="li">
                                <img src={product.thumbnail.path.concat(".").concat("jpg")} alt={product.title} />
                                <strong>{product.title}</strong>
                                <button type='button' className="button" onClick={() => this.props.getComicsTeste(5)}>
                                    <span>Ver detalhes</span>
                                </button>
                            </li>
                        ))
                    }
                </ProductList>
            </Fragment>
        )
    }
}

export default connect()(Home);
