import React from 'react';
//import Form from './../form/form.js';
import App from './../../app.js';
// import ReactJson from 'react-json-view';
// import { render } from 'node-sass';


class Results extends React.Component {
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
            <>
                <h2>Results</h2>
                <section className="results">
                    <App results={this.state.Results} />
                </section>
            </>
        );
    }
}




export default Results;