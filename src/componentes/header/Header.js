import React, { Component } from 'react';
import logo from '../../img/logo.png';
import menu from '../../img/menu.svg';

class Header extends Component {
    render() {
      return (
        <header className="header">
            {/* <link href="https://vjs.zencdn.net/7.4.1/video-js.css" rel="stylesheet" /> */}
            {/* <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script> */}

            <figure className="logo"><a href="index"><img src={logo} alt="Logo" /></a></figure>
            <nav className="menu">
            <ul>
                <li><a href="index">Home</a></li>
                <li><a>Genres</a>
                <ul>
                    <li><a href="genre">Action</a></li>
                    <li><a href="genre">Comedy</a></li>
                    <li><a href="genre">Drama</a></li>
                    <li><a href="genre">Romance</a></li>
                </ul>
                </li>
                <li><a>Year</a>
                <ul>
                    <li><a href="year.html">2017</a></li>
                    <li><a href="year.html">2016</a></li>
                    <li><a href="year.html">2015</a></li>
                    <li><a href="year.html">2014</a></li>
                </ul>
                </li>
                <li><a>Language</a>
                <ul>
                    <li><a href="language.html">English</a></li>
                    <li><a href="language.html">German</a></li>
                </ul>
                </li>
                <li><a href="mostwatched.html">Most Watched</a></li>
                <li className="mobsearch">
                <form className="mobform">
                    <input type="text" name="s" className="mobsearchfield" placeholder="Search..." />
                    <input type="submit" value="" className="mobsearchsubmit" />
                </form>
                </li>
            </ul>
            </nav>
            <form className="search">
            <input type="text" name="s" className="searchfield" placeholder="Search..." />
            <input type="submit" value="" className="searchsubmit" />
            </form>
    
            <div className="toggle"><img src={menu} alt=""/></div>
        </header>
      );
    }
}
export default Header;
