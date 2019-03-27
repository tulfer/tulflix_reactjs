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
        <Route path="/documentales" component={Documentales} />
        <Route path="/dp" component={Detalles} />
      </div>
    </Router>
  );
}

function Peliculas() {
  return (
    <div>
      <br></br><br></br>
      <h1>Peliculas</h1>
      <center><h2>Pronto...</h2></center>
    </div>
  );
}

function Series() {
  return (
    <div>
      <br></br><br></br>
      <h1>Series</h1>
      <center><h2>Pronto...</h2></center>
    </div>
  );
}
function Documentales() {
  return (
    <div>
      <br></br><br></br>
      <h1>Documentales</h1>
      <center><h2>Pronto...</h2></center>
    </div>
  );
}
function Detalles({ match }) {
  return (
    <DetallePelicula match={match}/>
  );
}



export default App;