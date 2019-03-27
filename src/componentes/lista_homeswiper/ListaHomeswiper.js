import React, { Component } from 'react';
import './ListaHomeswiper.css'; 
// import ItemHomeswiper from '../item_homeswiper/ItemHomeswiper';
import ItemHomeswiper from '../item_homeswiper/ItemHomeswiper';

class ListaHomeswiper extends Component {

    constructor(props){
        super(props);
        this.state = {
            home : [{
                "url" : "https://www.pelisplus.to/pelicula/un-invierno-en-la-playa",
                "url_img": "https://image.tmdb.org/t/p/w300/eSbsvWMYIHMfP3w6SARZbbLZ3H4.jpg",
                "name": "Un invierno en la playa (2012)"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/el-espinazo-del-diablo",
                "url_img": "https://image.tmdb.org/t/p/w300/wKHHsu1awdIUHq6OlkMoxEPNylB.jpg",
                "name": "El espinazo del diablo (2001)"
            }]
        }
        this.getProximos();  
        
        // this.getContenido(props.from).then(contenido => console.log(contenido));
    }

  render() {

    return (

        <div className="homeslider">
          <div className="swiper-container">

            <div className="swiper-wrapper">
                {
                    this.state.home.map((item,i) => <ItemHomeswiper home={item} key={i} /> )
                }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
 
    );
  }

  getProximos = () => {
    var formData = new FormData();
    
    formData.append('accion', 'getProximos');
    
    fetch('http://api.tulflix.tk', {
        method: 'POST',
        body: formData
        })
        .then(Response => Response.json())
        .then(contenido => {
            this.setState({
                home : contenido
            })
        })
   
  }

}
 
export default ListaHomeswiper;