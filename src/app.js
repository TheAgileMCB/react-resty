import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //let ApiResultsFromStorage = JSON.parse(window.localStorage.Results || '[]');

    this.state = {
      resultsLoading: false,
      Results: {
        statusCode: null,
        headers: null,
        body: null
      }
    };
  }

  setResults = (body, header, statusCode) => {
    this.setState({
      Results: {
        statusCode,
        header,
        body,
      }
    });
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
        <Form onReceiveResults={this.setResults}
          toggleLoading={this.toggleResultsLoading} />
        <Results body={this.state.Results}
          loading={this.state.resultsLoading} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
