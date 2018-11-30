import React, { Component } from 'react';
import ListaHorizontal from '../lista_horizontal/ListaHorizontal'
import ListaHomeswiper from '../lista_homeswiper/ListaHomeswiper';
// import Header from '../header/Header';

class Inicio extends Component {
  render() {
    return (
      <div>
        <ListaHomeswiper/>
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
      </div>
    );
  }
}

export default Inicio;
