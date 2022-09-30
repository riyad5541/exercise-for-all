import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Gymnasium.css'

const Gymnasium = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('exercises.json')
        .then(res => res.json())
        .then(data =>setExercises(data))
    }, []);
    const handleAddToCart  = (exercise) =>{

        const newCart =[...cart,exercise];
        setCart(newCart);
    }
    return (
        <div className='gymnasium-container'>
            <div className='exercises-container'>
                {
                    exercises.map(exercise=><Exercise
                         key={exercise.id}
                         exercise={exercise}
                         handleAddToCart={handleAddToCart}
                         ></Exercise>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={ cart }></Cart>
            </div>
        </div>
    );
};

export default Gymnasium;