import React, { Component } from 'react';
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
                    }
                },
                "name" : "",
                "resumen" : "",
                "estado" : "",
                "img" : ""
                }]
            }
        this.getContenido(props.from);
    }
  render() {
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
                        <iframe id="elframe" src={ "http://api.tulflix.tk/video.php?url=" + this.state.info.map((item) => item.video.rapidvideo.url ) } width="100%" height="500px" scrolling="no" frameBorder="0" allowFullScreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>
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
            this.setState({
                info : contenido
            })
        })
  }

}


 
export default ItemVideo;