import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Style
import { SiteContainer as Container, PageContainer as Page } from './styles/components/Main';

// Components
// import Nav from './styles/components/Header';
import Home  from './styles/pages/Home';
import Work  from './styles/pages/Work';
import About  from './styles/pages/About';
import Contact  from './styles/pages/Contact';
import _404  from './styles/pages/404';

export default class App extends Component {
  render() {
    return (
      <>
      <Container>
        <Page>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/work" component={Work}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route path="/" render={_404}/>
            </Switch>
          </Router>
        </Page>
      </Container>
      </>
    );
  }
}