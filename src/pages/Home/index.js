import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api'
import URL_REQUEST from '../../utils/url'
import {formatCurrency} from '../../utils/format'

class Home extends Component {
    state = {
        results: [],
        openModal: false
    }

    async componentDidMount() {
        const response = await api.get(URL_REQUEST);
        const data = response.data.data.results.map((comic) => ({
            ...comic,
            priceFormatted: formatCurrency(comic.prices.price)
        }))

        this.setState({
            results: data
        })
    }

    render(){

        const {results} = this.state
        console.log(results)
        return (
            <ProductList>
                {
                    results.map((product) => (
                        <li key={product.id}>
                            <img src={product.thumbnail.path + "." + "jpg"} alt={product.title} />
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>

                            <button type='button' onClick={() => this.handleOpenModal()}>
                                <span>Ver detalhes</span>
                            </button>
                        </li>
                    ))
                }
            </ProductList>
        )
    }
}

export default connect()(Home);
