import React, { Component } from 'react';
import './ItemCuadricula.css'; 
class ItemCuadricula extends Component {
  render() {
    return (
        <div className="mov">
                <a href={"dp/"+this.props.portada.url}>
                    <img src={this.props.portada.url_img} alt="" />
                    <h2 className="movietitle">{decodeURIComponent(escape(this.props.portada.name))}</h2>
                </a>
            </div>
    );
  }
}
 
export default ItemCuadricula;