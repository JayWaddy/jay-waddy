import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Style
import { 
  GlobalStyle, 
  SiteContainer as Container,
  PageContainer as Page,
  PageContent as Content
} from './components/Global';

// Components
import Home  from './components/pages/Home';
import Work  from './components/pages/Work';
import About  from './components/pages/About';
import Contact  from './components/pages/Contact';
import PageNotFound  from './components/pages/PageNotFound';
import Navbar from './components/Navbar';

// --------------
// Default Export
// --------------

export default class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
      
      <Container className="App-container">
        <Page className="Page-container">
          <Content className="Page-content">
            <Router>
              <Navbar />
              <div className="Page">
              <Route render={({ location }) => {
                return (
                  <TransitionGroup>
                    <CSSTransition
                    key={ location.key }
                    timeout= { 300 }
                    classNames={ 'Page-' }
                    >
                      <Switch location={ location }>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/work" component={ Work }/>
                        <Route exact path="/about" component={ About }/>
                        <Route exact path="/contact" component={ Contact }/>
                        <Route path="/" render={ PageNotFound }/>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                );
              }} />
              </div>
            </Router>
          </Content>
        </Page>
      </Container>
      </>
    );
  }
}