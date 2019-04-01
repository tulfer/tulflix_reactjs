import React, { Component } from 'react';
import ItemOtros from '../item_otros/ItemOtros'

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
