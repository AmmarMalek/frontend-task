import React, {Component} from 'react';

class Card extends Component {
    render(){
    return (
        <>
            <div className="card">
            <img src={this.props.img} className="card-img-top" alt="..."  />
            <div className="card-body text-center">
                <h5 className="card-title">{this.props.title}</h5>
                <h4>{this.props.price}</h4>
                <div className="d-grid">
                    <button className="btn btn-dark" type="button">Buy Now</button>
                </div>
            </div>
            </div>   
        </>
    );
}
}

export default Card;