import React, { useState } from "react";
import logo from '../imgs/logo_.png';

const PopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateName = (name) => {
    if (!/^[А-ЯЁA-Z][а-яёa-zА-ЯЁA-Z]+$/.test(name)) {
      return 'Имя должно начинаться с заглавной буквы и содержать только буквы';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) return 'Пароль должен быть не менее 8 символов';
    if (!/\d/.test(password)) return 'Пароль должен содержать хотя бы одну цифру';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');

    if (name === 'name') {
      setNameError(validateName(value));
    }

    if (name === 'password') {
      setPasswordError(validatePassword(value));
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const nameErr = validateName(formData.name);
    const passwordErr = validatePassword(formData.password);

    if (nameErr || passwordErr) {
      setNameError(nameErr);
      setPasswordError(passwordErr);
      return;
    }

    if (formData.name === 'Амина' && formData.password === 'straykidsskz8') {
      onClose(); // вход успешен
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="authentication">
      <img className="logo" src={logo} alt="logo" />
      <div className="text">Корпоративный портал</div>

      {error && <div className="auth-error">{error}</div>}
      
      <form onSubmit={handleLogin}>
            <div className="input-container">
                <div className="input-wrapper">
                     <input
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        className={nameError ? 'input-error' : ''}
                    />
                    {nameError && <div className="field-error">{nameError}</div>}
                </div>

                <div className="input-wrapper">
                    <input
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        className={passwordError ? 'input-error' : ''}
                    />
                    {passwordError && <div className="field-error">{passwordError}</div>}
                </div>
            </div>

            <button type="submit">Войти</button>
        </form>
    </div>
  );
};

export default PopUp;
