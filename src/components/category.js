import React from 'react';

const Category = (props) => {
    return (
        <div>
            <span onClick={props.handleCategory.bind(this, props.category)}>{props.category}</span>
            <button onClick={props.delCategory.bind(this, props.category)}>X</button>
        </div>
    );
};

export default Category;