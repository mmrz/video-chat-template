import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Room from "./component/room/Room";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "./constant/theme";
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'
import Loader from './component/loader/Loader';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Room />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  );
}

export default App;
