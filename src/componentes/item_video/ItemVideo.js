import React, { Component } from 'react';
class ItemVideo extends Component {

    constructor(props){
        super(props);
        this.state = {
            info : [{ 
                "video" : "",
                "name" : "",
                "resumen" : ""
                }]
            }
        this.getContenido(props.from);
    }
  render() {
    return (
        <div className="detalle-video">
            <br/><br></br>
            <h2>
            {
                this.state.info.map((item) => item.video )
            }
            </h2>
            <h2>
            {
                this.state.info.map((item) => item.name )
            }
            </h2>
            <p>
            {
                this.state.info.map((item) => item.resumen )
            }
            </p>
        </div>
    );
  }

  getContenido = (from) => {
    var formData = new FormData();
    
    formData.append('accion', 'getPelicula');
    formData.append('from', from);
    
    fetch('http://tulflix.tk/assets/php/home.php', {
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