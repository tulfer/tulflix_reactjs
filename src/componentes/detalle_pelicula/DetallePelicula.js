import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemVideo from '../item_video/ItemVideo';
import './DetallePelicula.css'

class DetallePelicula extends Component {

    constructor(props){
        super(props);
    }

  render() {

    return (
        <div>
        <h2>Detalles</h2>

        <Route path={`${this.props.match.path}/:url`} component={this.CargarContenido} />
        <Route
            exact
            path={this.props.match.path}
            render={() => <h3>Por Favor Seleccione una Pelicula</h3>}
        />
        </div>  
    );
  }

  CargarContenido ({match}) {
    return (
      <ItemVideo from={match.params.url} />
    );
  }

}
 
export default DetallePelicula;