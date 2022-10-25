import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';

const Checkout=()=>{
    const history = useHistory();
     let count= localStorage.getItem('cartcount');
    let address = localStorage.getItem('address');
    let total = localStorage.getItem('carttotal');
    const handleClick=()=>{
        alert('Your order for ' +count+ ' items has been placed successfully,will be delivered at '+address+ ' in 3-4 working days. The total will be '+total+ '$')
        localStorage.setItem('cartcount',0);
        localStorage.setItem('carttotal', 0);
        return(
            history.push('/home')
        )

    }
    return(
        <>
        <button onClick={handleClick}>Confirm Order</button>
        </>
    )
}
export default Checkout;