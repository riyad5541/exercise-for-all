import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    // console.log(props)
    const {exercise, handleAddToCart} = props
    const {img,title,time,name,} = exercise;
    return (
        <div className='exercise'>
          <div className='exercise-info'>
          <img src={img} alt="" />
            <p className='exercise-name'>{name}</p>
            <p>{title}</p>
            {/* <p>Age:{age}</p> */}
            <p>Time required :{time}</p>
          </div>
          <button onClick={()=>handleAddToCart(exercise)}  className='btn-cart'>
            <p>Add to list</p>
          </button>
        </div>
    );
};

export default Exercise;