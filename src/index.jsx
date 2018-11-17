import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Tampilan from './Components/Halaman Utama/TampilanUtama';
import store from './Store/store';

ReactDOM.render(
  <Provider store={store}>
    <Tampilan />
  </Provider>,
  document.getElementById('root'),
);
