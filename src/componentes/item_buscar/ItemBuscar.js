import React, { Component } from 'react';
import ItemCuadricula from '../item_cuadricula/ItemCuadricula';
import './ItemBuscar.css'; 
import cgItem from "../../img/cargandoItem.png";

class ItemBuscar extends Component {

    constructor(props){
        super(props);
        this.state = {
            portadas : [{
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            }],
            otros : 0
        }
        this.getContenido(props.s);  
        
        // this.getContenido(props.from).then(contenido => console.log(contenido));
    }

  render() {

    return (
        <div className="movies">
            {
                this.state.portadas.map((item,i) => <ItemCuadricula portada={item} key={i} /> )
            }
        </div>
    );
  }

  getContenido = (s) => {
    var formData = new FormData();
    
    formData.append('accion', 'getBuscar');
    formData.append('s', s);
    
    fetch('http://api.tulflix.tk', {
        method: 'POST',
        body: formData
        })
        .then(Response => Response.json())
        .then(contenido => {
            this.setState({
                portadas : contenido,
                otros: 1
            })
        })
   
  }

}
 
export default ItemBuscar;