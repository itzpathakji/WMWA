import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
<<<<<<< HEAD
import store from "./redux/store";
import { Provider } from 'react-redux';
=======
import store from './redux/store';
import { Provider } from 'react-redux';

>>>>>>> 1cae76abfcc3e75326d34b7ae9ce6033905d5935

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2E3840",
          },
        }}
    >
     <App />
    </ConfigProvider>
    
  </Provider>
);


reportWebVitals();
