import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './index';
import {
    getComics,
    getCharacter,
    getComicById
} from '../../store/modules/comics/action';


class ContainerHome extends Component {

    render() {
        return (
            <Home
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    comics: state.comic.comics,
    numberItems: state.comic.totalComics,
    limit: state.comic.limit,
    idCharacter: state.comic.idCharacter
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getComics,
    getCharacter,
    getComicById
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHome);
