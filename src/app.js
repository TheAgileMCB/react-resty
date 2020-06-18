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

    this.state = {
      resultsLoading: false,
      statusCode: null,
      headers: null,
      results: [],
    };
  }

  onReceiveResults = results => {
    this.setResults({ results});
    this.setState({ results });
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <Form onReceiveResults={this.setResults} toggleLoading={this.toggleResultsLoading} />
        <Results />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
