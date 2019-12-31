import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container } from './styles';
import logo from '../../assets/images/marvel-comics-logo.jpg'
import { MdSearch } from 'react-icons/md';

const logoSearch = <MdSearch/>

function header() {
  return (
    <Container >
        <Link to='/'>
            <img src={logo} className="logo" alt='Posters' />
        </Link>
        <form method="post">
        <input type="text" class="textbox" placeholder="Find by hero name" />
        <input title="Buscar" value={logoSearch} type="submit" class="button"/>
        </form>
    </Container>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(header)
