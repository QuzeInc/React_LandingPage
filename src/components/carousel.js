import Carousel from "nuka-carousel";
import React from "react";
import ReactDom from "react-dom";

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

class CarouselView extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            slideIndex: 0,
            length: 6,
            wrapAround: false,
            underlineHeader: false,
            slidesToShow: 1,
            cellAlign: "left",
            transitionMode: "scroll",
            heightMode: "max",
            withoutControls: false
        };

        this.handleImageClick = this.handleImageClick.bind(this);
    }

    handleImageClick() {
        this.setState({ underlineHeader: !this.state.underlineHeader });
    }

    render() {
        return (
            <div style={{ width: "100%",height:450, margin: "auto" }}>
                <Carousel 
                    withoutControls={this.state.withoutControls}
                    transitionMode={this.state.transitionMode}
                    cellAlign={this.state.cellAlign}
                    slidesToShow={this.state.slidesToShow}
                    wrapAround={this.state.wrapAround}
                    slideIndex={this.state.slideIndex}
                    heightMode={this.state.heightMode}
                    renderTopCenterControls={({ currentSlide }) => (
                        <div
                            style={{
                                fontFamily: "Helvetica",
                                color: "#fff",
                                textDecoration: this.state.underlineHeader
                                    ? "underline"
                                    : "none"
                            }}
                        >
                           
                        </div>
                    )}
                >
                    {colors.slice(0, this.state.length).map((color, index) => (
                        <img
                            src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
                                1}`}
                            alt={`Slide ${index + 1}`}
                            key={color}
                            onClick={this.handleImageClick}
                            style={{
                                height:450
                            }}
                        />
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default CarouselView 