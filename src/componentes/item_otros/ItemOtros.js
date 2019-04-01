import React, { Component } from 'react';
import ItemCuadricula from '../item_cuadricula/ItemCuadricula';
import './ItemOtros.css'; 
import cgItem from "../../img/cargandoItem.png";

class ItemOtros extends Component {

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
        this.getContenido(props.from);  
        
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

  getContenido = (from) => {
    var formData = new FormData();
    
    formData.append('accion', 'getContenido');
    formData.append('from', from);
    formData.append('pagina', '1');
    
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
 
export default ItemOtros;