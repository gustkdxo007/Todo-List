import React from 'react';
import Category from './category';

const CategoryList = (props) => {
    return (
        <div>
            {props.categories.map((category, i) => <Category key={i} category={category.category} />)}
        </div>
    );
};

export default CategoryList;