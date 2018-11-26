import React, { Component } from 'react';
import './ListaHorizontal.css'; 
import ItemPortada from '../item_ portada/ItemPortada';
import otros from "../../img/others.png";
import fechaDerecha from "../../img/right-arrow.svg";
import fechaIzquierda from "../../img/left-arrow.svg";

class ListaHorizontal extends Component {

    constructor(props){
        super(props);
        this.state = {
            portadas : [{
                "url" : "https://www.pelisplus.to/pelicula/un-invierno-en-la-playa",
                "url_img": "https://image.tmdb.org/t/p/w300/eSbsvWMYIHMfP3w6SARZbbLZ3H4.jpg",
                "name": "Un invierno en la playa (2012)"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/el-espinazo-del-diablo",
                "url_img": "https://image.tmdb.org/t/p/w300/wKHHsu1awdIUHq6OlkMoxEPNylB.jpg",
                "name": "El espinazo del diablo (2001)",
                "ranking": "7.3/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/the-italian-job",
                "url_img": "https://image.tmdb.org/t/p/w300/apqpvTKNpYm0aJkROA4V4wHewr1.jpg",
                "name": "The Italian Job (2003)",
                "ranking": "6.7/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/ray",
                "url_img": "https://image.tmdb.org/t/p/w300/fPDsBL0MdegEvyPhim9b5srHOqG.jpg",
                "name": "Ray (2004)",
                "ranking": "7.3/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/crueles-intenciones-3",
                "url_img": "https://image.tmdb.org/t/p/w300/i93IWmPahd4m8OMW3O6AWptapF9.jpg",
                "name": "Crueles intenciones 3 (2004)",
                "ranking": "4.5/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/crueles-intenciones",
                "url_img": "https://image.tmdb.org/t/p/w300/mtrwhgtrOBwI5rukvWrOJiZwtye.jpg",
                "name": "Crueles intenciones (1999)",
                "ranking": "6.6/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/ya-veremos",
                "url_img": "https://image.tmdb.org/t/p/w300/9mHra4oybSoJQJ96EvKDHTdIiGB.jpg",
                "name": "Ya veremos (2018)",
                "ranking": "7.6/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/lean-on-pete",
                "url_img": "https://image.tmdb.org/t/p/w300/5mGatHDSdlJXWhR52lNMZgP5Kks.jpg",
                "name": "Lean on Pete (2017)",
                "ranking": "6.8/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/mision-estrella",
                "url_img": "https://image.tmdb.org/t/p/w300/A7KiAL72poSUeefqrsAs5os2V9k.jpg",
                "name": "MisiÃ³n Estrella (2016)",
                "ranking": "6.5/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/la-sombra-de-la-ley",
                "url_img": "https://image.tmdb.org/t/p/w300/1oC6UwQQm79VxHJUoSi8vcE6Jsm.jpg",
                "name": "La sombra de la ley (2018)",
                "ranking": "6.7/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/la-sombra-de-la-ley",
                "url_img": "https://image.tmdb.org/t/p/w300/1oC6UwQQm79VxHJUoSi8vcE6Jsm.jpg",
                "name": "La sombra de la ley (2018)",
                "ranking": "6.7/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/la-sombra-de-la-ley",
                "url_img": "https://image.tmdb.org/t/p/w300/1oC6UwQQm79VxHJUoSi8vcE6Jsm.jpg",
                "name": "La sombra de la ley (2018)",
                "ranking": "6.7/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/la-sombra-de-la-ley",
                "url_img": "https://image.tmdb.org/t/p/w300/1oC6UwQQm79VxHJUoSi8vcE6Jsm.jpg",
                "name": "La sombra de la ley (2018)",
                "ranking": "6.7/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/la-sombra-de-la-ley",
                "url_img": "https://image.tmdb.org/t/p/w300/1oC6UwQQm79VxHJUoSi8vcE6Jsm.jpg",
                "name": "La sombra de la ley (2018)",
                "ranking": "6.7/10"
            },
            {
                "url": "https://www.pelisplus.to/pelicula/la-sombra-de-la-ley",
                "url_img": "https://image.tmdb.org/t/p/w300/1oC6UwQQm79VxHJUoSi8vcE6Jsm.jpg",
                "name": "La sombra de la ley (2018)",
                "ranking": "6.7/10"
            }]
        }
        this.getContenido(props.from);  
        // this.getContenido(props.from).then(contenido => console.log(contenido));
    }

  render() {
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    this.state.portadas.map((item,i) => <ItemPortada portada={item} key={i} /> )
                }
                <div className="swiper-slide"><a href="mostwatched.html"><img src={otros} /></a></div>
            </div>
            <div className="nextdirection recent-next"><img src={fechaDerecha} /> </div>
            <div className="leftdirection recent-prev"><img src={fechaIzquierda} /> </div>
        </div>
    );
  }

  getContenido = (from) => {
    var formData = new FormData();
    
    formData.append('accion', 'getContenido');
    formData.append('from', from);
    formData.append('pagina', '1');
    
    fetch('http://tulflix.tk/assets/php/home.php', {
        method: 'POST',
        body: formData
        })
        .then(Response => Response.json())
        .then(contenido => {
            this.setState({
                portadas : contenido
            })
        })
   
  }

}
 
export default ListaHorizontal;