import React, { Component } from 'react';
import logo from '../../img/logo.png';
import menu from '../../img/menu.svg';
import FormBuscar from '../form_buscar/FormBuscar';

class Header extends Component {
    render() {
      return (
        <header className="header">
            {/* <link href="https://vjs.zencdn.net/7.4.1/video-js.css" rel="stylesheet" /> */}
            {/* <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script> */}

            <figure className="logo"><a href="index"><img src={logo} alt="Logo" /></a></figure>
            <nav className="menu">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/peliculas">Peliculas</a></li>
                <li><a href="/series">Series</a></li>
                <li><a href="/documentales">Documentales</a></li>
                <li><a>Generos</a>
                <ul>
                    <li><a href="genre">Accion</a></li>
                    <li><a href="genre">Comedia</a></li>
                    <li><a href="genre">Drama</a></li>
                    <li><a href="genre">Romance</a></li>
                    <li><a href="genre">Ciencia Ficcion</a></li>
                    <li><a href="genre">Terror</a></li>
                </ul>
                </li>
                <li><a href="mostwatched.html">Mas vistos</a></li>
                <li className="mobsearch">
                <div className="mobform">
                    <input type="text" name="s" onKeyUp={ this.Buscar } className="mobsearchfield" placeholder="Buscar..." />
                </div>
                </li>
                {/* <FormBuscar /> */}
            </ul>
            </nav>
            <div className="search">
                <input type="text" name="s" id="s" onKeyUp={ this.Buscar } className="searchfield" placeholder="Buscar..." />
            </div>
    
            <div className="toggle"><img src={menu} alt=""/></div>
        </header>
      );
    }

    Buscar = (e) => {
        if(e.key == 'Enter'){
            var texto = e.target.value;
            window.location.href = "/buscar/"+texto;
          }
    }


}
export default Header;
