import React, { Component } from 'react';
import './ItemPortada.css'; 
class ItemPortada extends Component {
  render() {
    return (
        <div className="swiper-slide">
            <a href="detalles" data-url={this.props.portada.url}>
                <img src={this.props.portada.url_img} />
                <h3 className="hometitle">{this.props.portada.name}</h3>
            </a>
        </div>
    );
  }
}
 
export default ItemPortada;