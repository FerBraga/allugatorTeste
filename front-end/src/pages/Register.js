import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../api/getFromApi';
import { addUser } from '../api/localStorage';
import NavBarLogin from '../components/NavBarLogin';
import '../styles/login.css';

function Register() {
  const [inputEmail, setEmail] = useState('');
  const [inputName, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputPassword, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function registerValidate() {
      const PASSWORD_LIMIT = 6;
      const NAME_MIN = 12;
      const re = /\S+@\S+\.\S+/;
      if (re.test(inputEmail)
      && inputPassword.length >= PASSWORD_LIMIT
      && inputName.length >= NAME_MIN) {
        setIsDisabled(false);
      };
    };
    registerValidate();
  }, [inputEmail, inputName, inputPassword]);

  const createUser = async () => {
    const newUser = {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
      role: 'client',
    };

    const created = await createNewUser(newUser);

    if ('message' in created) {
      setValidationMessage(true);
    } else {
      setValidationMessage(false);
      addUser(created);
      navigate('/products');
    };
  };

  return (
    <div>
      <NavBarLogin />
      <main>
        <div className="global-div">
            <div className="register-title-container">
              <h1 className="register-title">Cadastro</h1>
            </div>
            <div className="register-box" />
            <div className="name-input-container">
              <label htmlFor="name">
                Nome
                <input
                  className="input-login-register"
                  placeholder="digite seu nome"
                  onChange={ (e) => setName(e.target.value) }
                  name="name"
                  value={ inputName }
                />
              </label>
            </div>
            <div className="email-register-container">
              <label htmlFor="email">
                E-mail
                <input
                  className="input-login-register"
                  placeholder="digite seu e-mail"
                  onChange={ (e) => setEmail(e.target.value) }
                  name="email"
                  value={ inputEmail }
                />
              </label>
            </div>
            <div className="password-register-container">
              <label htmlFor="password">
                Senha
                <input
                  className="input-login-register"
                  placeholder="digite sua senha"
                  onChange={ (e) => setPassword(e.target.value) }
                  name="password"
                  value={ inputPassword }
                />
              </label>
            </div>
            <div className="register-btn-page-container">
              <button
                className="login-btn"
                type="button"
                onClick={ () => createUser() }
                disabled={ isDisabled }
              >
                CADASTRAR
              </button>
            </div>
            {validationMessage && (
              <span
                className="invalid-data-message"
              >
                Dados inválidos
              </span>
            )}
        </div>
      </main>
    </div>
  );
};

export default Register;
