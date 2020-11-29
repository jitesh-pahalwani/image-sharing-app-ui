import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Routes from './src/routes/Routes';
import mainReducer from './src/mainReducer';
import postsSaga from './src/components/HomeScreen/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(postsSaga);

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
