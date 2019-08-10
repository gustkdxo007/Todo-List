import React from 'react';

const AddCategory = (props) => {
    
    return (
        <div>
            <button onClick={props.addCategory}>+</button>목록 추가
        </div>
    );
};

export default AddCategory;