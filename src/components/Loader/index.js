import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { LoaderStyle } from './styles';

class LoaderCircle extends Component {
    render() {
        return (
            <Fragment>
                <LoaderStyle>
                    <div id="loader-wrapper" className={this.props.loader === false ? "hide" : ''}>
                        <div class="loader-section section-left">
                            <div class="spinner"></div>
                        </div>
                    </div>
                </LoaderStyle>
            </Fragment>
        )
    }
}

export default connect()(LoaderCircle);

// className={this.props.loader === false ? "hide" : ''}
