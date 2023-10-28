import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../blocks/login.css'

const Login = ({ handleLogin, handleOpenInfoTooltip }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }

    handleLogin(formValue).then((data) => {
      if (data?.error) {
        return handleOpenInfoTooltip({
          success: false,
          message: data.error,
        });
      }

      navigate("/");
      handleOpenInfoTooltip({
        success: true,
        message: "Вы успешно залогинились!",
      });
    });
  };

  return (
    <div className="login">
      <p className="login__welcome">Вход</p>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="login__input"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          required
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          className="login__input"
          value={formValue.password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
