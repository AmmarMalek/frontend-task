import React, {Component} from 'react';

class Dinner extends Component{
    render(){
    // const data = ['Gujrati Dinner','Panjabi Dinner','Kathiyavadi Dinner','SouthIndian Dinner'];
    // const returnData = Object.entries(data).map((res,i)=>{
    //     return <button className='btn btn-dark mt-5' key={i}>{res[1]}</button>
    // })
    return (
        <>
            <div className="container mt-5">
            <div className="row">
                <div className="col-2">
                <button className='btn btn-dark mt-5'>Gujrati Dinner</button> 
                <button className='btn btn-dark mt-5'>Panjabi Dinner</button>  
                <button className='btn btn-dark mt-5'>Nonveg Dinner</button>  
                <button className='btn btn-dark mt-5'>SouthIndian Dinner</button>  
                </div>
                <div className="col-10">
                    
                </div>
            </div>
        </div>  
        </>
    );
}
}
export default Dinner;