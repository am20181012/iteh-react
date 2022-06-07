import React from "react";

const ExpenseCategory = ({ getCategory }) => {
  return (
    <div>
      <select
        onChange={(event) => {
          getCategory(event.target.value);
        }}
      >
        <option value="Product">Product</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default ExpenseCategory;
