import React from 'react';

const Category = (props) => {
    return (
        <div className='Category-category'>
            <span className='Category-span' onClick={props.handleCategory.bind(this, props.category)}>{props.category}</span>
            <button className='Category-btn' onClick={props.delCategory.bind(this, props.category)}>X</button>
        </div>
    );
};

export default Category;