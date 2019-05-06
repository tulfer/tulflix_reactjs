import React, { Component } from 'react';

class FormBuscar extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <li className="mobsearch">
            <form className="mobform" onSubmit={this.handleSubmit}>
                <input type="text" placeHolder="Buscar:" className="mobsearchfield" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" className="mobsearchsubmit" value="" />
            </form>
        </li>
      );
    }
  }

  export default FormBuscar;