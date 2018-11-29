import React, { Component } from 'react';
import ListaHorizontal from './componentes/lista_horizontal/ListaHorizontal'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="content">
			<section className="panel">
				<h2>Peliculas</h2>
				<div className="peliculas">
          <ListaHorizontal from="peliculas"/>
        </div>
			</section>

      <section className="panel">
				<h2>Series</h2>
				<div className="series">
          <ListaHorizontal from="series"/>
        </div>
			</section>

      <section className="panel">
				<h2>Documentales</h2>
				<div className="documentales">
          <ListaHorizontal from="documentales"/>
        </div>
			</section>

      </main>
    );
  }
}

export default App;
