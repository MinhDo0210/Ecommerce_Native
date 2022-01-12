import * as React from 'react';
import MainStack from './src/navigators/MainStack';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/redux';

let store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  )
}
