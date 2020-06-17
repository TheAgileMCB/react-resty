import React from 'react';
import ResultsList from './../results-list/results-list.js';

// import ReactJson from 'react-json-view';
// import { render } from 'node-sass';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        };
    }

    setResults = results => {
        this.setState({ results });
    }

    render() {
        return (
            <>
            <h2>Stores</h2>
            <section className="results">
                {/* <span className="method">{this.state.request.method}</span>
                <span className="url">{this.state.request.url}</span> */}
                <ResultsList results={this.state.results} />
            </section>
            </>
        );
    }
}



export default Results;