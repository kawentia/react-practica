import React from 'react';
import './Desktop1.css';
import { Link } from 'react-router-dom';

const Desktop1: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <ul className="navbar-list">
            <li>
              <Link to="/Desktop">
                <img className="icon" src="../../img/icon.png" alt="icon" />
                <p className="navbar-list__item">Ел. щоденник</p>
              </Link>
            </li>
            <li>
              <Link to="/Desktop">
                <p className="navbar-list__item">Вхід</p>
                <img className="user" src="../../img/user.png" alt="user" />
              </Link>
            </li>
          </ul>
        </div>
      </header>


      <main className="main">
        <div className="container">

          <div className="card-registration">
            <h2 className="card-registration__title">Оберіть хто ви</h2>
            <ul className="form-group-registration">
              <li className="form-group-registration__item"><Link className="form-group-registration__link-pupil"
                to="/Desktop3">УЧЕНЬ/ЦЯ</Link></li>
              <li className="form-group-registration__item"><Link className="form-group-registration__link-teacher"
                to="/Desktop2">ВЧИТЕЛЬ</Link></li>
            </ul>
            <p className="entrance__text">Вже маєте аккаунт? <Link className="entrance__link" to="/Desktop">Увійти</Link></p>
          </div>

        </div>
      </main>
    </div>

  );
};

export default Desktop1;
