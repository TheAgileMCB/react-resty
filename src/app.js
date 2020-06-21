import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import About from './components/about';
// import History from './components/history';

class App extends React.Component {
  constructor(props) {
    super(props);

    // var results = JSON.parse(window.localStorage.results) || [];

    this.state = {
      resultsLoading: false,
      // results,

    };
  }

  componentDidMount() {
    this.recover();
  }

  recover() {
    let data = JSON.parse(window.localStorage.getItem('history') || '[]');

    this.setState({ history: data.history });
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

    //window.localStorage.results = this.saveToStorage;
    // window.localStorage.results = JSON.stringify(this.state)
    // getHistory = function () {
    //   return JSON.parse(window.localStorage.results) || [];
    // }

    // addToHistory = function(data) {
    //   var history = getHistory();
    //   history.unshift(data);
    //   window.localStorage.setItem('results', JSON.stringify(history.slice(0, 10)));
    // }
    // addToHistory();
  }

  // saveToStorage() {
  //   let history = this.state.history ? this.state.history : { history: [] };

  //   history.push(this.state);

  //   window.localStorage.setItem('history', JSON.stringify(history));
  // }

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
              // history={this.state.history}
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
          {/* <Route>
            <History history={this.state.history} />
          </Route> */}
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
