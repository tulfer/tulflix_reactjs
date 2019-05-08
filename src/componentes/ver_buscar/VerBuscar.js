import React, { Component } from 'react';
import ItemBuscar from '../item_buscar/ItemBuscar'

class VerBuscar extends Component {

    constructor(props){
        super(props);
        
    }

  render() {
    return (
        <main className="content">
        <section className="centered">
            <h3>Busqueda</h3>
            <ItemBuscar s={ this.props.s }/>
        </section>
    </main>
    );
  }
}

export default VerBuscar;
