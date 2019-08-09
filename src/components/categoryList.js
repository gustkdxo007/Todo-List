import React from 'react';
import Category from './category';

const CategoryList = (props) => {
    return (
        <div>
            {props.categories.map((category, i) => <Category key={i} category={category} delCategory={props.delCategory} />)}
        </div>
    );
};

export default CategoryList;