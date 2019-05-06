import React, { Component } from 'react';
import './ListaHomeswiper.css'; 
// import ItemHomeswiper from '../item_homeswiper/ItemHomeswiper';
import ItemHomeswiper from '../item_homeswiper/ItemHomeswiper';

class ListaHomeswiper extends Component {

    constructor(props){
        super(props);
        this.state = {
            home : [{
                "name": "Toy Story 4",
                "url": "https://www.youtube.com/results?search_query=Toy+Story+4",
                "url_img": "http://api.tulflix.tk/imgs/proximos/Toy_Story_4.jpg",
                "id": 0
            },
            {
                "name": "Los Nuevos Mutantes",
                "url": "https://www.youtube.com/results?search_query=Los+Nuevos+Mutantes",
                "url_img": "http://api.tulflix.tk/imgs/proximos/Los_Nuevos_Mutantes.jpg",
                "id": 1
            },
            {
                "name": "Avatar 2",
                "url": "https://www.youtube.com/results?search_query=Avatar+2",
                "url_img": "http://api.tulflix.tk/imgs/proximos/Avatar_2.jpg",
                "id": 2
            },
            {
                "name": "Guerra Mundial Z 2",
                "url": "https://www.youtube.com/results?search_query=Guerra+Mundial+Z+2",
                "url_img": "http://api.tulflix.tk/imgs/proximos/Guerra_Mundial_Z_2.jpg",
                "id": 3
            },
            {
                "name": "Brothers' Nest",
                "url": "https://www.youtube.com/results?search_query=Brothers'+Nest",
                "url_img": "http://api.tulflix.tk/imgs/proximos/Brothers'_Nest.jpg",
                "id": 4
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