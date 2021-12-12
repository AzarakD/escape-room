import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'services/api';
import { reducer } from 'store/reducer';
import { redirect } from 'store/middleware/redirect';
import { fetchQuests } from 'store/api-actions';
import browserHistory from 'browser-history';
import App from 'components/app/app';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: api },
    }).concat(redirect),
});

store.dispatch(fetchQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
