import React, { useState } from 'react';
import './ApplicationForm.css';
import MultiSelectAll from './MultiSelectAll';

const ApplicationForm = () => {
  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState({});
  const name = localStorage.getItem('name') || 'User';

  const handleChange = (e) => {
    let fieldsObj = fields;
    fieldsObj[e.target.name] = e.target.value;
    setFields(fieldsObj);
  };
  
  const validateForm = () => {
    let fieldsObj = fields;
    let errorsObj = {};
    let formIsValid = true;

    if (!fieldsObj['name']) {
      formIsValid = false;
      errorsObj['name'] = '*Please enter your name.';
    }

    if (!fieldsObj['date']) {
      formIsValid = false;
      errorsObj['date'] = '*Please enter date.';
    }
    
    if (!fieldsObj['number']) {
      formIsValid = false;
      errorsObj['number'] = '*Please enter number.';
    }
    
    if (!fieldsObj['file']) {
      formIsValid = false;
      errorsObj['file'] = '*Please select file.';
    }
    
    if (!fieldsObj['data']) {
      formIsValid = false;
      errorsObj['data'] = '*Please select color.';
    }

    setErrors(errorsObj);
    return formIsValid;
  };

  const submitApplicationForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      let fieldsObj = {};
      fieldsObj['name'] = '';
      fieldsObj['date'] = '';
      fieldsObj['number'] = '';
      fieldsObj['file'] = '';
      fieldsObj['data'] = '';
      setFields(fieldsObj);
      localStorage.removeItem('name');
      alert('Success');
    }
  };

  return (
    <div className="appform">
      <form className="app_form">
        <h1>Welcome {`${name}`} </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={handleChange}
        />
        <div className="errorMsg">{errors.name}</div>
        <input
          type="date"
          name="date"
          placeholder="date"
          value={fields.date}
          onChange={handleChange}
        />
        <div className="errorMsg">{errors.date}</div>
        <input
          type="number"
          name="number"
          placeholder="Enter Number"
          value={fields.number}
          onChange={handleChange}
        />
        <div className="errorMsg">{errors.number}</div>
        <input
          type="file"
          name="file"
          placeholder="Choose File"
          value={fields.file}
          onChange={handleChange}
        />
        <div className="errorMsg">{errors.file}</div>
           <MultiSelectAll className="multiselectall"/>
        <div className="errorMsg">{errors.pets}</div>

        <button
          type="submit"
          className="submit_btn"
          onClick={(e) => {
            submitApplicationForm(e);
          }}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default ApplicationForm;
