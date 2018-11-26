import React, { Component } from 'react';
import ListaHorizontal from './componentes/lista_horizontal/ListaHorizontal'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="content">
			<section className="panel">
				<h2>Recently Added</h2>
				<div className="recentslider">
          <ListaHorizontal from="peliculas"/>
        </div>
			</section>
      </main>
    );
  }
}

export default App;
