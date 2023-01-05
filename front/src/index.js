import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 

import { RouterProvider } from "react-router-dom"; 
import { Provider } from 'react-redux'  
import { store } from './redux/store';
import { router } from './page/router';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router}> 
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
