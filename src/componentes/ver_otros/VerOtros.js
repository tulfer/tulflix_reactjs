import React, { Component } from 'react';
import ItemOtros from '../item_otros/ItemOtros'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class VerOtros extends Component {

    constructor(props){
        super(props);
        
    }

  render() {
    return (
        <main class="content">
        <section class="centered">
            <h3>Peliculas</h3>
            <ItemOtros from={ this.props.from }/>
        </section>
    </main>
    );
  }
}

export default VerOtros;
