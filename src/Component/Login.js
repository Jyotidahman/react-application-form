import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    let fieldsObj = fields;
    fieldsObj[e.target.name] = e.target.value;
    setFields(fieldsObj);
  };

  const validateForm = () => {
    let fieldsObj = fields;
    let errorsObj = {};
    let formIsValid = true;

    if (!fieldsObj['username']) {
      formIsValid = false;
      errorsObj['username'] = '*Please enter your username.';
    }

    if (!fieldsObj['password']) {
      formIsValid = false;
      errorsObj['password'] = '*Please enter your password.';
    }

    setErrors(errorsObj);
    return formIsValid;
  };

  const contactSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem('name', fields.username);
      let fieldsObj = {};
      fieldsObj['username'] = '';
      fieldsObj['password'] = '';
      setFields(fieldsObj);
      fetchData();
    }
  };

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => history.push('/applicationForm'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form
        className="login_form"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <h1>Login Here </h1>
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={fields.username}
          onChange={handleChange}
        />
        <div className="errorMsg">{errors.username}</div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={fields.password}
          onChange={handleChange}
        />
        <div className="errorMsg">{errors.password}</div>
        <button
          type="submit"
          className="submit_btn"
          onClick={(e) => contactSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
