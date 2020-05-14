import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SiteContainer as Container, PageContainer as Page } from './styles/components/Main';

import Nav from './styles/components/Header';
import Home  from './styles/pages/Home';
import Projects  from './styles/pages/Projects';
import About  from './styles/pages/About';
import Contact  from './styles/pages/Contact';
import _404  from './styles/pages/404';

function App() {
  return (
    <>
      <Container>
        <Page>
          <Router>
              <Nav />
              <Switch>
              <Route path="/" exact component={Home} activeLink={true}/>
              <Route path="/projects" exact component={Projects}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/" render={_404}/>
            </Switch>
          </Router>
        </Page>
      </Container>
      
    </>
  );
}

export default App;