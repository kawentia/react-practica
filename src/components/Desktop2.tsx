import React from 'react';
import './Desktop2.css';
import { Link } from 'react-router-dom';

const Desktop2: React.FC = () => {
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

          <div className="card-registration-teacher">
            <h2 className="card-registration__title">Регістрація</h2>
            <div className="form-group"><input className="ipad" name="name" id="name" type="text" placeholder="Ім'я" /></div>
            <div className="form-group"><input className="ipad" name="surname" id="surname" type="text" placeholder="Прізвище" />
            </div>
            <div className="form-group"><input className="ipad" name="patronymic" id="patronymic" type="text"
              placeholder="По-батькові" /></div>
            <div className="form-group"><input className="ipad" name="email" id="email" type="email" placeholder="Email" /></div>
            <div className="form-group"><input className="ipad" name="password" id="password" type="password"
              placeholder="Password" /></div>
            <div className="form-group"><input className="ipad" name="subject" id="subject" type="text" placeholder="Предмет:" />
            </div>
            <button>Реєстрація</button>
            <p className="entrance__text">Вже маєте аккаунт? <Link className="entrance__link" to="/Desktop">Увійти</Link></p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Desktop2;
