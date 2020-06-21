import React from 'react';
import ReactJson from 'react-json-view';
import { render } from 'node-sass';


class History extends React.Component {
    render() {
        return (
            <>
                <h2>History</h2>
                <div className="url=method">
                    <h3>Method: {props.method}</h3>
                    <h3>URL: {props.url}</h3>
                </div>
                <span className="results"><ReactJson src={props.body} theme="hopscotch" /></span>

            </>
        )
    }
}

export default History;