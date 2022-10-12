import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import NavBarLogin from '../components/NavBarLogin';
import { loginUser } from '../api/getFromApi';
import { addUser } from '../api/localStorage';

function LoginPage() {
  const [inputLogin, setLogin] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
  const [validationMessage, setValidationMessage] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    const login = {
      email: inputLogin,
      password: inputPassword,
    };

    const response = await loginUser(login);
    console.log(response);

    if ('message' in response) {
      setValidationMessage(true);
    } else {
      setValidationMessage(false);
      navigate('/products');
      addUser(response);
    }
  };

  useEffect(() => {
    const validateInputAndEmail = () => {
      const MIN_PASSWORD_LENGTH = 6;
      if (validateEmail(inputLogin) && inputPassword.length >= MIN_PASSWORD_LENGTH) {
        setLoginBtnDisabled(false);
      }

      return loginBtnDisabled;
    };
    validateInputAndEmail();
  }, [inputLogin, inputPassword, loginBtnDisabled]);

  return (
    <main>
      {/* <NavBarLogin /> */}
        <div className="login-box">
          {validationMessage && (
            <span
              className="invalid-email-message"
              data-testid="common_login__element-invalid-email"
            >
             E-mail inválido!
            </span>
          )}
        </div>
        <div className="login-input-container">
            <label htmlFor="email">
                Login
                <input
                className="input-login-register"
                type="text"
                data-testid="common_login__input-email"
                name="email"
                value={ inputLogin }
                placeholder="digite seu e-mail"
                onChange={ (e) => setLogin(e.target.value) }
                />
            </label>
        </div>
        <div className="password-input-container">
            <label htmlFor="password">
                Senha
                <input
                className="input-login-register"
                type="password"
                data-testid="common_login__input-password"
                name="password"
                value={ inputPassword }
                placeholder="digite sua senha"
                onChange={ (e) => setPassword(e.target.value) }
                />
            </label>
        </div>
        <div className="login-btn-container">
            <button
                className="login-btn"
                data-testid="common_login__button-login"
                type="button"
              onClick={ handleSubmit }
                disabled={ loginBtnDisabled }
            >
                LOGIN
            </button>
        </div>
        <div className="register-btn-container">
            <button
                className="register-btn"
                data-testid="common_login__button-register"
                type="button"
                onClick={ () => navigate('/register') }
            >
              <span className="register-text">Ainda não tenho conta</span>
            </button>
        </div>
    </main>
  );
}

export default LoginPage;
