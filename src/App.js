import React from 'react';
import  Home  from './styles/pages/Home';

import { Container } from './styles/components/Main';
import Nav from './styles/components/Header';

function App() {
  return (
    <Container>
      <Nav />
      <Home />
    </Container>
  );
}

export default App;