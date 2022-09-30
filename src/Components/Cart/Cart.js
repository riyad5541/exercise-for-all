import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let total = 0;
    for(const exercise of cart){
        total = total + exercise.time;
        // console.log(total)
    }
    return (
        <div className='all-cart'>
             <div className='cart-myself'>
                    <img src="https://images.unsplash.com/photo-1508908324153-d1a219719814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3NlJTIwdXAlMjBtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <h2>Abdullah al riyad</h2>
                </div>
                <h1>Add A Break</h1>

                <div className='btn-set'>
                    <button>2</button>
                    <button>5</button>
                    <button>8</button>
                    <button>10</button>
                    <button>12</button>
                </div>
                <h1>Exercise Details</h1>
                <div>
                    <p>Exercise time : {total}m</p>
                    <p>Break time :</p>
                </div>
        </div>
    );
};

export default Cart;