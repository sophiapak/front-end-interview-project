import React from 'react';
import { GlobalStyles, Header } from '../components';

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      {/* Font styles and basic CSS Reset */}
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
