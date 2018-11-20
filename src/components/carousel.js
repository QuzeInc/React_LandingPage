import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
         return (
            <Carousel >
                <div>
                    <img classname="teno" src="https://media.istockphoto.com/photos/green-biliard-cloth-color-texture-close-up-picture-id506918794?k=6&m=506918794&s=612x612&w=0&h=f8yw0DTB0JU4fWej-2N3f9H39N3L3MEmUykOXMKeIV8=" />
                    
                </div>
                <div>
                    <img  classname="teno" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                    
                </div>
            
            </Carousel>
        );
    }
}

export default DemoCarousel;