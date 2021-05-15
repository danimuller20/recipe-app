import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useRecipeContext } from '../contexts/recipeContext';
import styles from './login.module.css';

function Login() {
  const { handleLocalStorage } = useRecipeContext();

  const [userData, setUserData] = useState({
    emailInput: '',
    passwordInput: '',
  });
  const [isDataValid, setIsDataValid] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  function handleInputChange({ target }) {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  }

  function userEmailLocalStorage() {
    const { emailInput } = userData;
    const email = { email: emailInput };
    localStorage.setItem('user', JSON.stringify(email));
    setShouldRedirect(true);
  }

  useEffect(() => {
    const { emailInput, passwordInput } = userData;
    const emailValidated = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(emailInput);
    const passwordRegex = new RegExp(/[\w\D]{7}/g);

    if (emailValidated && passwordRegex.test(passwordInput)) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [userData]);

  if (shouldRedirect) return <Redirect to="/comidas" />;

  return (
    <div className={ styles.formContainer }>
      <h1>Login</h1>
      <Form className={ styles.form }>
        <Form.Group controlId="formBasicEmail">
          <Form.Label
          />
          <Form.Control
            type="email"
            placeholder="Email"
            data-testid="email-input"
            name="emailInput"
            onChange={ handleInputChange }
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label
          />
          <Form.Control
            placeholder="Senha com 7 ou mais dígitos"
            type="password"
            data-testid="password-input"
            name="passwordInput"
            onChange={ handleInputChange }
          />
        </Form.Group>
        <Button
          className={ styles.formBtn }
          variant="danger"
          type="button"
          data-testid="login-submit-btn"
          id="login-submit-btn"
          name="login-submit-btn"
          disabled={ isDataValid }
          onClick={ () => { handleLocalStorage(); userEmailLocalStorage(); } }
        >
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
