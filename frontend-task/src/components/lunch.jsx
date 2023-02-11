import React, {Component} from 'react';
import Card from './card';

class Lunch extends Component{

    constructor(){
        super();
        this.state=({img:"images/bataka-shaak.jpg", title:"Bataka Shaak", price:"$20",img2:"images/sevtameta-shaak.jpg", title2:"SevTameta Shaak", price2:"$25",img3:"images/bhinda-shaak.jpg", title3:"Bhinda Shaak", price3:"$28",img4:"images/daal-shaak.jpg", title4:"Daal", price4:"$30" });
    }

    gujClick = () =>{
        this.setState({img:"images/bataka-shaak.jpg", title:"Bataka Shaak", price:"$20",img2:"images/sevtameta-shaak.jpg", title2:"SevTameta Shaak", price2:"$25",img3:"images/bhinda-shaak.jpg", title3:"Bhinda Shaak", price3:"$28",img4:"images/daal-shaak.jpg", title4:"Daal", price4:"$30" });
    }

    punClick = () =>{
        this.setState({img:"images/daalfry.jpg",title:"Daal Fry",price:"$26"})
    }

    render(){
    // const data = ['Gujrati Lunch','Panjabi Lunch','Kathiyavadi Lunch','SouthIndian Lunch'];
    // const returnData = Object.entries(data).map((res,i)=>{
    //     return <button className='btn btn-dark mt-5' key={i}>{res[1]}</button>
    // })
    return (
        <>
          <div className="container mt-5">
            <div className="row">
                <div className="col-2">
                <button className='btn btn-dark mt-5' onClick={this.gujClick}>Gujrati Lunch</button> 
                <button className='btn btn-dark mt-5' onClick={this
                .punClick}>Panjabi Lunch</button>  
                <button className='btn btn-dark mt-5'>Nonveg Lunch</button>  
                <button className='btn btn-dark mt-5'>SouthIndian Lunch</button>
                </div>
                <div className="col-10">
                <div className="row">
                        <div className="col-3 mt-5">
                            <Card img={this.state.img} title={this.state.title} price={this.state.price}/>
                        </div>
                         <div className="col-3 mt-5">
                            <Card img={this.state.img2} title={this.state.title2} price={this.state.price2}/>
                        </div>
                        <div className="col-3 mt-5">
                            <Card img={this.state.img3} title={this.state.title3} price={this.state.price3}/>
                        </div>
                        <div className="col-3 mt-5">
                            <Card img={this.state.img4} title={this.state.title4} price={this.state.price4}/>
                        </div>
                    </div>  
                </div> 
                </div>
            </div>
        </>
    );
}
}

export default Lunch;