import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct =()=>{

console.log('clicked')
fetch('https://ancient-sands-12932.herokuapp.com/addproduct',{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(fakeData)
})


    }
    return (
        <div>

            <button  onClick={handleAddProduct}>Add product</button>
           
        </div>
    );
};

export default Inventory;