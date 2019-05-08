import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ItemVideo extends Component {

    constructor(props){
        super(props);
        this.state = {
            info : [{ 
                "video" : { 
                    "rapidvideo" : {
                        "url" : "",
                        "calidad" : "",
                        "estado" : 0
                    },
                    "openload" : {
                        "url" : "",
                        "calidad" : "",
                        "estado" : 0
                    },
                    "mystream" : {
                        "url" : "",
                        "calidad" : "",
                        "estado" : 0
                    }
                },
                "name" : "",
                "resumen" : "",
                "estado" : "",
                "img" : ""
                }],
            cargando : '0'
        }
        this.getContenido(props.from);
    }
  render() {
      var  video = <iframe id="elframe" src="http://api.tulflix.tk/video.php?url=" width="100%" height="500px" scrolling="no" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>;
      if(this.state.cargando === '1'){
        if ( this.state.info.map((item) => item.video.rapidvideo.estado ) === 200 ){
                video = <iframe id="elframe" src={ "http://api.tulflix.tk/video.php?url=" + this.state.info.map((item) => item.video.rapidvideo.url ) } width="100%" height="500px" scrolling="no" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>;
        }else if ( this.state.info.map((item) => item.video.openload.estado ) === 200 ){
                video = <iframe id="elframe" src={ "http://api.tulflix.tk/video.php?url=" + this.state.info.map((item) => item.video.openload.url ) } width="100%" height="500px" scrolling="no" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>;
        }else if ( this.state.info.map((item) => item.video.mystream.estado ) === 200 ){
                video = <iframe id="elframe" src={ this.state.info.map((item) => item.video.mystream.url ) } width="100%" height="500px" scrolling="no" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>;
        }else{
                video = <iframe id="elframe" src={"http://api.tulflix.tk/video.php?url=" + this.state.info.map((item) => item.video.rapidvideo.url ) } width="100%" height="500px" scrolling="no" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>;
        }
      }
    return (
        <main className="content">
			<div className="single">
                <section className="movie">
                    <img src={ this.state.info.map((item) => item.img ) } />
                    <ul>
                        <li>
                        {
                            decodeURIComponent(escape(this.state.info.map((item) => item.name )))
                        }
                        </li>
                        <li>
                        {
                            decodeURIComponent(escape(this.state.info.map((item) => item.resumen )))
                        }
                        </li>
                    </ul>
                </section>
                <section className="trailer">
					<div className="trailer_frame">
                        { video }
					</div>
				</section>
                
            </div>
            {/* <script src='https://vjs.zencdn.net/7.4.1/video.js'></script> */}
        </main>
    );
  }

  getContenido = (from) => {
    var formData = new FormData();
    
    formData.append('accion', 'getPelicula');
    formData.append('from', from);
    
    fetch('http://api.tulflix.tk', {
        method: 'POST',
        body: formData
        })
        .then(Response => Response.json())
        .then(contenido => {
            console.log(contenido);
            this.setState({
                info : contenido,
                cargando : '1'
            })
            
        })

  }

}


 
export default ItemVideo;