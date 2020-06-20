import React from 'react';
//import Form from './../form/form.js';
// import ResultsList from './../results-list/results-list.js';
import ReactJson from 'react-json-view';
// import { render } from 'node-sass';


// class Results extends React.Component {
// toggleResultsLoading = () => {
//     this.setState(
//         state => ({ resultsLoading: !state.resultsLoading }),
//         () => {
//             console.log('Loading toggled', this.state.resultsLoading);
//         }
//     );
// }

export default function Results(props) {
    if (props.loading) {
        return (
            <h2>Loading....</h2>
        );
    }

    return (
        <>
            <h2>Results</h2>

            <span className="results"><ReactJson src={props.body} theme="hopscotch" /></span>

        </>
    );
}