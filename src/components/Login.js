import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as auth from '../utils/auth';
import './styles/Login.css';

const Login = ({handleLogin}) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
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
    if (!formValue.email || !formValue.password){
      return;
    }
    auth.authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.jwt){
          setFormValue({email: '', password: ''});
          handleLogin();
          navigate('/diary', {replace: true});
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="login">
      <p className="login__welcome">
        Добро пожаловать!
      </p>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email">
          Email:
        </label>
        <input id="email" name="email" type="email" className="login__input" value={formValue.email} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input required id="password" name="password" type="password" className="login__input" value={formValue.password} onChange={handleChange} />
        <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/register" className="login__login-link">Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Login;