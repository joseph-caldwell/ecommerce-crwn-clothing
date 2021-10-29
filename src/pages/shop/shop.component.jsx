import React from 'react';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
         this.state={
             collections:SHOP_DATA
         }
    }
    render(){
        return(
            <div>
            <h1>Welcome to my SHOP PAGE</h1>
            </div>
        );
    ;
    }
}

export default ShopPage;