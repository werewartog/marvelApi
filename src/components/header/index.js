import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container } from './styles';
import logo from '../../assets/images/logo.png'

function header() {
  return (
    <Container >
        <Link to='/'>
            <img src={logo} alt='Posters' />
        </Link>
    </Container>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(header)
