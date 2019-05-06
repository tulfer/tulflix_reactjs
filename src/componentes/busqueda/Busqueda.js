import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VerBuscar from '../ver_buscar/VerBuscar';
import './Busqueda.css'
// import ItemPortada from '../item_ portada/ItemPortada';
// import otrosimg from "../../img/others.png";
// import fechaDerecha from "../../img/right-arrow.svg";
// import fechaIzquierda from "../../img/left-arrow.svg";

class Busqueda extends Component {

    // match = "";

    constructor(props){
        super(props);
    }

  render() {

// let etiquetaa = (this.state.otros === 1)?<a href='mostwatched.html'><img src={otrosimg} alt="" /></a>:"-";

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