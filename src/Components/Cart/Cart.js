import React, { useState } from 'react';
import './Cart.css'
import Swal from 'sweetalert2'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)
    const [time, setTime] = useState(0)
    let total = 0;
    for(const exercise of cart){
        total = total + exercise.time;
        // console.log(total)
    }
    const handleAddToBreak = (breakTime) => {
        localStorage.setItem('breakTime',JSON.stringify(breakTime))
        setTime(breakTime)
    }
    const handleActivity = () =>{
        Swal.fire(
            'Good job!',
            'Activity Completed Succesfully!',
            'success'
        )
    }
    return (
        <div className='all-cart'>
             <div className='cart-myself'>
                    <img src="https://images.unsplash.com/photo-1508908324153-d1a219719814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3NlJTIwdXAlMjBtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <h2>Abdullah al riyad</h2>
                </div>
                <h1>Add A Break</h1>

                <div className='btn-set'>
                    <button onClick={() => handleAddToBreak(2)}>2</button>
                    <button onClick={() => handleAddToBreak(5)}>5</button>
                    <button onClick={() => handleAddToBreak(8)}>8</button>
                    <button onClick={() => handleAddToBreak(10)}>10</button>
                    <button onClick={() => handleAddToBreak(12)}>12</button>
                </div>
                <h1>Exercise Details</h1>
                <div>
                    <p>Exercise time : {total}m</p>
                    <p>Break time: {time}</p>
                </div>
                <button onClick={handleActivity} className='activity-btn'>Activity completed</button>
        </div>
    );
};

export default Cart;