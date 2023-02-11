import React, { Component } from 'react';
import Card from './card';

class Breakfast extends Component {

    constructor()
    {
        super();
        this.state=({img:"images/white-tea.jpg", title:"White Tea", price:"$10",img2:"images/black-tea.jpg", title2:"Black Tea",price2:"$15",img3:"images/green-tea.jpg", title3:"Green Tea",price3:"$20",img4:"images/herbal-tea.jpg", title4:"Herbal Tea",price4:"$25"})
    }
    
    teaClick = () =>{
        this.setState({img:"images/white-tea.jpg", title:"White Tea", price:"$10",img2:"images/black-tea.jpg", title2:"Black Tea",price2:"$15",img3:"images/green-tea.jpg", title3:"Green Tea",price3:"$20",img4:"images/herbal-tea.jpg", title4:"Herbal Tea",price4:"$25"})
    }

    coffeeClick = () =>{
        this.setState({img:"images/black-coffee.jpg", title:"Black Coffee", price:"$10",img2:"images/redeye-coffee.jpg", title2:"Red-Eye Coffee", price2:"$18",img3:"images/latte-coffee.jpg", title3:"Latte Coffee", price3:"$20",img4:"images/americano-coffee.jpg", title4:"Americano Coffee", price4:"$27"})
    }

    eggClick = () =>{
        this.setState({img:"images/halffry-egg.jpg", title:"Half Fry", price:"$20",img2:"images/omelette-egg.jpg", title2:"Omelette", price2:"$23",img3:"images/softboiled-egg.jpg", title3:"Soft Boiled Egg", price3:"$24",img4:"images/scrambled-egg.jpg", title4:"Scrambled Egg", price4:"$36"})
    }

    juiceClick = () =>{
        this.setState({img:"images/orange-juice.jpg", title:"Orange Juice", price:"$20",img2:"images/kiwi-juice.jpg", title2:"Kiwi Juice", price2:"$26",img3:"images/apple-juice.jpg", title3:"Apple Juice", price3:"$23",img4:"images/guava-juice.jpg", title4:"Guava Juice", price4:"$25"})
    }

    render() {
    //     const data = ['Tea','Coffee','Egg','Juice','Bread'];
    // const returnData = Object.entries(data).map((res,i)=>{
    //     return <button onClick={this.teaClick} className='btn btn-dark mt-5' key={i}>{res[1]}</button>
    // })
        return (
            <>
             <div className="container mt-5">
            <div className="row">
                <div className="col-1">
                <button onClick={this.teaClick} className='btn btn-dark mt-5'>Tea</button>

                <button onClick={this.coffeeClick} className='btn btn-dark mt-5'>Coffee</button>

                <button onClick={this.eggClick} className='btn btn-dark mt-5'>Egg</button>

                <button onClick={this.juiceClick} className='btn btn-dark mt-5'>Juice</button>
                </div>
                <div className="col-11">
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

export default Breakfast;
