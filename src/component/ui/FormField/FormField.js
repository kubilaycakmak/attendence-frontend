import React from 'react';
import styles from './FormField.module.scss';

const FormField = ({
  type,
  id,
  labelText,
  name,
  value,
  arrKey = '',
  arrItemObjId = '',
  arrItemObjKey = '',
  handleChange,
  handleDirectValue,
}) => {
  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={id}>{labelText}</label>
      <input
        onChange={(e) =>
          handleChange({
            field: id,
            arrKey,
            arrItemObjId,
            arrItemObjKey,
            value: e.target.value,
          })
        }
        type={type}
        id={id}
        name={name}
        value={value}
      />
    </div>
  );
};

export default FormField;
