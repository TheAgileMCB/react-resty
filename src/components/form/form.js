import React from 'react';
import Modal from './../modal';
import './form.scss';
import { If } from './../if/if.js';
import ReactJson from 'react-json-view';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
      showModal: false,
    };
  }

  async getDataFromApi() {
    let url = this.state.url;
    let method = this.state.method;
    let response = await fetch(this.state.url)
    let body = await response.json();
    let header = [...response.headers.entries()];
    let statusCode = response.status;
    this.props.onReceiveResults(body, header, statusCode, url, method);
  }

  handleSubmit = e => {
    e.preventDefault();
    let form = e.target;

    if (this.state.url && this.state.method) {

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

      this.setState({ request, url, method });
      form.reset();

      this.props.toggleLoading();
    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  toggleModal = () => {
    this.setState(oldState => ({ showModal: !oldState.showModal }));
  }

  render() {
    const { showModal } = this.state;
    return (
      <>
        <If condition={showModal}>
          <Modal title="Details" onClose={this.toggleModal}>
            <div>
              <h3>Method: {this.props.method}</h3>
              <h3>URL: {this.props.url}</h3>
            </div>
            <span><ReactJson src={this.props.body} theme="hopscotch" /></span>
          </Modal>
        </If>

        <div className="sidebar">
          <button onClick={this.toggleModal}>Details</button>
          {this.state.history ? this.state.history.map((item) => {
            return (
              <>
                <h5>{this.state.history.method}</h5>
                <h5>{this.state.history.url}</h5>
                {/* modal clicker goes here */}
              </>
            )
          }) : 'no history'}
        </div>

        <div className="wrapper">
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
        </div>
      </>
    );
  }
}

export default Form;
