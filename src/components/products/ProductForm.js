import React from "react";
import FormInput from "../UI/FormInput";
import './ProductForm.css'

const ProductForm = (props) => {
  return (
    <form className="list-form">
      <FormInput
        label='Amount'
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className="btn add">+ Add</button>
    </form>
  );
};

export default ProductForm;
