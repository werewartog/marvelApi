import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import logo from '../../assets/images/marvel-comics-logo.jpg'
import {
    getCharacter,
    getComicById
} from '../../store/modules/comics/action';

function header() {
    return (
        <Container >
            <Link to='/'>
                <img src={logo} className="logo" alt='Posters' />
            </Link>
        </Container>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCharacter,
    getComicById
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(header)
