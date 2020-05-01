import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import logoFont from '../assets/static/logo-font.png';
import logoIcon from '../assets/static/logo-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <img className='login__container--img' src={logoIcon} alt='PlatziVideo' />
      <h2 className='login__container--tittle' tabIndex='0'>Inicia Sesion</h2>
      <form className='login__container--form'>
        <input className='input1' type='text' placeholder='Correo' aria-label='Correo' />
        <input className='input1' type='password' placeholder='Contraseña' aria-label='Contraseña' />
        <button className='button'>Inicia sesion</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' />
            Recuerdame
          </label>
          <a href='/'>Olvide mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Inicia secion con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
          Inicia secion con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta 
        <a href='/'>Registrate</a>
      </p>
    </section>
  </section>
);

export default Login;
