import React from "react";

const AddCategory = props => {
  return (
    <div className="addCate">
      <button className="addCateBtn" onClick={props.addCategory}>
        +
      </button>
      목록 추가
    </div>
  );
};

export default AddCategory;
