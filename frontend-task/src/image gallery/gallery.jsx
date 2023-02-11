import React, { Component } from 'react';

class Gallery extends Component {
    constructor()
    {
        super();
        this.state={img:"images/dubai-day.jpg"};
    }

    imgChange = () =>{
        this.setState({img:"images/dubai-night.jpg"});
    }
    render() {
        return (
            <>
            <div className="container d-flex align-items-center justify-content-center mt-5 flex-column">
                    <img src={this.state.img} alt="" className='gallery-img img-fluid' /> 
                    <button className='btn btn-dark px-5 mt-3' onClick={this.imgChange}>Click Me</button> 
              </div>
            </>
        );
    }
}

export default Gallery;
