import React from 'react';

const Category = (props) => {
    return (
        <div>
            {props.category}
            <button>X</button>
        </div>
    );
};

export default Category;