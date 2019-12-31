import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './index';
import {
    getComics
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
    numberItems: state.comic.numberItems,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getComics
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHome);
