import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import About from './components/about';

class App extends React.Component {
  constructor(props) {
    super(props);

    //let ApiResultsFromStorage = JSON.parse(window.localStorage.results || '[]');

    this.state = {
      resultsLoading: false,
      url: null,
      method: null,
      Results: {
        statusCode: null,
        header: null,
        body: null,
      },
    };
  }

  setResults = (body, header, statusCode, url, method) => {
    this.setState({
      url,
      method,
      Results: {
        statusCode,
        header,
        body,
      }
    });

    window.localStorage.results = JSON.stringify(this.state)
  }

  toggleResultsLoading = () => {
    this.setState(
      state => ({ resultsLoading: !state.resultsLoading }),
      () => {
        console.log('Loading toggled', this.state.resultsLoading);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form onReceiveResults={this.setResults}
              toggleLoading={this.toggleResultsLoading} />
          </Route>
          <Route path="/results">
            <Results body={this.state.Results}
              url={this.state.url}
              method={this.state.method}
              loading={this.state.resultsLoading} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <img alt="404 Not Found!" src=".\assets\kitteh404.png" />
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
