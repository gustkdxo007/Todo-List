import React from 'react';

const Category = (props) => {
    return (
        <div>
            {props.category}
            <button onClick={props.delCategory.bind(this, props.category)}>X</button>
        </div>
    );
};

export default Category;