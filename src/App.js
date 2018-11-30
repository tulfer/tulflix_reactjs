// import React, { Component } from 'react';
import Inicio from './componentes/inicio/Inicio';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './componentes/header/Header';
import DetallePelicula from './componentes/detalle_pelicula/DetallePelicula';

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Route exact path="/" component={Inicio} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Series} />
        <Route path="/dp" component={Detalles} />
      </div>
    </Router>
  );
}

function Peliculas() {
  return (
    <div>
      <h2>Peliculas</h2>
    </div>
  );
}

function Series() {
  return (
    <div>
      <h2>Series</h2>
    </div>
  );
}
function Detalles({ match }) {
  return (
    <DetallePelicula match={match}/>
  );
}



export default App;