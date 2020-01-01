import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from './styles';
import logo from '../../assets/images/marvel-comics-logo.jpg'
import { MdSearch } from 'react-icons/md';

function header() {
    return (
        <Container >
            <Link to='/'>
                <img src={logo} className="logo" alt='Posters' />
            </Link>
            <form method="post">
                <input type="text" class="textbox" placeholder="Find comic by hero name" />
                <span type="submit" class="button">
                    <div className="fontIcon">
                        <MdSearch />
                    </div>
                </span>
            </form>
    </Container>
            );
          }

const mapStateToProps = state => ({
            });

            export default connect(mapStateToProps)(header)
