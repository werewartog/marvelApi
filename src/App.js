import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import Routes from './routes';
import GlobalStyles from './styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index'
import LoaderCircle from './components/Loader/container'

function App() {
  return (
      <Provider store={store}>
        <LoaderCircle />
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
