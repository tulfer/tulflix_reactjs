import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ListaHorizontal.css'; 
import ItemPortada from '../item_ portada/ItemPortada';
import otrosimg from "../../img/others.png";
import fechaDerecha from "../../img/right-arrow.svg";
import fechaIzquierda from "../../img/left-arrow.svg";
import cgItem from "../../img/cargandoItem.png";

class ListaHorizontal extends Component {

    constructor(props){
        super(props);
        this.state = {
            portadas : [{
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
                "url" : "#",
                "url_img": cgItem,
                "name": "...",
                "id" : "0",
                "ranking" : "0"
            },
            {
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

let etiquetaa = (this.state.otros === 1)?<a href={ "/" + this.props.from}><img src={otrosimg} alt="" /></a>:"-";

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    this.state.portadas.map((item,i) => <ItemPortada portada={item} key={i} /> )
                }
                <div className="swiper-slide ultimo">{etiquetaa}</div>
            </div>
            <div className={"nextdirection "+this.props.from+"-next"}><img src={fechaDerecha} alt="" /> </div>
            <div className={"leftdirection "+this.props.from+"-prev"}><img src={fechaIzquierda} alt="" /> </div>
                        
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
 
export default ListaHorizontal;