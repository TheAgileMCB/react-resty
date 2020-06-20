import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
    };
  }

  async getDataFromApi(){
    let response = await fetch(this.state.url)
    let body = await response.json();
    let header = [...response.headers.entries()];
    let statusCode = response.status;
    this.props.onReceiveResults(body, header, statusCode);
  }

  handleSubmit = e => {
    e.preventDefault();

    if ( this.state.url && this.state.method ) {

      this.props.toggleLoading();

      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };

      this.getDataFromApi();

      // Clear old settings
      let url = '';
      let method = '';

      this.setState({request, url, method});
      e.target.reset();

      this.props.toggleLoading();
    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({url});
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form data-testid="form" onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        </div>
    );
  }
}

export default Form;
