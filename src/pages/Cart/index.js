import React from 'react';

import {connect} from 'react-redux'

import { Container, ProductTable, Total } from './style';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

function Cart({cart, dispatch}) {

   const handleRemove = (id) => {
    dispatch({
            type: "REMOVE_FROM_CART",
            id
        });
    };

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                {cart.map(product =>(
                    <tr>
                        <td>
                            <img src={product.image} alt={product.title} />
                        </td>

                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.price}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color='#222' />
                                    </button>
                                    <input type="number" readOnly value={product.amount}/>
                                    <button type="button">
                                        <MdAddCircleOutline size={20} color='#222' />
                                    </button>
                                </div>
                            </td>
                        <td>
                            <strong>R$256,00</strong>
                        </td>
                        <td>
                            <button type='button' onClick={() => handleRemove(product.id)}>
                                <MdDelete size={20} color='#222' />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1234,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default  connect (mapStateToProps)(Cart);
