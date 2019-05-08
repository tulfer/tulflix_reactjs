// import React, { Component } from 'react';
import Inicio from './componentes/inicio/Inicio';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './componentes/header/Header';
import DetallePelicula from './componentes/detalle_pelicula/DetallePelicula';
import VerOtros from './componentes/ver_otros/VerOtros';
import Busqueda from './componentes/busqueda/Busqueda';

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
        <Route path="/buscar" component={Buscar} />
      </div>
    </Router>
  );
}

function Peliculas() {
  return (
    <VerOtros from="peliculas" />
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
function Buscar({ match }) {
  return (
    <Busqueda match={match}/>
  );
}



export default App;