import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoaderCircle from './index';


class Loader extends Component {

    render() {
        return (
            <LoaderCircle
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    loader: state.comons.loader,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
