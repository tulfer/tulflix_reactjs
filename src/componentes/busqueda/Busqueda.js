import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VerBuscar from '../ver_buscar/VerBuscar';
import './Busqueda.css'

class Busqueda extends Component {

    constructor(props){
        super(props);
    }

  render() {

    return (
        <div>
        <h2>Busqueda</h2>

        <Route path={`${this.props.match.path}/:s`} component={this.CargarContenido} />
        <Route
            exact
            path={this.props.match.path}
            render={() => <h3>Nada que buscar</h3>}
        />
        </div>  
    );
  }

  CargarContenido ({match}) {
    return (
      <VerBuscar s={match.params.s} />
    );
  }

}
 
export default Busqueda;