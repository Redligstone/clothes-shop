import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { store } from "./redux/store";
import { Provider } from "react-redux";

const rootElem = document.getElementById("root")
if (rootElem){
  const root = ReactDOM.createRoot(rootElem);

  root.render(
        <Provider store={store}>
          <App/>
        </Provider>
       
      
  );
}
