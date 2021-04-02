import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Room from "./component/room/Room";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "./constant/theme";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Room />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
