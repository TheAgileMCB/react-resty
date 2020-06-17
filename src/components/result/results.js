import React from 'react';

class Results extends React.Component {

    render() {
        return (
            <section className="results">
                <span className="method">{this.state.request.method}</span>
                <span className="url">{this.state.request.url}</span>
            </section>
        );
    }
}



export default Results;