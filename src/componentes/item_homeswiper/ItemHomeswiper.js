import React, { Component } from 'react';
import './ItemHomeswiper.css'; 
class ItemHomeswiper extends Component {
  render() {
    return (
        <div className="swiper-slide">
            <img src={this.props.home.url_img} alt="" />
            <div className="caption">
                <div className="captioninside">
                <h3>{this.props.home.name}</h3>
                <p>Proximamente!</p>
                <a href={this.props.home.url} className="playbutton" target = "_blank">Ver Trailer</a>
                </div>
            </div>
        </div>
    );
  }
}
 
export default ItemHomeswiper;