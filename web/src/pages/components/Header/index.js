import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../../assets/white-logo.png';

export default function Header() {
  return (
    <div id="header-container">
      <Link to="/" className="logo">
        <img className="logo" src={logo} alt="Logo Árvore" />
      </Link>

      <div className="header-menu">
        <Link to="/">Início</Link>
        <Link to="/">Categorias</Link>
        <Link to="/">Banca</Link>
        <Link to="/">Indicados</Link>
        <Link to="/liga">Liga</Link>
        <Link to="/">Atividades</Link>
        <Link to="/">Favoritos</Link>
        <Link to="/">Meus E-Books</Link>
      </div>

      <div className="user-info">
        <div className="avatar" />

        <div className="dropdown">
          <button type="button" className="dropbtn">
            Nome do Usuário
            <i className="fa fa-caret-down arrow" />
          </button>

          <div className="dropdown-content">
            <Link to="/">Alterar senha</Link>
            <Link to="/">Alterar nome de usuário</Link>
            <Link to="/">Sair</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
