import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Breakfast from './breakfast';
import Lunch from './lunch';
import Dinner from './dinner';

class Header extends Component {
    render() {

        const Menu = {'/breakfast':'Breakfast','/lunch':'Lunch','/dinner':'Dinner'}
        const returnData = Object.entries(Menu).map((res,i)=>{
            return <Link key={i} className="nav-link active" aria-current="page" to={res[0]}>{res[1]}</Link>
        })

        return (
            <>
    <Router>
    <header>
        <div className="nav">
            {returnData}
        </div>
    </header>

<Routes>
    <Route path='/breakfast' element={<Breakfast />} />
    <Route path='/lunch' element={<Lunch />} />
    <Route path='/dinner' element={<Dinner />} />
</Routes>

</Router>
            </>
        );
    }
}

export default Header;
