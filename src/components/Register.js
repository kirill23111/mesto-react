import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as auth from '../utils/auth';
import './styles/Register.css';

const Register = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password === formValue.confirmPassword){
      auth.register(formValue.username, formValue.password, formValue.email).then((res) => {
        navigate('/login', {replace: true});
        }
      );
    }
  }

  return (
    <div className="login">
      <p className="login__welcome">
        Пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email">
          Email:
        </label>
        <input id="email" name="email" type="email" className="login__input" value={formValue.email} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input id="password" name="password" type="password" className="login__input" value={formValue.password} onChange={handleChange} />
        <div className="login__button-container">
          <button type="submit" onSubmit={handleSubmit} className="login__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="login__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="login__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;