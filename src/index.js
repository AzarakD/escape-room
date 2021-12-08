import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from 'react-dom';
import { createAPI } from 'services/api';
import App from 'components/app/app';
import { reducer } from 'store/reducer';
import { fetchQuests } from 'store/api-actions';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: api },
    }),
});

store.dispatch(fetchQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
