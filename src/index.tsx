import { render } from 'react-dom';

import { UserProvider } from 'hooks';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { makeServer } from './server';

makeServer();
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  rootElement
);
