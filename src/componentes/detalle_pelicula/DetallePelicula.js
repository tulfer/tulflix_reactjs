import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemVideo from '../item_video/ItemVideo';
import './DetallePelicula.css'
// import ItemPortada from '../item_ portada/ItemPortada';
// import otrosimg from "../../img/others.png";
// import fechaDerecha from "../../img/right-arrow.svg";
// import fechaIzquierda from "../../img/left-arrow.svg";

class DetallePelicula extends Component {

    // match = "";

    constructor(props){
        super(props);
    }

  render() {

// let etiquetaa = (this.state.otros === 1)?<a href='mostwatched.html'><img src={otrosimg} alt="" /></a>:"-";

    return (
        <div>
        <h2>Detalles</h2>
        {/* <ul>
            <li>
            <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
            </li>
            <li>
            <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul> */}

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